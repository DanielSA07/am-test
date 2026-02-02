"use client"
import styles from "./FavoritesDropdown.module.css"

export default function FavoritesDropdown({ favorites, onRemove }: any) {
  return (
    <div className={styles.dropdown}>
      <span className={styles.label}>FAVS</span>

      <div className={styles.list}>
        {favorites.slice(0, 4).map((fav: any) => (
          <div key={fav.id} className={styles.item}>
            {fav.name}
            <button onClick={() => onRemove(fav.id)}>🗑</button>
          </div>
        ))}
      </div>
    </div>
  )
}
