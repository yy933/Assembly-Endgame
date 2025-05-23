import styles from './Header.module.scss';
export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Assembly: Endgame</h1>
      <p>Guess the word within 8 attempts to keep the programming world safe from Assembly!</p>
    </header>
  )
}