# Assembly: Endgame
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
[![Live Demo](https://img.shields.io/badge/Live-Demo-orange)](https://play-assembly-endgame.netlify.app)

A word-guessing game where every wrong letter causes a programming language to disappear from the world. Save your favorite language before it’s too late!

![Demo](src\assets\images\demo.gif)

See live demo [here](https://play-assembly-endgame.netlify.app/) !
---

## Features

- Guess the hidden word within 8 attempts.
- Each wrong guess eliminates one programming language from the screen.
- Confetti appears if you guess the word correctly.
- Click "New Game" to restart after a win or loss.

---

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS Modules + clsx
- **Effects & Animations**:
  - `react-confetti` for celebratory animation
- **Data Handling**:
  - Word list and language info are stored locally as TS files
- **Deployment**: Netlify


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
1. Clone the repository
```bash
git clone https://github.com/yy933/Assembly-Endgame.git
cd Assembly-Endgame
```
2. Install dependencies
```bash
npm install
# or
yarn
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open in browser

Navigate to http://localhost:5173

## TypeScript Migration
The entire codebase has been migrated from JavaScript to TypeScript to improve type safety and maintainability.

## Customization
You can personalize your game by modifying:

* `src/data/words.ts`: Replace with your own word list

* `src/data/languages.ts`: Update the list of languages and images

* `src/utils/farewellText.ts`: Customize elimination messages (e.g. “Farewell, JavaScript”)

## Accessibility
Includes aria-live support for screen readers.

All interactions are accessible via keyboard and screen reader-friendly labels.

## License
MIT License

Feel free to fork, remix, and save your beloved languages!
