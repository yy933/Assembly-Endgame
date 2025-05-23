import styles from './KeyBoard.module.scss'
import { clsx } from 'clsx'

export default function KeyBoard({
  currentWord,
  guessedLetters,
  setGuessedLetters,
  gameStatus,
  resetGame
}) {
  const { isGameLost, isGameOver } = gameStatus
  const row1 = 'qwertyuiop'
  const row2 = 'asdfghjklz'
  const row3 = 'xcvbnm'

  function addGuessedLetter(letter) {
    setGuessedLetters((prevLetters) => {
      if (prevLetters.includes(letter)) return prevLetters
      return [...prevLetters, letter]
    })
  }
  function getKeyClass(letter) {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)

    return clsx(styles.keyBoard__key, {
      [styles.correct]: isGuessed && isCorrect,
      [styles.wrong]: isGuessed && !isCorrect,
      [styles.disabled]: isGameOver
    })
  }

  return (
    <section className={styles.keyBoard}>
      {[row1, row2, row3].map((row, index) => (
        <div key={index} className={styles.keyBoard__row}>
          {row.split('').map((letter) => {
            return (
              <button
                key={`${letter}-${index}`}
                className={getKeyClass(letter)}
                onClick={() => addGuessedLetter(letter)}
                disabled={isGameOver}
                aria-disabled={guessedLetters.includes(letter)}
                aria-label={`Letter ${letter}`}
              >
                {letter.toUpperCase()}
              </button>
            )
          })}
        </div>
      ))}
      {isGameOver && (
        <button className={styles.keyBoard__reset} onClick={resetGame}>
          New Game
        </button>
      )}
      {isGameLost && (
        <div className={styles.answerDisplay}>
          <p>The correct answer is {currentWord}</p>
        </div>
      )}
    </section>
  )
}
