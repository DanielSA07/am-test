const API_URL = "https://rickandmortyapi.com/api/character"

export const getCharacters = async () => {
  const res = await fetch(API_URL, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch characters")
  const data = await res.json()
  return data.results
}
