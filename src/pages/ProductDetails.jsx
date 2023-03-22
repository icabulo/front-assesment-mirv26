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

  // auxiliary function to fetch data for only on product.
  // This will happen paste the url without visiting the initial product list home page.
  const getData = async (id) => {
    const data = await getOneProduct(id)
    setOneProduct(data)
  }
  useEffect(() => {
    const actualProduct = productsData.find(
      // eslint-disable-next-line radix, comma-dangle
      (item) => item.id === parseInt(idParam)
    )
    // if actualProduct is truthty then data was gathered in the previous page
    if (actualProduct) {
      setOneProduct(actualProduct)
    } else {
      // else the data has to be fetched just for this product.
      getData(idParam)
    }
  }, [])

  // destructuring the state object to be passed as props to the rendered component <ProductDetail/>
  // eslint-disable-next-line operator-linebreak, object-curly-newline
  const { id, title, image, price, description, rating, category } =
    oneProduct || {}
  return (
    <div>
      {/* <h1>El producto sera el {idParam}</h1> */}
      <ProductDetail
        id={id}
        title={title}
        image={image}
        price={price}
        description={description}
        rating={rating}
        category={category}
      />
    </div>
  )
}

export default ProductDetails
