import favoritesReducer, { toggleFavorite } from "../favoritesSlice"

describe("favoritesSlice", () => {
  it("should add favorite id", () => {
    const initialState = { ids: [] }
    const state = favoritesReducer(initialState, toggleFavorite(1))
    expect(state.ids).toContain(1)
  })

  it("should remove favorite id if exists", () => {
    const initialState = { ids: [1] }
    const state = favoritesReducer(initialState, toggleFavorite(1))
    expect(state.ids).not.toContain(1)
  })
})
