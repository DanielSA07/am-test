"use client"
import styles from "./Header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Rick & Morty" className={styles.logo} />

      <div className={styles.searchBox}>
        <input placeholder="Find your character..." />
        <span className={styles.searchIcon}>⌕</span>
      </div>
    </header>
  )
}
