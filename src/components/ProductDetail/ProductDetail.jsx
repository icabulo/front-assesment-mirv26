import React from "react"
import "./product-detail.scss"
import { useNavigate } from "react-router-dom"

function ProductDetail({
  id,
  title,
  image,
  price,
  description,
  rating,
  category,
}) {
  const navigate = useNavigate()
  // console.log({ rating })
  return (
    <div className="product">
      <nav className="product__navbar">
        <button
          className="product__btn"
          type="button"
          onClick={() => navigate("/home")}
        >
          Home
        </button>
        <button
          className="product__btn"
          type="button"
          onClick={() => navigate("/about")}
        >
          About
        </button>
      </nav>
      <div className="product__catalog">
        <div className="product__image">
          <img src={image} alt={title} />
        </div>
        <div className="product__details">
          <p className="product__category">{category}</p>
          <p className="product__title">{title}</p>
          <h2 className="product__price">USD ${price}</h2>
          {rating && (
            <div className="product__rating">
              <p>Reviews {rating.rate} / 5.0</p>
              <p>QTY: {rating.count}</p>
            </div>
          )}
        </div>
      </div>
      <div className="product__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProductDetail
