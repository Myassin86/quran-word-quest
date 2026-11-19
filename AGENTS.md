# AGENTS.md

Instructions for AI agents working in this project.

## Project Overview

This is a static, dependency-free web app: an educational quiz game that teaches a child to read and recognize Quranic Arabic words from Juz 30 (the 30th and final juz of the Quran, "Juz Amma", spanning Surah An-Naba to Surah An-Nas). The learner is a young child (roughly ages 7-8), so the tone must be playful, colorful, and encouraging.

Primary learning outcome: the child can recognize and read common Arabic words from Juz 30 on sight, confidently and correctly.

Secondary outcomes: build familiarity with Arabic script direction (RTL), letter shapes, and word meanings; develop a positive association with Quran recitation.

There is no backend, build step, or package manager.

## File Structure

- `index.html` - markup for the start, quiz, and result screens. Loads `style.css` and `script.js`.
- `style.css` - all styling and animations. Must support Arabic text rendering (RTL, appropriate font stack with Arabic fallbacks).
- `script.js` - word data, game state, screen switching, scoring, and celebratory effects (confetti, stars, etc.).
- `README.md` - human-facing documentation.
- `AGENTS.md` - this file.

## How to Run

Open `index.html` in a browser. No install or server is required.

## Verification

Before finishing changes, run:

```
node --check script.js
```

There are no configured lint, test, typecheck, or build commands. If any are added later, document them here.

## Code Conventions

- Use plain HTML, CSS, and vanilla JavaScript only. Do not introduce frameworks or libraries.
- Keep the tone playful and kid-friendly; use emojis, bright colors, and encouraging language.
- Arabic text must be rendered correctly right-to-left. Set `dir="rtl"` and `lang="ar"` on Arabic elements, and use a font stack with Arabic support (e.g., "Amiri", "Noto Naskh Arabic", "Traditional Arabic", serif). Do not rely on CDN-only fonts for correctness; include fallbacks.
- Word data lives in the `words` array in `script.js` (built from `baseWords` plus the words inside `surahLessons`). Each entry must include: `arabic` (the Arabic word), `transliteration` (simplified Latin pronunciation), `meaning` (kid-friendly English meaning), `emoji` (visual cue), and `surah` (English name of a Juz 30 surah where the word actually appears). Surah lesson entries also include a short `note` for simple tafsir-style meaning. Verify the surah against the Quran text before adding or changing a word; never guess it. Each selectable surah lesson must have at least `MIN_SURAH_WORDS` (currently 5) verified words.
- Each round picks `WORDS_PER_ROUND` (currently 10) words the player has not seen yet; once the pool runs out, `usedWordIndexes` resets. Answer options are shuffled per round, so the correct index is remapped.
- Quiz mechanics must prioritize reading/recognition: show the Arabic word prominently, ask the child to identify its meaning or match it to a picture/transliteration, and give immediate, gentle feedback. Avoid time limits that create stress.
- Praise messages live in `correctPraise`, `wrongComfort`, and `results` in `script.js`. Wrong answers should never use negative language; show the correct answer and encourage retrying.
- Result tiers in `results` are ordered from lowest to highest `min` score; `showResults()` reverses them to pick the highest matching tier.
- Keep the three-screen quiz flow intact: `start-screen` -> `quiz-screen` -> `result-screen`, toggled by `showScreen()` via the `hidden` class. Surah Explorer adds `surah-screen` and `surah-result-screen`; Juz Garden adds `tracker-screen`. `showScreen()` hides every screen before showing the requested one.
- Juz Garden stores memorised surah names in `localStorage` under `STORAGE_KEY` and the child's name under `NAME_STORAGE_KEY`. The name is saved only when the "Remember me" checkbox is ticked; unticking it removes the saved name but keeps it for the current session. Keep persistence optional and safe: loading and saving must be wrapped in try/catch so the app still works when storage is unavailable. Milestones live in `MILESTONES` and unlock in ascending order.
- Element IDs referenced in `script.js` must stay in sync with `index.html`.
- Celebratory effects (confetti, stars, bubbles) are created dynamically in JavaScript and removed after their animations; keep them lightweight for typical laptops/tablets.
- Pronunciation uses the browser's built-in Web Speech API in `speakArabic()` with `lang = "ar-SA"` and a slow rate (0.65) so a child can hear the word. Do not add audio files, libraries, or CDNs. The word is spoken automatically when the answer is revealed; the 🔊 buttons replay it. If no Arabic voice is installed, the browser's default voice is used.

## Content Guidelines (Juz 30)

- Focus on high-frequency, visually distinct Arabic words from Juz 30 (e.g., words from Surah An-Naba, An-Nazi'at, Abasa, At-Takwir, Al-Infitar, Al-Inshiqaq, Al-Mutaffifin, Al-Buruj, At-Tariq, Al-A'la, Al-Ghashiyah, Al-Fajr, Al-Balad, Ash-Shams, Al-Lail, Ad-Duha, Ash-Sharh, At-Tin, Al-Alaq, Al-Qadr, Al-Bayyinah, Al-Zalzalah, Al-Adiyat, Al-Qariah, At-Takathur, Al-Asr, Al-Humazah, Al-Fil, Quraysh, Al-Ma'un, Al-Kawthar, Al-Kafirun, An-Nasr, Al-Masad, Al-Ikhlas, Al-Falaq, An-Nas).
- Start with short, common words (e.g., "لا", "إلا", "رب", "يوم", "ناس", "ملك", "علم", "كتاب") before longer ones.
- Provide a transliteration and a simple English meaning so the child connects sound, shape, and meaning.
- Show the surah name when the answer is revealed and in the result recap so the child connects each word to a surah. The spoken audio and replay buttons are part of the learning flow, not decoration.
- Use accurate Arabic spelling with correct diacritics where helpful for early readers; keep the script large and clear.

## Notes

- The app is intended for offline use on a family computer/tablet; prefer system fonts and local assets over CDNs.
- Respect Islamic sensitivity: no imagery that could be considered disrespectful; use abstract/emoji cues rather than depictions of prophets or sacred figures.
- Keep all text kid-friendly and free of inappropriate content.
