import styles from './LanguagesPanel.module.scss'
import { languages } from '../../data/languages'
import { nanoid } from 'nanoid'
import { clsx } from 'clsx'

export default function LanguagesPanel({wrongGuessCount}) {
  return (
    <section className={styles['languages-panel']}>
      <ul>
        {languages.map((language, index) => {
          const isLanguageLost = index < wrongGuessCount
          const elementStyles = {
            backgroundColor: language.backgroundColor,
            color: language.color
          }
          const languageClassName = clsx(styles['languages-panel__item'], isLanguageLost && styles['languages-panel__item--lost'])
          
          return (
            <li
              key={nanoid()}
              className={languageClassName}
              style={elementStyles}
            >
              {language.name}
            </li>
          )
        })}
      </ul>
    </section>
  )
}
