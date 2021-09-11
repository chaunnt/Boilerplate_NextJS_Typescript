import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from '@/styles/widgets/header.module.scss'

export default function Header() {
  const {t} = useTranslation()
  return (
    <header className={styles.header}>
      {t('home.header')}
    </header>
  )
}
