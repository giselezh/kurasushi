# ==============================================================================
# KURA SUSHI TAIWAN CASE STUDY & LAB - LIVE LOCAL DEVELOPMENT SERVER
# A lightweight, Zero-Dependency, High-Performance HTTP Server in PowerShell.
# Supported on all modern Windows environments out-of-the-box.
# ==============================================================================

# Enable UTF-8 Output in PowerShell
$OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8

$Cwd = $PSScriptRoot
if (-not $Cwd) { $Cwd = Get-Location }

# Configuration
$port = 3000
$listener = New-Object System.Net.HttpListener
$started = $false

# Find an available port automatically starting from 3000
while (-not $started -and $port -lt 3020) {
    try {
        $listener.Prefixes.Clear()
        $listener.Prefixes.Add("http://localhost:$port/")
        $listener.Prefixes.Add("http://127.0.0.1:$port/")
        $listener.Start()
        $started = $true
    } catch {
        Write-Host "[Info] Port $port is in use. Trying next port..." -ForegroundColor Yellow
        $port++
    }
}

if (-not $started) {
    Write-Host "[Error] Could not bind to any local port between 3000 and 3019." -ForegroundColor Red
    exit 1
}

$serverUrl = "http://localhost:$port"

Write-Host "`n========================================================" -ForegroundColor Cyan
Write-Host "  * KURA SUSHI LIVE DEV SERVER STARTED *" -ForegroundColor Green -NoNewline
Write-Host " (v1.0.0)" -ForegroundColor Gray
Write-Host "  ------------------------------------------------------" -ForegroundColor Cyan
Write-Host "  * URL:          " -NoNewline
Write-Host $serverUrl -ForegroundColor Green -HighLight
Write-Host "  * Workspace:    " -NoNewline
Write-Host $Cwd -ForegroundColor White
Write-Host "  * Live Reload:  " -NoNewline
Write-Host "Active (polling at 800ms interval)" -ForegroundColor Green
Write-Host "  ------------------------------------------------------" -ForegroundColor Cyan
Write-Host "  * Modifying index.html, style.css, or app.js" -ForegroundColor Gray
Write-Host "    will trigger instantaneous browser auto-refresh!" -ForegroundColor Gray
Write-Host "  ------------------------------------------------------" -ForegroundColor Cyan
Write-Host "  * Press [Ctrl + C] in this window to stop server." -ForegroundColor Yellow
Write-Host "========================================================`n" -ForegroundColor Cyan

# Open the site in the default browser automatically
try {
    Start-Process $serverUrl
} catch {
    Write-Host "[Warning] Could not open browser automatically. Please open: $serverUrl" -ForegroundColor Yellow
}

# Function to calculate a unique hash based on workspace file states
function Get-WorkspaceHash {
    $files = Get-ChildItem -Path $Cwd -Recurse -File | Where-Object { 
        $_.Extension -in ".html", ".css", ".js", ".json" -and 
        $_.FullName -notlike "*\.git*" -and 
        $_.FullName -notlike "*\node_modules*"
    }
    # Create a unified string of filenames and their last write times
    $hashData = ($files | ForEach-Object { $_.FullName + ":" + $_.LastWriteTime.Ticks }) -join ";"
    return $hashData
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        $url = $request.Url.LocalPath
        
        # Add basic CORS & Dev Headers
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Access-Control-Allow-Headers", "*")
        $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")
        $response.AddHeader("Pragma", "no-cache")
        $response.AddHeader("Expires", "0")
        
        # Live Reload Endpoint
        if ($url -eq "/__livereload") {
            $hash = Get-WorkspaceHash
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($hash)
            $response.ContentType = "text/plain; charset=utf-8"
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.Close()
            continue
        }
        
        # Map Request URL to Local File System
        $localPath = ""
        if ($url -eq "/") {
            $localPath = Join-Path $Cwd "index.html"
        } else {
            # Trim leading slash and replace url slashes with local OS path separators
            $relPath = $url.TrimStart('/').Replace('/', [IO.Path]::DirectorySeparatorChar)
            $localPath = Join-Path $Cwd $relPath
        }
        
        # Serve the File if it exists
        if (Test-Path $localPath -PathType Leaf) {
            $ext = [IO.Path]::GetExtension($localPath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css" { "text/css; charset=utf-8" }
                ".js" { "application/javascript; charset=utf-8" }
                ".png" { "image/png" }
                ".jpg" { "image/jpeg" }
                ".jpeg" { "image/jpeg" }
                ".gif" { "image/gif" }
                ".svg" { "image/svg+xml; charset=utf-8" }
                ".ico" { "image/x-icon" }
                ".json" { "application/json; charset=utf-8" }
                ".mp3" { "audio/mpeg" }
                ".mp4" { "video/mp4" }
                default { "application/octet-stream" }
            }
            
            $response.ContentType = $contentType
            
            if ($ext -eq ".html") {
                # Read HTML and inject Live Reload Client Script before closing body tag
                $html = [System.IO.File]::ReadAllText($localPath)
                $injectScript = @"

<!-- ========================================== -->
<!-- Injected Live-Reload Script (Dev Mode)    -->
<!-- ========================================== -->
<script>
  (function() {
    let currentHash = null;
    function checkReload() {
      fetch('/__livereload')
        .then(res => {
          if (!res.ok) throw new Error('Dev server unreachable');
          return res.text();
        })
        .then(hash => {
          if (currentHash === null) {
            currentHash = hash;
          } else if (currentHash !== hash) {
            console.log('[LiveReload] Local file change detected! Refreshing...');
            location.reload();
          }
        })
        .catch(err => {
          // Silent catch when server temporarily reboots or goes offline
        });
    }
    // Check every 800ms for instantaneous responsive feedback
    setInterval(checkReload, 800);
  })();
</script>
</body>
"@
                $html = $html.Replace("</body>", $injectScript)
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($html)
            } else {
                $buffer = [System.IO.File]::ReadAllBytes($localPath)
            }
            
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
            $response.Close()
            
            Write-Host "[200 OK] Served: $url" -ForegroundColor Green
        } else {
            # File Not Found
            Write-Host "[404 Not Found] Requested: $url" -ForegroundColor Red
            $response.StatusCode = 404
            $errBuffer = [System.Text.Encoding]::UTF8.GetBytes("<h1>404 Not Found</h1><p>The file <b>$url</b> was not found on this development server.</p>")
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $errBuffer.Length
            $response.OutputStream.Write($errBuffer, 0, $errBuffer.Length)
            $response.Close()
        }
    }
} catch {
    # Fail-safe handling for listener interruptions
    Write-Host "`n[Info] Server listener closed or encountered an exception: $_" -ForegroundColor DarkGray
} finally {
    $listener.Stop()
    $listener.Close()
    Write-Host "Dev Server stopped. Goodbye!" -ForegroundColor Cyan
}
