import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../../Context"

import "./timer.scss"

// eslint-disable-next-line object-curly-newline
function Timer({ minutes, seconds, completed, urlId }) {
  const navigate = useNavigate()
  const context = useContext(Context)
  const { redirectDetailsRoute } = context

  const handleClick = () => {
    if (!completed) {
      navigate(`${redirectDetailsRoute}/${urlId}`)
    } else {
      // alert("can't go to the product ")
    }
  }

  function zerosFormat(number, minLength) {
    const numberString = number.toString()
    if (numberString.length >= minLength) {
      return numberString
    }
    return "0".repeat(minLength - numberString.length) + numberString
  }

  return (
    <div className="timer">
      <p className="timer__countdown">
        <span>
          {zerosFormat(minutes, 2)}:{zerosFormat(seconds, 2)}
        </span>
      </p>
      <button
        type="button"
        onClick={handleClick}
        className={
          !completed ? "timer__link-btn" : "timer__link-btn--nonActive"
        }
      >
        Show Details
      </button>
    </div>
  )
}

export default Timer
