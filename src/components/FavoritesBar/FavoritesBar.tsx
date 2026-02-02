"use client"

import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import styles from "./FavoritesBar.module.css"

const FavoritesBar = () => {
  const [mounted, setMounted] = useState(false)

  const favoriteIds = useSelector(
    (state: RootState) => state.favorites.ids
  )

  useEffect(() => {
    setMounted(true)
  }, [])

  //Evita mismatch server/client
  if (!mounted || favoriteIds.length === 0) return null

  return (
    <div className={styles.bar}>
      <span className={styles.label}>Favoritos</span>
      <span className={styles.count}>{favoriteIds.length}</span>
    </div>
  )
}

export default FavoritesBar
