import React from "react"
import "./product-card.scss"
// import { Timer } from "./Timer"
import Countdown from "react-countdown"
import { displayTimer } from "./Timer/Utils/displayTimer"

function ProductCard() {
  // const randomTime = Date.now() + 7000
  /*  set a random countdown timer for the datails link to work
  rightnow it is set between 0 and 3 minutes (180 seconds)
  note that it got to be passed in miliseconds to <Countdown /> component
  */
  const randomTime = Date.now() + Math.round(Math.random() * 180) * 1000

  return (
    <div className="card">
      <div className="card__image-container">
        <img
          className="card__image"
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        />
      </div>
      <p className="card__title">
        Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </p>
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
