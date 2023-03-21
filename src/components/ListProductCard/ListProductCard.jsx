import React, { useContext, useEffect } from "react"
import { nanoid } from "nanoid"
import { Context } from "../../Context"
import { ProductCard } from "../ProductCard"
import { getAllProducts } from "../../services/productsAPI"
import { useData } from "../../hooks"
import "./list-product-card.scss"

function ListProductCard() {
  // get data with a costum hoook (API request)
  const { data: products } = useData([], getAllProducts)
  const context = useContext(Context)

  // uptade product saved in the Context container
  useEffect(() => {
    context.FechtedProducts.productsData = products
    context.redirectDetailsRoute = "/detalle"
  }, [products])

  // create an array of elements with .map method. That is the product list
  const displayList = products.map(({ id, title, image }, index) => (
    <ProductCard key={nanoid()} title={title} image={image} id={id} />
  ))

  return (
    <>
      <h1>PRODUCTS</h1>
      <div className="List">{products.length >= 1 && displayList}</div>
    </>
  )
}

export default ListProductCard
