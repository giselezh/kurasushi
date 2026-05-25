// Retro Arcade SFX Synthesizer using Web Audio API
// Self-contained sound engine with no external file dependencies.

let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const sfx = {
  // Simple clean click sound
  click: () => {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
      
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.08);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      console.warn("SFX Error:", e);
    }
  },

  // Eaten sushi plate sound (cheerful dynamic bubble chirp)
  eat: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Tone 1
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(350, now);
      osc1.frequency.exponentialRampToValueAtTime(800, now + 0.12);
      gain1.gain.setValueAtTime(0.12, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      // Tone 2 (slight offset)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(520, now + 0.04);
      osc2.frequency.exponentialRampToValueAtTime(1200, now + 0.16);
      gain2.gain.setValueAtTime(0.08, now + 0.04);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      
      osc1.start(now);
      osc1.stop(now + 0.12);
      osc2.start(now + 0.04);
      osc2.stop(now + 0.16);
    } catch (e) {
      console.warn("SFX Error:", e);
    }
  },

  // Plate slide insertion slot sound (low mechanical metallic slide + click)
  insert: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.linearRampToValueAtTime(80, now + 0.15);
      
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.15);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start();
      osc.stop(now + 0.15);
      
      // Sharp click at the end of insertion
      setTimeout(() => {
        const clickOsc = ctx.createOscillator();
        const clickGain = ctx.createGain();
        clickOsc.type = 'triangle';
        clickOsc.frequency.setValueAtTime(400, ctx.currentTime);
        clickGain.gain.setValueAtTime(0.05, ctx.currentTime);
        clickGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);
        clickOsc.connect(clickGain);
        clickGain.connect(ctx.destination);
        clickOsc.start();
        clickOsc.stop(ctx.currentTime + 0.03);
      }, 120);
    } catch (e) {
      console.warn("SFX Error:", e);
    }
  },

  // Coin drop / Gachapon roll sound (metallic rattling)
  roll: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      for (let i = 0; i < 4; i++) {
        const time = now + i * 0.1;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(800 + i * 150, time);
        osc.frequency.exponentialRampToValueAtTime(300, time + 0.08);
        gain.gain.setValueAtTime(0.04, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(time);
        osc.stop(time + 0.08);
      }
    } catch (e) {
      console.warn("SFX Error:", e);
    }
  },

  // Winning fanfare chime (highly cheerful retro arpeggio)
  win: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
      
      notes.forEach((freq, index) => {
        const time = now + index * 0.12;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);
        gain.gain.setValueAtTime(0.12, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + 0.25);
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.start(time);
        osc.stop(time + 0.28);
      });
      
      // Final long vibrating high note
      const finalTime = now + notes.length * 0.12;
      const finalOsc = ctx.createOscillator();
      const finalGain = ctx.createGain();
      finalOsc.type = 'triangle';
      finalOsc.frequency.setValueAtTime(1318.51, finalTime); // E6
      finalGain.gain.setValueAtTime(0.12, finalTime);
      finalGain.gain.exponentialRampToValueAtTime(0.001, finalTime + 0.6);
      finalOsc.connect(finalGain);
      finalGain.connect(ctx.destination);
      finalOsc.start(finalTime);
      finalOsc.stop(finalTime + 0.6);
    } catch (e) {
      console.warn("SFX Error:", e);
    }
  },

  // Losing sound buzzer (sad low dissonant slide)
  lose: () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(180, now);
      osc1.frequency.linearRampToValueAtTime(110, now + 0.45);
      gain1.gain.setValueAtTime(0.12, now);
      gain1.gain.linearRampToValueAtTime(0.001, now + 0.45);
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      
      // Dissonant tone to make it sound sad
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = 'sawtooth';
      osc2.frequency.setValueAtTime(185, now);
      osc2.frequency.linearRampToValueAtTime(112, now + 0.45);
      gain2.gain.setValueAtTime(0.1, now);
      gain2.gain.linearRampToValueAtTime(0.001, now + 0.45);
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      
      osc1.start(now);
      osc1.stop(now + 0.45);
      osc2.start(now);
      osc2.stop(now + 0.45);
    } catch (e) {
      console.warn("SFX Error:", e);
    }
  }
};
