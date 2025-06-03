import { ScreenReaderProps } from '../../types'
export default function ScreenReader({
  currentWord,
  guessedLetters,
  lastGuessedLetter,
  numGuessesLeft
}: ScreenReaderProps) {
  if (!lastGuessedLetter) return null
  const statusText = currentWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter + '.' : 'blank.'))
    .join(' ')

  return (
    <section className="sr-only" aria-live="polite" role="status">
      <p>
        {currentWord.includes(lastGuessedLetter)
          ? `Correct! The letter ${lastGuessedLetter} is in the word.`
          : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
        {numGuessesLeft === 0
          ? ' You have no attempts left.'
          : ` You have ${numGuessesLeft} attempts left.`}
      </p>
      <p>Current word: {statusText}</p>
    </section>
  )
}
