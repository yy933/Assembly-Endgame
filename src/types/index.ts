// KeyBoard Props Types
export type KeyBoardProps = {
  currentWord: string
  guessedLetters: string[]
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
  gameStatus: {
    isGameWon: boolean
    isGameLost: boolean
    isGameOver: boolean
  }
  resetGame: () => void
}
// LanguagesPanel Props Types
export type LanguagesPanelProps = {
  wrongGuessCount: number
}