const WORDS_PER_ROUND = 8;

const words = [
  { arabic: "شَمْس", transliteration: "shams", meaning: "sun", emoji: "☀️", surah: "At-Takwir" },
  { arabic: "قَمَر", transliteration: "qamar", meaning: "moon", emoji: "🌙", surah: "Al-Inshiqaq" },
  { arabic: "نَجْم", transliteration: "najm", meaning: "star", emoji: "⭐", surah: "At-Tariq" },
  { arabic: "سَمَاء", transliteration: "sama'", meaning: "sky", emoji: "🌌", surah: "An-Naba" },
  { arabic: "أَرْض", transliteration: "ard", meaning: "earth", emoji: "🌍", surah: "An-Naba" },
  { arabic: "بِحَار", transliteration: "bihar", meaning: "seas", emoji: "🌊", surah: "At-Takwir" },
  { arabic: "جِبَال", transliteration: "jibal", meaning: "mountains", emoji: "⛰️", surah: "An-Naba" },
  { arabic: "مَاء", transliteration: "ma'", meaning: "water", emoji: "💧", surah: "An-Naba" },
  { arabic: "لَيْل", transliteration: "layl", meaning: "night", emoji: "🌃", surah: "An-Naba" },
  { arabic: "نَهَار", transliteration: "nahar", meaning: "daytime", emoji: "🌞", surah: "An-Naba" },
  { arabic: "يَوْم", transliteration: "yawm", meaning: "day", emoji: "📅", surah: "An-Naba" },
  { arabic: "نَاس", transliteration: "nas", meaning: "people", emoji: "👥", surah: "Al-Mutaffifin" },
  { arabic: "رَبّ", transliteration: "rabb", meaning: "Lord", emoji: "🤲", surah: "An-Naba" },
  { arabic: "مَلِك", transliteration: "malik", meaning: "king", emoji: "👑", surah: "Al-Buruj" },
  { arabic: "كِتَاب", transliteration: "kitab", meaning: "book", emoji: "📖", surah: "Al-Mutaffifin" },
  { arabic: "قَلَم", transliteration: "qalam", meaning: "pen", emoji: "✒️", surah: "Al-Alaq" },
  { arabic: "عِلْم", transliteration: "'ilm", meaning: "knowledge", emoji: "📚", surah: "Al-Alaq" },
  { arabic: "بَيْت", transliteration: "bayt", meaning: "house", emoji: "🏠", surah: "Quraysh" },
  { arabic: "طَعَام", transliteration: "ta'am", meaning: "food", emoji: "🍞", surah: "Al-Ghashiyah" },
  { arabic: "فِيل", transliteration: "fil", meaning: "elephant", emoji: "🐘", surah: "Al-Fil" },
  { arabic: "طَيْر", transliteration: "tayr", meaning: "bird", emoji: "🐦", surah: "Al-Fil" },
  { arabic: "إِبِل", transliteration: "ibil", meaning: "camels", emoji: "🐫", surah: "Al-Ghashiyah" },
  { arabic: "زَيْتُون", transliteration: "zaytun", meaning: "olives", emoji: "🫒", surah: "At-Tin" },
  { arabic: "إِنْسَان", transliteration: "insan", meaning: "human", emoji: "🧒", surah: "An-Nazi'at" },
  { arabic: "يَد", transliteration: "yad", meaning: "hand", emoji: "✋", surah: "Al-Masad" },
  { arabic: "عَيْن", transliteration: "'ayn", meaning: "eye", emoji: "👁️", surah: "Al-Ghashiyah" },
  { arabic: "لِسَان", transliteration: "lisan", meaning: "tongue", emoji: "👅", surah: "Al-Balad" },
  { arabic: "خَيْر", transliteration: "khayr", meaning: "good", emoji: "👍", surah: "Al-A'la" },
  { arabic: "شَرّ", transliteration: "sharr", meaning: "bad", emoji: "👎", surah: "Al-Bayyinah" },
  { arabic: "سَلَام", transliteration: "salam", meaning: "peace", emoji: "🕊️", surah: "Al-Qadr" },
  { arabic: "دِين", transliteration: "din", meaning: "religion", emoji: "🕌", surah: "Al-Infitar" },
  { arabic: "صَبْر", transliteration: "sabr", meaning: "patience", emoji: "🧘", surah: "Al-Balad" },
  { arabic: "حَقّ", transliteration: "haqq", meaning: "truth", emoji: "✅", surah: "An-Naba" },
  { arabic: "نَصْر", transliteration: "nasr", meaning: "victory", emoji: "🏆", surah: "An-Nasr" },
  { arabic: "شِتَاء", transliteration: "shita'", meaning: "winter", emoji: "❄️", surah: "Quraysh" },
  { arabic: "صَيْف", transliteration: "sayf", meaning: "summer", emoji: "🏖️", surah: "Quraysh" }
];

const correctPraise = [
  "Wonderful reading! 🌟",
  "You got it! 🎉",
  "MashAllah! ⭐",
  "Super star! 💫",
  "Great job! 👏"
];

const wrongComfort = [
  "Good try! 💛",
  "No worries, keep going! 🌈",
  "Nice effort! 🤗",
  "That's okay! ✨"
];

const results = [
  { min: 0, title: "You did it! 🎉", message: "Every word you read makes you stronger. Let's play again soon!" },
  { min: 4, title: "Great job! 🌟", message: "You are reading Arabic words so well. Keep practicing!" },
  { min: 6, title: "Amazing! 🏆", message: "MashAllah! Your Arabic reading is growing every day." },
  { min: 8, title: "Perfect star! ⭐", message: "Wow! You read every word perfectly. You are a superstar!" }
];

const el = {
  startScreen: document.getElementById("start-screen"),
  quizScreen: document.getElementById("quiz-screen"),
  resultScreen: document.getElementById("result-screen"),
  startBtn: document.getElementById("start-btn"),
  homeBtn: document.getElementById("home-btn"),
  nextBtn: document.getElementById("next-btn"),
  againBtn: document.getElementById("again-btn"),
  resultHomeBtn: document.getElementById("result-home-btn"),
  progressText: document.getElementById("progress-text"),
  progressFill: document.getElementById("progress-fill"),
  score: document.getElementById("score"),
  questionArea: document.getElementById("question-area"),
  questionLabel: document.getElementById("question-label"),
  promptEmoji: document.getElementById("prompt-emoji"),
  promptText: document.getElementById("prompt-text"),
  options: document.getElementById("options"),
  feedback: document.getElementById("feedback"),
  feedbackEmoji: document.getElementById("feedback-emoji"),
  feedbackTitle: document.getElementById("feedback-title"),
  answerReveal: document.getElementById("answer-reveal"),
  answerExtra: document.getElementById("answer-extra"),
  answerSurah: document.getElementById("answer-surah"),
  listenBtn: document.getElementById("listen-btn"),
  resultTitle: document.getElementById("result-title"),
  resultStars: document.getElementById("result-stars"),
  finalScore: document.getElementById("final-score"),
  resultMessage: document.getElementById("result-message"),
  learnedList: document.getElementById("learned-list"),
  confetti: document.getElementById("confetti"),
  bubbles: document.getElementById("bubbles")
};

let roundWords = [];
let usedWordIndexes = [];
let currentIndex = 0;
let score = 0;
let answeredWords = [];
let locked = false;

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function showScreen(screen) {
  [el.startScreen, el.quizScreen, el.resultScreen].forEach((s) => s.classList.add("hidden"));
  screen.classList.remove("hidden");
}

function speakArabic(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ar-SA";
  utterance.rate = 0.65;
  utterance.pitch = 1.05;
  const arabicVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => /^ar/i.test(voice.lang) || /arabic/i.test(voice.name));
  if (arabicVoice) {
    utterance.voice = arabicVoice;
  }
  window.speechSynthesis.speak(utterance);
}

function pickRoundWords() {
  if (usedWordIndexes.length + WORDS_PER_ROUND > words.length) {
    usedWordIndexes = [];
  }
  const pool = words.map((_, i) => i).filter((i) => !usedWordIndexes.includes(i));
  const picked = shuffle(pool).slice(0, WORDS_PER_ROUND);
  picked.forEach((i) => usedWordIndexes.push(i));
  return picked.map((i) => words[i]);
}

function makeOptions(correctWord, mode) {
  const distractors = shuffle(
    words.filter((w) => w.meaning !== correctWord.meaning && w.arabic !== correctWord.arabic)
  ).slice(0, 3);
  const all = shuffle([correctWord, ...distractors]);
  return all.map((word) => ({
    word,
    isCorrect: word.meaning === correctWord.meaning,
    label: mode === "find" ? word.arabic : `${word.emoji} ${word.meaning}`,
    isArabic: mode === "find"
  }));
}

function showQuestion() {
  locked = false;
  el.feedback.classList.add("hidden");
  el.questionArea.classList.remove("hidden");

  const word = roundWords[currentIndex];
  const mode = currentIndex % 2 === 0 ? "find" : "read";

  el.progressText.textContent = `Word ${currentIndex + 1} of ${roundWords.length}`;
  el.progressFill.style.width = `${((currentIndex + 1) / roundWords.length) * 100}%`;
  el.score.textContent = `⭐ ${score}`;

  if (mode === "find") {
    el.questionLabel.textContent = "👆 Tap the Arabic word for:";
    el.promptEmoji.textContent = word.emoji;
    el.promptText.textContent = word.meaning;
    el.promptText.classList.remove("arabic");
    el.promptText.removeAttribute("dir");
    el.promptText.removeAttribute("lang");
  } else {
    el.questionLabel.textContent = "📖 What does this word mean?";
    el.promptEmoji.textContent = "";
    el.promptText.textContent = word.arabic;
    el.promptText.classList.add("arabic");
    el.promptText.setAttribute("dir", "rtl");
    el.promptText.setAttribute("lang", "ar");
  }

  const options = makeOptions(word, mode);
  el.options.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `option${option.isArabic ? " arabic" : ""}`;
    button.textContent = option.label;
    if (option.isArabic) {
      button.setAttribute("dir", "rtl");
      button.setAttribute("lang", "ar");
    }
    button.addEventListener("click", () => handleAnswer(option, button));
    el.options.appendChild(button);
  });
}

function handleAnswer(option, button) {
  if (locked) return;
  locked = true;

  const word = roundWords[currentIndex];
  const correct = option.isCorrect;

  Array.from(el.options.children).forEach((child) => {
    child.disabled = true;
    if (child === button) {
      child.classList.add(correct ? "correct" : "wrong");
    }
    if (!correct && child.getAttribute("lang") === "ar" && child.textContent === word.arabic) {
      child.classList.add("correct");
    }
  });

  if (correct) {
    score += 1;
    el.score.textContent = `⭐ ${score}`;
    launchConfetti();
  }

  answeredWords.push(word);
  el.questionArea.classList.add("hidden");
  el.feedback.classList.remove("hidden");
  el.feedbackEmoji.textContent = correct ? "🎉" : "💛";
  el.feedbackTitle.textContent = correct
    ? correctPraise[Math.floor(Math.random() * correctPraise.length)]
    : wrongComfort[Math.floor(Math.random() * wrongComfort.length)];
  el.answerReveal.textContent = word.arabic;
  el.answerExtra.textContent = `${word.transliteration} = "${word.meaning}" ${word.emoji}`;
  el.answerSurah.textContent = `📍 Surah ${word.surah}`;
  speakArabic(word.arabic);
  el.nextBtn.textContent = currentIndex === roundWords.length - 1 ? "See Results 🏆" : "Next Word ➜";
}

function nextQuestion() {
  currentIndex += 1;
  if (currentIndex >= roundWords.length) {
    showResults();
  } else {
    showQuestion();
  }
}

function showResults() {
  const tier = results.slice().reverse().find((r) => score >= r.min) || results[0];
  el.resultTitle.textContent = tier.title;
  el.resultMessage.textContent = tier.message;
  el.finalScore.textContent = `You got ${score} out of ${roundWords.length}!`;
  const stars = Math.max(1, Math.round((score / roundWords.length) * 5));
  el.resultStars.textContent = "⭐".repeat(stars);

  el.learnedList.innerHTML = "";
  answeredWords.forEach((word) => {
    const li = document.createElement("li");
    const arabic = document.createElement("span");
    arabic.className = "word";
    arabic.textContent = word.arabic;
    arabic.setAttribute("dir", "rtl");
    arabic.setAttribute("lang", "ar");
    const meaning = document.createElement("span");
    meaning.className = "meaning";
    meaning.textContent = `${word.emoji} ${word.meaning}`;
    const source = document.createElement("small");
    source.textContent = `Surah ${word.surah}`;
    meaning.appendChild(source);
    const speakButton = document.createElement("button");
    speakButton.type = "button";
    speakButton.className = "speak-btn";
    speakButton.textContent = "🔊";
    speakButton.setAttribute("aria-label", `Listen to ${word.arabic}`);
    speakButton.addEventListener("click", () => speakArabic(word.arabic));
    li.append(arabic, meaning, speakButton);
    el.learnedList.appendChild(li);
  });

  launchConfetti();
  showScreen(el.resultScreen);
}

function startGame() {
  score = 0;
  currentIndex = 0;
  answeredWords = [];
  roundWords = pickRoundWords();
  showScreen(el.quizScreen);
  showQuestion();
}

function launchConfetti() {
  const colors = ["#ff7a59", "#ffc93c", "#43c59e", "#7d7bf5", "#ff8fc7"];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDuration = `${1.6 + Math.random() * 1.4}s`;
    piece.style.animationDelay = `${Math.random() * 0.3}s`;
    el.confetti.appendChild(piece);
    setTimeout(() => piece.remove(), 3400);
  }
}

function createBubbles() {
  for (let i = 0; i < 14; i++) {
    const bubble = document.createElement("span");
    bubble.className = "bubble";
    const size = 20 + Math.random() * 70;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.animationDuration = `${10 + Math.random() * 14}s`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;
    el.bubbles.appendChild(bubble);
  }
}

el.startBtn.addEventListener("click", startGame);
el.listenBtn.addEventListener("click", () => speakArabic(el.answerReveal.textContent));
el.homeBtn.addEventListener("click", () => showScreen(el.startScreen));
el.nextBtn.addEventListener("click", nextQuestion);
el.againBtn.addEventListener("click", startGame);
el.resultHomeBtn.addEventListener("click", () => showScreen(el.startScreen));

createBubbles();
showScreen(el.startScreen);
