# Quran Word Quest

A playful, offline web quiz that helps a child learn to read common Arabic words from Juz 30 (the last juz of the Quran).

## Play

Open `index.html` in any modern browser. No install, server, or internet connection is needed.

## How it works

- Each round shows 8 words the player has not seen recently.
- Questions alternate between:
  - finding the Arabic word that matches an English meaning and emoji, and
  - reading an Arabic word and choosing its meaning.
- Correct answers earn stars and confetti. Wrong answers gently reveal the right word.
- Each answer reveals the Arabic word, its sound, its meaning, and the surah where it appears. The word is spoken aloud automatically, and 🔊 buttons replay it.
- After 8 words, a result screen celebrates the score and lists every word practiced with its surah and a replay button.

## Files

- `index.html` - screens and markup.
- `style.css` - colorful, RTL-aware styling and animations.
- `script.js` - word data, quiz flow, scoring, confetti.
- `AGENTS.md` - instructions for AI agents working on the project.

## Editing words

Word data lives in the `words` array in `script.js`. Add entries with `arabic`, `transliteration`, `meaning`, `emoji`, and `surah` (the English name of a Juz 30 surah where the word appears). Verify the surah against the Quran text; keep each `meaning` unique so quiz options stay unambiguous. Pronunciation comes from the browser's built-in speech synthesis (`speakArabic()`), so no audio files are needed. An Arabic voice must be installed on the device for the most accurate pronunciation; otherwise the default voice is used.

## Verification

```
node --check script.js
```
