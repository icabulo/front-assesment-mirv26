import React from "react"
import { nanoid } from "nanoid"
import { ProductCard } from "../ProductCard"
import { getAllProducts } from "../../services/productsAPI"
import { useData } from "../../hooks"
import "./list-product-card.scss"

function ListProductCard() {
  const { data: products } = useData([], getAllProducts)
  // console.log("datos de la API", products)

  const displayList = products.map(({ id, title, image }, index) => (
    <ProductCard key={nanoid()} title={title} image={image} />
  ))
  // console.log("LIST", displayList)

  return (
    <>
      <div>PRODUCTOS</div>
      <div className="List">{products.length >= 1 && displayList}</div>
    </>
  )
}

export default ListProductCard
