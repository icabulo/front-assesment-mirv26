import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductDetail } from "../components/ProductDetail"
import { useData } from "../hooks"
import { getOneProduct } from "../services/productsAPI"

function ProductDetails() {
  const { id: idParam } = useParams()
  const [unProducto, setUnProducto] = useState([])

  const getUnProd = async (id) => {
    const url = `https://fakestoreapi.com/products/${id}`
    try {
      const request = await fetch(url)
      const data = await request.json()
      console.log("DATA", data)
      // setUnProducto(data)
      return data
    } catch (error) {
      return error
    }
  }

  useEffect(() => {
    const item = unProducto.find((item) => item.id === idParam)
    if (item) {
      setUnProducto(item)
    } else {
      console.log(getUnProd(idParam))
      setUnProducto(getUnProd(idParam))
      // getUnProd(idParam)
    }
  }, [])

  /*  const { id: idParam } = useParams()
  // console.log(idParam)
  const { data: product } = useData([], () => getOneProduct(idParam))
  // console.log(product)

  const newProduct = async () => {
    const APIdata = await getOneProduct(idParam)
    return APIdata
  }

  console.log(newProduct) */

  return (
    <div>
      Display selected product
      <ProductDetail />
      <h1>El producto sera el {idParam}</h1>
      <p>price= {unProducto.price}</p>
    </div>
  )
}

export default ProductDetails
