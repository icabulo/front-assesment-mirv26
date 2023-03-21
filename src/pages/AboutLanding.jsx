import React from "react"
import { About } from "../components/About"

function AboutLanding() {
  const divStyle = {
    marginTop: "1em", // camel cased
  }
  return (
    <div style={divStyle}>
      <About />
    </div>
  )
}

export default AboutLanding
