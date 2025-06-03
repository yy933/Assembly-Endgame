// KeyBoard Props Types
export type KeyBoardProps = {
  currentWord: string
  guessedLetters: string[]
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
  gameStatus: {
    isGameLost: boolean
    isGameOver: boolean
    isGameWon: boolean
  }
  resetGame: () => void
}
// LanguagesPanel Props Types
export type LanguagesPanelProps = {
  wrongGuessCount: number
}

// ScreenReader Props Types
export type ScreenReaderProps = {
  currentWord: string
  guessedLetters: string[]
  lastGuessedLetter: string | null
  numGuessesLeft: number
}
// StatusBanner Props Types
export type StatusBannerProps = {
  gameStatus: {
    defaultMode: boolean
    isGameWon: boolean
    isGameLost: boolean
    isGameOver: boolean
    farewellToLanguage: boolean
  }
  eliminatedLanguageName: string | null
  wrongGuessCount: number
}

export type BannerContentProps = {
  title: string
  text: string
  modifierClass: string
}

// Word Props Types
export type WordProps = {
  currentWord: string
  guessedLetters: string[]
  wrongGuessCount: number
  numGuessesLeft: number
}
