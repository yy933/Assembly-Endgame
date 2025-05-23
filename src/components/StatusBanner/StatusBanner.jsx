import styles from './StatusBanner.module.scss'
import { clsx } from 'clsx'
import { getFarewellText } from '../../utils/farewellText'

export default function StatusBanner ({ gameStatus, eliminatedLanguageName }) {
  function getBannerContent (gameStatus, eliminatedLanguageName) {
    const { defaultMode, isGameWon, isGameLost, isGameOver, farewellToLanguage } = gameStatus
    if (defaultMode) {
      return {
        title: '',
        text: '',
        modifierClass: 'default'
      }
    }
    if (farewellToLanguage) {
      return {
        title: getFarewellText(eliminatedLanguageName),
        text: '',
        modifierClass: 'farewell'
      }
    }
    if (!isGameOver) {
      return {
        title: 'Keep going!',
        text: 'Guess the word!',
        modifierClass: 'playing'
      }
    }
    if (isGameWon) {
      return {
        title: 'You win!',
        text: 'Well Done!',
        modifierClass: 'won'
      }
    }

    if (isGameLost) {
      return {
        title: 'You lose!',
        text: 'Try again!',
        modifierClass: 'lost'
      }
    }
    return null
  }

  const bannerContent = getBannerContent(gameStatus, eliminatedLanguageName)
  const bannerClassName = clsx(
    styles['status-banner'],
    styles[`status-banner--${bannerContent.modifierClass}`]
  )
  const bannerTitleClassName = clsx(
    styles['status-banner__title'],
    bannerContent.modifierClass === 'farewell' && styles['status-banner__title--farewell']
  )

  return (
    <section className={bannerClassName} aria-live='polite' role='status'>

      {bannerContent.title && <h2 className={bannerTitleClassName}>{bannerContent.title}</h2>}
      {bannerContent.text && (
        <p className={styles['status-banner__description']}>{bannerContent.text}</p>
      )}
    </section>
  )
}
