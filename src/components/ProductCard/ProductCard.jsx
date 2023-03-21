import React from "react"
import "./product-card.scss"
import Countdown from "react-countdown"
import { displayTimer } from "./Timer/Utils/displayTimer"

function ProductCard({ id, title, image }) {
  /*  details link set a random countdown timer
  it is set between 0 and 180 seconds
  note: random time passed in miliseconds to <Countdown /> component
  */
  const randomTime = Date.now() + Math.round(Math.random() * 180) * 1000

  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={image} alt={title} />
      </div>
      <p className="card__title">{title}</p>
      <Countdown
        date={randomTime}
        renderer={displayTimer}
        urlId={id}
        className="countdown"
      />
    </div>
  )
}

export default ProductCard
