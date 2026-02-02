"use client"
import { useDispatch } from "react-redux"
import { toggleFavorite } from "../../store/favoritesSlice"
import { Character } from "../../types/characters"
import styles from "./CharacterLike.module.css"

interface Props {
  character: Character & { favorite: boolean }
}

const CharacterLike = ({ character }: Props) => {
  const dispatch = useDispatch()

  return (
    <div className={`${styles.card} ${character.favorite ? styles.selectedBorder : ""}`}>
      {/* 1. Nombre arriba */}
      <span className={styles.topName}>{character.name.toUpperCase()}</span>
      
      {/* 2. Imagen en recuadro */}
      <div className={styles.imageContainer}>
        <img src={character.image} alt={character.name} className={styles.img} />
      </div>

      {/* 3. Botón Like abajo con icono y texto */}
      <button 
        className={styles.likeBtn} 
        onClick={() => dispatch(toggleFavorite(character.id))}
      >
        <svg 
          viewBox="0 0 24 24" 
          className={`${styles.heartIcon} ${character.favorite ? styles.activeHeart : ""}`}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span>Like</span>
      </button>
    </div>
  )
}

export default CharacterLike