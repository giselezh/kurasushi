@echo off
:: ==============================================================================
# KURA SUSHI TAIWAN CASE STUDY & LAB - DEV SERVER BOOTSTRAP
# Double-click this script in Windows Explorer to launch the local live server!
:: ==============================================================================
title Kura Sushi Live Dev Server
color 0b

echo ======================================================================
echo    KURA SUSHI TAIWAN CASE STUDY - BOOTSTRAPPING LOCAL DEV SERVER
echo ======================================================================
echo.
echo  Starting local server...
echo  If prompted by Windows Firewall, please grant permission.
echo.

:: Execute PowerShell script bypassing the execution policy for this one session
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0dev-server.ps1"

echo.
echo ======================================================================
echo    DEV SERVER CLOSED
echo ======================================================================
pause
