import React from "react"
import "./product-card.scss"
// import { Timer } from "./Timer"
import Countdown from "react-countdown"
import { displayTimer } from "./Timer/Utils/displayTimer"

function ProductCard({ id, title, image }) {
  // const randomTime = Date.now() + 7000
  /*  set a random countdown timer for the details link to work
  rightnow it is set between 0 and 3 minutes (180 seconds)
  note that it got to be passed in miliseconds to <Countdown /> component
  */
  const randomTime = Date.now() + Math.round(Math.random() * 180) * 1000

  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={image} alt={title} />
      </div>
      <p className="card__title">{title}</p>
      {/* <div className="card__details-container">
        <p className="card__timer">contador regresivo</p>
        <a href="uno" className="card__button">
          Go to Detail
        </a>
      </div> */}
      <Countdown
        date={randomTime}
        renderer={displayTimer}
        url="ulr_ejemplo"
        className="countdown"
      />
    </div>
  )
}

export default ProductCard
