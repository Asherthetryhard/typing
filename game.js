let sentence = '';
let startTime = 0;
let inputText = '';
let cps = 0;
let isTyping = false;
let timer;
const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "To be or not to be, that is the question.",
  "All that glitters is not gold.",
  "A journey of a thousand miles begins with a single step.",
  "In the end, we only regret the chances we didn't take."
];

function startGame() {
  document.getElementById('menu-screen').style.display = 'none';
  document.getElementById('game-screen').style.display = 'block';
  sentence = sentences[Math.floor(Math.random() * sentences.length)];
  document.getElementById('sentence').innerText = sentence;
  document.getElementById('input-field').value = '';
  startTime = Date.now();
  isTyping = true;
  cps = 0;
  updateCPS();
}

function checkInput() {
  inputText = document.getElementById('input-field').value;
  if (inputText === sentence) {
    isTyping = false;
    clearInterval(timer);
    alert("You've completed the sentence!");
  }
}

function updateCPS() {
  if (isTyping) {
    const elapsedTime = (Date.now() - startTime) / 1000; // in seconds
    const wordsTyped = inputText.length;
    cps = wordsTyped / elapsedTime;
    document.getElementById('cps').innerText = cps.toFixed(2);
    timer = setTimeout(updateCPS, 100);
  }
}

function exitGame() {
  document.getElementById('game-screen').style.display = 'none';
  document.getElementById('menu-screen').style.display = 'block';
  clearInterval(timer);
  cps = 0;
  document.getElementById('cps').innerText = cps;
}
