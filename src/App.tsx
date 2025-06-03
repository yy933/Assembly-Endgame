import Header from './components/Header/Header'
import StatusBanner from './components/StatusBanner/StatusBanner'
import LanguagesPanel from './components/LanguagesPanel/LanguagesPanel'
import Word from './components/Word/Word'
import KeyBoard from './components/KeyBoard/KeyBoard'
import ScreenReader from './components/ScreenReader/ScreenReader'
import { useGameStatus } from './hooks/useGameStatus'
import Confetti from 'react-confetti'
import './styles/global.scss'

function App() {
  const {
    currentWord,
    guessedLetters,
    setGuessedLetters,
    wrongGuess,
    numGuessesLeft,
    defaultMode,
    isGameWon,
    isGameLost,
    isGameOver,
    lastGuessedLetter,
    farewellToLanguage,
    eliminatedLanguageName,
    resetGame
  } = useGameStatus()
  
  return (
    <>
      {isGameWon && <Confetti numberOfPieces={500} />}
      <Header />
      <StatusBanner
        gameStatus={{
          defaultMode,
          isGameWon,
          isGameLost,
          isGameOver,
          farewellToLanguage
        }}
        wrongGuessCount={wrongGuess.length}
        eliminatedLanguageName={eliminatedLanguageName}
      />
      <LanguagesPanel wrongGuessCount={wrongGuess.length} />
      <Word
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        wrongGuessCount={wrongGuess.length}
        numGuessesLeft={numGuessesLeft}
      />
      <ScreenReader
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        lastGuessedLetter={lastGuessedLetter ?? null}
        numGuessesLeft={numGuessesLeft}
      />
      <KeyBoard
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        setGuessedLetters={setGuessedLetters}
        gameStatus={{
          isGameWon,
          isGameLost,
          isGameOver
        }}
        resetGame={resetGame}
      />
    </>
  )
}

export default App
