import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Context } from "../Context"
import { ProductDetail } from "../components/ProductDetail"
import { getOneProduct } from "../services/productsAPI"

function ProductDetails() {
  const { id: idParam } = useParams()
  const [oneProduct, setOneProduct] = useState({})
  // use the contex to set the detailed product
  const context = useContext(Context)
  const { FechtedProducts } = context || {}
  const { productsData } = FechtedProducts || []

  const getData = async (id) => {
    const data = await getOneProduct(id)
    setOneProduct(data)
  }
  useEffect(() => {
    const actualProduct = productsData.find(
      (item) => item.id === parseInt(idParam)
    )
    if (actualProduct) {
      setOneProduct(actualProduct)
      console.log("actual product", actualProduct)
    } else {
      getData(idParam)
    }
  }, [])

  const { id, title, image, price, description, rating, category } =
    oneProduct || {}
  return (
    <div>
      Display selected product
      <h1>El producto sera el {idParam}</h1>
      <ProductDetail />
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
      <p>{category}</p>
      <img src={image} alt={title} />
      {/* <p>price= {unProducto.price}</p> */}
    </div>
  )
}

export default ProductDetails
