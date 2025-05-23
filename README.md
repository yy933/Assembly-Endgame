# Assembly: Endgame

A word-guessing game where every wrong letter causes a programming language to disappear from the world. Save your favorite language before it’s too late!

See live demo [here](https://play-assembly-endgame.netlify.app/) !
---

## Features

- Guess the hidden word within 8 attempts.
- Each wrong guess eliminates one programming language from the screen.
- Confetti appears if you guess the word correctly.
- Click "New Game" to restart after a win or loss.

---

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: SCSS Modules + clsx
- **Effects & Animations**:
  - `react-confetti` for celebratory animation
- **Data Handling**:
  - Word list and language info are stored locally as JS files


---

## Project Structure
```bash
src/
  ├── components/
  │   ├── Header/
  │   ├── StatusBanner/
  │   ├── LanguagesPanel/
  │   ├── Word/
  │   ├── KeyBoard/
  │   └── ScreenReader/
  ├── data/
  ├── styles/
  ├── utils/
  └── App.jsx
```


---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Customization
You can personalize your game by modifying:

* `src/data/words.js`: Replace with your own word list

* `src/data/languages.js`: Update the list of languages and images

* `src/data/farewellText.js`: Customize elimination messages (e.g. “Farewell, JavaScript”)

## Accessibility
Includes aria-live support for screen readers.

All interactions are accessible via keyboard and screen reader-friendly labels.

## License
MIT License

Feel free to fork, remix, and save your beloved languages!