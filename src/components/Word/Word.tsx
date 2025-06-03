import styles from './Word.module.scss'
import { WordProps } from '../../types'

export default function Word({
  currentWord,
  guessedLetters,
  wrongGuessCount,
  numGuessesLeft
}: WordProps) {
  return (
    <section className={styles.word}>
      <p className={styles.guessCount}>
        You have guessed {wrongGuessCount} times. <br /> {numGuessesLeft} attempts left.
      </p>
      <div className={styles['letter-container']}>
        {currentWord.split('').map((letter, index) => (
          <span key={`${letter}-${index}`} className={styles['letter-container__letter']}>
            {guessedLetters.includes(letter) ? letter.toUpperCase() : ''}
          </span>
        ))}
      </div>
    </section>
  )
}
