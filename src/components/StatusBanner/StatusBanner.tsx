import styles from './StatusBanner.module.scss'
import { clsx } from 'clsx'
import { getFarewellText } from '../../utils/farewellText'
import { StatusBannerProps, BannerContentProps } from '../../types'

export default function StatusBanner({ gameStatus, eliminatedLanguageName }: StatusBannerProps) {
  const statusMap = {
    default: { title: '', text: '', modifierClass: 'default' },
    farewell: {
      title: getFarewellText(eliminatedLanguageName),
      text: '',
      modifierClass: 'farewell'
    },
    playing: { title: 'Keep going!', text: 'Guess the word!', modifierClass: 'playing' },
    won: { title: 'You win!', text: 'Well Done!', modifierClass: 'won' },
    lost: { title: 'You lose!', text: 'Try again!', modifierClass: 'lost' }
  }
  function getBannerContent(gameStatus: StatusBannerProps['gameStatus'], eliminatedLanguageName: string | null): BannerContentProps {
    const { defaultMode, isGameWon, isGameLost, isGameOver, farewellToLanguage } = gameStatus
    if (defaultMode) return statusMap.default
    if (farewellToLanguage) return statusMap.farewell
    if (!isGameOver) return statusMap.playing
    if (isGameWon) return statusMap.won
    if (isGameLost) return statusMap.lost
    return statusMap.default
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
    <section className={bannerClassName} aria-live="polite" role="status">
      {bannerContent.title && <h2 className={bannerTitleClassName}>{bannerContent.title}</h2>}
      {bannerContent.text && (
        <p className={styles['status-banner__description']}>{bannerContent.text}</p>
      )}
    </section>
  )
}
