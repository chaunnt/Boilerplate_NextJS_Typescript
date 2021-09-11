import React from 'react';
import { useTranslation } from "react-i18next";
import styles from '@/styles/widgets/footer.module.scss'

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      {t("home.footer")}
    </footer>
  );
}
