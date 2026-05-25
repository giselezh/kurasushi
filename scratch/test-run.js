// Mock browser globals to test app.js compilation & early execution
global.window = {
  onload: null,
  speechSynthesis: {
    cancel: () => {},
    speak: () => {},
    speaking: false,
    paused: false
  },
  addEventListener: () => {}
};
global.document = {
  documentElement: { lang: 'zh-TW', setAttribute: () => {} },
  getElementById: () => ({
    addEventListener: () => {},
    querySelector: () => ({ textContent: '' }),
    querySelectorAll: () => [],
    appendChild: () => {},
    removeAttribute: () => {},
    setAttribute: () => {},
    classList: { add: () => {}, remove: () => {}, toggle: () => {} }
  }),
  querySelectorAll: () => []
};
global.AudioContext = function() {
  return { state: 'suspended', resume: () => {} };
};
global.webkitAudioContext = global.AudioContext;

try {
  require('../app.js');
  console.log("SUCCESS: app.js parsed and loaded into memory successfully.");
} catch (err) {
  console.error("ERROR while running app.js:", err);
}
