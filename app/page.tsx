"use client"

import CharacterList from "../src/components/CharacterList/CharacterList"
import FavoritesBar from "../src/components/FavoritesBar/FavoritesBar"
import "./globals.css"

export default function Home() {
  return (
    <main className="page">
      <div className="ContentTitle">
        <img src="/title.png" alt="Rick and Morty" />
      </div>
      <CharacterList />
      <div className="footer"></div>
    </main>
  )
}

