import styles from './KeyBoard.module.scss'
import { clsx } from 'clsx'
import { KeyBoardProps } from '../../types'

export default function KeyBoard({
  currentWord,
  guessedLetters,
  setGuessedLetters,
  gameStatus,
  resetGame
}: KeyBoardProps) {
  const { isGameLost, isGameOver } = gameStatus
  const row1 = 'qwertyuiop'
  const row2 = 'asdfghjklz'
  const row3 = 'xcvbnm'

  function addGuessedLetter(letter: string) {
    setGuessedLetters((prevLetters: string[]) => {
      if (prevLetters.includes(letter)) return prevLetters
      return [...prevLetters, letter]
    })
  }
  function getKeyClass(letter: string) {
    const isGuessed = guessedLetters.includes(letter)
    const isCorrect = isGuessed && currentWord.includes(letter)

    return clsx(styles.keyboard__key, {
      [styles.correct]: isGuessed && isCorrect,
      [styles.wrong]: isGuessed && !isCorrect,
      [styles.disabled]: isGameOver
    })
  }

  return (
    <section className={styles.keyboard}>
      {[row1, row2, row3].map((row, index) => (
        <div key={index} className={styles.keyboard__row}>
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
        <button className={styles.keyboard__reset} onClick={resetGame} type='button'>
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
