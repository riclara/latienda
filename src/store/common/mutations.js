export function toggleLeftDrawerOpen (state) {
  state.leftDrawerOpen = !state.leftDrawerOpen
}

export function setCategories (state, categories) {
  state.categories = categories
}

export function setCategory (state, category) {
  console.log(category)
  state.category = category
}

export function setProducts (state, products) {
  state.products = products
}
