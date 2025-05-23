import styles from './Word.module.scss'
import { nanoid } from 'nanoid'

export default function Word({ currentWord, guessedLetters, wrongGuessCount, numGuessesLeft }) {
 

  return (
    <section className={styles.word}>
      <p className={styles.guessCount}>You have guessed {wrongGuessCount} times. <br/> {numGuessesLeft} attempts left.</p>
      <div className={styles['letter-container']}>
        {currentWord.split('').map((letter) => (
          <span key={nanoid()} className={styles['letter-container__letter']}>
            {guessedLetters.includes(letter) ? letter.toUpperCase() : ''}
          </span>
        ))}
      </div>
    </section>
  )
}