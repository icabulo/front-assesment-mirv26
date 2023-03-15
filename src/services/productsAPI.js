export const getAllProducts = async () => {
  const url = "https://fakestoreapi.com/products?limit=10"

  try {
    const request = await fetch(url)
    const data = await request.json()
    return data
  } catch (error) {
    return error
  }
}

export const getOneProduct = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`
  try {
    const request = await fetch(url)
    const data = await request.json()
    return data
  } catch (error) {
    return error
  }
}
