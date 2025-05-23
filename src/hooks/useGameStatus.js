import { useState } from 'react'
import { getRandomWord } from '../utils/farewellText'
import { languages } from '../data/languages'

export function useGameStatus() {
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

  function resetGame() {
    setCurrentWord(getRandomWord())
    setGuessedLetters([])
  }

  return {
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
  }
}
