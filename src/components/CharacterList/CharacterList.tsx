"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Character } from "../../types/characters"
import { getCharacters } from "../../services/character.service"
import { toggleFavorite } from "../../store/favoritesSlice"
import { RootState } from "../../store/store"
import CharacterCard from "../CharacterCard/CharacterCard"
import CharacterLike from "../CharacterLike/CharacterLike"
import styles from "./CharacterList.module.css"

const CharacterList = () => {
  const dispatch = useDispatch()
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids)

  const [characters, setCharacters] = useState<Character[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [showFavs, setShowFavs] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    getCharacters().then(setCharacters).catch(console.error)
  }, [])

  const filteredCharacters = useMemo(() => {
    return characters.filter((char) =>
      char.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [characters, searchTerm])

  const favoritesData = useMemo(() => {
    return characters
      .filter((char) => favoriteIds.includes(char.id))
      .slice(0, 4)
  }, [characters, favoriteIds])

  const handleToggleFavorite = useCallback(
    (id: number) => dispatch(toggleFavorite(id)),
    [dispatch]
  )

  return (
    <div className={styles.mainWrapper}>
      {/* SEARCH */}
      <header className={styles.header}>
        <div className={styles.searchBar}>
          <img src="/search.svg" alt="search" />
          <input
            placeholder="Find your character..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentIndex(0)
            }}
          />
          <img src="/user.svg" alt="user" />
        </div>
      </header>

      {/* GRID */}
      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {filteredCharacters.map((char) => (
            <CharacterLike
              key={char.id}
              character={{
                ...char,
                favorite: favoriteIds.includes(char.id),
              }}
            />
          ))}
        </div>
      </section>

      {/* SLIDER */}
      <section className={styles.sliderWrapper}>
        {filteredCharacters.length > 0 && (
          <CharacterCard
            character={filteredCharacters[currentIndex]}
            onNext={() =>
              setCurrentIndex((i) => (i + 1) % filteredCharacters.length)
            }
            onPrev={() =>
              setCurrentIndex(
                (i) => (i - 1 + filteredCharacters.length) % filteredCharacters.length
              )
            }
          />
        )}
      </section>

      {/* FAVORITES */}
      <footer className={styles.footerFavs}>
        {showFavs && (
          <div className={styles.dropdown}>
            {favoritesData.length ? (
              favoritesData.map((fav) => (
                <div key={fav.id} className={styles.favItem}>
                  <span>{fav.name}</span>
                  <button onClick={() => handleToggleFavorite(fav.id)}>
                    <img src="/trash.svg" alt="trash" />
                  </button>
                </div>
              ))
            ) : (
              <p className={styles.emptyMsg}>No favorites yet</p>
            )}
          </div>
        )}
        <button
          className={styles.favsToggle}
          onClick={() => setShowFavs(!showFavs)}
        >
          FAVS
        </button>
      </footer>
    </div>
  )
}

export default CharacterList
