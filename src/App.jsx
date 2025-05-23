import Header from './components/Header/Header'
import StatusBanner from './components/StatusBanner/StatusBanner'
import LanguagesPanel from './components/LanguagesPanel/LanguagesPanel'
import Word from './components/Word/Word'
import KeyBoard from './components/KeyBoard/KeyBoard'
import ScreenReader from './components/ScreenReader/ScreenReader'
import { languages } from './data/languages'
import { getRandomWord } from './utils/farewellText'
import { useState } from 'react'
import Confetti from 'react-confetti'
import './styles/global.scss'

function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState([])

  const maxWrongGuesses = languages.length - 1
  const wrongGuess = guessedLetters.filter((letter) => !currentWord.includes(letter))
  const numGuessesLeft = maxWrongGuesses - wrongGuess.length

  const defaultMode = guessedLetters.length === 0
  const isGameWon = currentWord.split('').every((letter) => guessedLetters.includes(letter))
  const isGameLost = wrongGuess.length >= maxWrongGuesses
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1]
  const isLastGuessIncorrect = lastGuessedLetter && !currentWord.includes(lastGuessedLetter)
  const farewellToLanguage = !isGameOver && isLastGuessIncorrect
  const eliminatedLanguageName = farewellToLanguage ? languages[wrongGuess.length - 1]?.name : null

  function resetGame(){
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  
  }

  return (
    <>
      {isGameWon && <Confetti numberOfPieces='500' />}
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
        lastGuessedLetter={lastGuessedLetter}
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
