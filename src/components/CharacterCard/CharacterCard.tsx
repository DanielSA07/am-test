"use client"
import styles from "./CharacterCard.module.css"
import { Character } from "../../types/characters"

interface Props {
  character: Character | undefined
  onNext: () => void
  onPrev: () => void
}

const CharacterCard = ({ character, onNext, onPrev }: Props) => {
  if (!character) return null;

  // Lógica dinámica para el Status
  // Mapeamos el color del punto según si está Alive, Dead o es Unknown
  const statusClass = 
    character.status === "Alive" ? styles.green : 
    character.status === "Dead" ? styles.red : styles.gray;

  return (
    <div className={styles.card}>
      <button className={`${styles.navBtn} ${styles.prev}`} onClick={onPrev}>&#10094;</button>
      <button className={`${styles.navBtn} ${styles.next}`} onClick={onNext}>&#10095;</button>

      {/* Badge Dinámico: Cambia el color y el texto */}
      <div className={styles.liveBadge}>
        <div className={`${styles.dot} ${statusClass}`}></div>
        <span>{character.status === "Alive" ? "LIVE" : character.status.toUpperCase()}</span>
      </div>

      <img className={styles.mainImg} src={character.image} alt={character.name} />

      <div className={styles.infoBox}>
        <div className={styles.textGroup}>
          <h2 className={styles.name}>{character.name}</h2>
          <p className={styles.species}>{character.species} {character.type}</p>
        </div>
        
        <div className={styles.dataGrid}>
          <div className={styles.col}>
            <span className={styles.label}>Origin</span>
            <p className={styles.value}>{character.origin?.name.split(' ')[0]}</p>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Location</span>
            <p className={styles.value}>{character.location?.name.split(' ')[0]}</p>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Gender</span>
            <p className={styles.value}>{character.gender}</p>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Episodes</span>
            <p className={styles.value}>{character.episode?.length || 0}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCard