import React from "react"
// import dayjs from "dayjs"
// import logo from "../logo.svg"
import { ProductCard } from "../components/ProductCard"

// const randomtime = dayjs().add(12, "second")

function Home() {
  return (
    <>
      <div>Home</div>
      <ProductCard />
      {/* <Timer radomTime={randomtime} /> */}

      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
    </>
  )
}

export default Home
