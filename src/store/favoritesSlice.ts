import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface FavoritesState {
  ids: number[]
}

const loadFromLocalStorage = (): number[] => {
  if (typeof window === "undefined") return []
  try {
    const data = localStorage.getItem("favorites")
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const initialState: FavoritesState = {
  ids: loadFromLocalStorage(),
}


const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
toggleFavorite: (state, action: PayloadAction<number>) => {
  const id = action.payload

  if (state.ids.includes(id)) {
    state.ids = state.ids.filter((favId) => favId !== id)
  } else {
    state.ids.push(id)
  }

  localStorage.setItem("favorites", JSON.stringify(state.ids))
}

  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
