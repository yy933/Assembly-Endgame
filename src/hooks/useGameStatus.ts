import { useState, useMemo } from 'react'
import { getRandomWord } from '../utils/farewellText'
import { languages } from '../data/languages'

export function useGameStatus() {
  const [currentWord, setCurrentWord] = useState<string>(() => getRandomWord())
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const maxWrongGuesses = languages.length - 1
  const wrongGuess = useMemo(
    () => guessedLetters.filter((letter) => !currentWord.includes(letter)),
    [guessedLetters, currentWord]
  )

  const numGuessesLeft = maxWrongGuesses - wrongGuess.length

  const defaultMode = guessedLetters.length === 0
  const isGameWon = currentWord.split('').every((letter) => guessedLetters.includes(letter))
  const isGameLost = wrongGuess.length >= maxWrongGuesses
  const isGameOver = isGameWon || isGameLost
  const lastGuessedLetter: string | undefined = guessedLetters.at(-1)
  const isLastGuessIncorrect = lastGuessedLetter ? !currentWord.includes(lastGuessedLetter) : false

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
