import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { Context } from "../../../Context"

import "./timer.scss"

function Timer({ minutes, seconds, completed, urlId }) {
  const navigate = useNavigate()
  const context = useContext(Context)
  const { redirectDetailsRoute } = context

  const handleClick = () => {
    if (!completed) {
      console.log("go to link", urlId)
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
        Go to link
      </button>
    </div>
  )
}

export default Timer

/* //timer without an external library

import React, { useEffect, useState } from "react"
import "./timer.scss"

function Timer() {
  // set a random number between 0 a 3 minutes = 180 seconds
  const randomTime = Math.round(Math.random() * 180)

  const [countdown, setCountdown] = useState({
    time: randomTime,
    minutes: Math.floor(randomTime / 60),
    seconds: randomTime - Math.floor(randomTime / 60) * 60,
  })
  // state to change when countdown reach zero
  const [activeLink, setActiveLink] = useState(false)

  // auxiliar function to set the updated countdown object
  function auxFn(prev) {
    const newtime = prev.time - 1
    const updateCounter = {
      time: newtime,
      minutes: Math.floor(newtime / 60),
      seconds: newtime - Math.floor(newtime / 60) * 60,
    }
    return updateCounter
  }

  useEffect(() => {
    if (countdown.time > 0) {
      setTimeout(() => setCountdown((prev) => auxFn(prev)), 1000)
    } else if (countdown.time === 0) {
      setActiveLink(true)
    }
  }, [countdown])

  return (
    <div>
      <p>
        <span>{countdown.time}</span>
        <span> Total seconds </span>
      </p>
      <p>
        <span>{countdown.minutes}</span>
        <span> minutes </span>
        <span>{countdown.seconds}</span>
        <span> seconds </span>
      </p>
      {activeLink && <p>go to link</p>}
    </div>
  )
}

export default Timer */
