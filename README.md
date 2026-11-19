# Quran Word Quest

A playful, offline web app with three activities that help a child learn Arabic words from Juz 30 (the last juz of the Quran).

## Play

Open `index.html` in any modern browser. No install, server, or internet connection is needed.

## Activities

### 1. Word Quiz

- Each round shows 10 words the player has not seen recently.
- Questions alternate between:
  - finding the Arabic word that matches an English meaning and emoji, and
  - reading an Arabic word and choosing its meaning.
- Correct answers earn stars and confetti. Wrong answers gently reveal the right word.
- Each answer reveals the Arabic word, its sound, its meaning, and the surah where it appears. The word is spoken aloud automatically, and 🔊 buttons replay it.
- After 10 words, a result screen celebrates the score and lists every word practiced.

### 2. Surah Explorer

- Choose from all 37 surahs of Juz 30, in Quran order.
- Every surah has at least 5 verified words from that surah.
- Match each Arabic word to its meaning by dragging a word onto a meaning card, or by tapping a word and then tapping its meaning.
- Each match reveals the word, its sound, its meaning, and a simple tafsir-style note in the spirit of a short *mukhtasar* explanation.
- The result screen lists all matched words with notes and 🔊 replay buttons.

### 3. Juz Garden

- A memorisation tracker saved in the browser with `localStorage`; no account or internet needed.
- Enter your name at the top of the garden. It is remembered by default so the tree greets you next time; untick "Remember me" to keep it for this session only.
- Tap any of the 37 surahs to mark it memorised. Tap again to undo.
- Each memorised surah grows a colourful fruit on the tree, labelled with its surah number and name. The tree gets fuller as more surahs are memorised, and a banner shows the latest finished surah.
- Milestone badges unlock at 5, 10, 20, 30, and 37 surahs, with confetti and encouragement.
- The "Fresh garden" button clears saved progress after confirmation.

## Files

- `index.html` - screens and markup.
- `style.css` - colorful, RTL-aware styling and animations.
- `script.js` - word data, all three activities, scoring, speech, saved progress, confetti.
- `AGENTS.md` - instructions for AI agents working with the project.

## Editing words

Word data lives in the `words` array in `script.js`, built from `baseWords` and the `words` inside `surahLessons`. Add entries with `arabic`, `transliteration`, `meaning`, `emoji`, and `surah` (the English name of a Juz 30 surah where the word actually appears). Surah lesson entries also include a short `note`. Verify the surah against the Quran text; keep each `meaning` unique so quiz options stay unambiguous. Pronunciation comes from the browser's built-in speech synthesis (`speakArabic()`), so no audio files are needed. An Arabic voice must be installed on the device for the most accurate pronunciation; otherwise the default voice is used.

## Verification

```
node --check script.js
```
