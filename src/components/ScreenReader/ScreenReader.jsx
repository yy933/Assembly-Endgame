export default function ScreenReader ({ currentWord, guessedLetters, lastGuessedLetter, numGuessesLeft }) {
  const statusText = currentWord
    .split('')
    .map((letter) => (guessedLetters.includes(letter) ? letter + '.' : 'blank.'))
    .join(' ')

  return (
    <section className='sr-only' aria-live='polite' role='status'>
      <p>
        {currentWord.includes(lastGuessedLetter)
          ? `Correct! The letter ${lastGuessedLetter} is in the word.`
          : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
        You have {numGuessesLeft} attempts left.
      </p>
      <p>Current word: {statusText}</p>
    </section>
  )
}
