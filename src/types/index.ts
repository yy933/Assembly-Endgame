// KeyBoard Props Types
export type KeyBoardProps = {
  currentWord: string
  guessedLetters: string[]
  setGuessedLetters: React.Dispatch<React.SetStateAction<string[]>>
  gameStatus: {
    isGameLost: boolean
    isGameOver: boolean
  }
  resetGame: () => void
}
// LanguagesPanel Props Types
export type LanguagesPanelProps = {
  wrongGuessCount: number
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
}

export type BannerContentProps = {
  title: string
  text: string
  modifierClass: string
}
