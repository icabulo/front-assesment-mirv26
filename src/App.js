import "./App.scss"
import { CustomRouter } from "./router"
import { Context, initialContext } from "./Context"

function App() {
  return (
    <Context.Provider value={initialContext}>
      <div className="App">
        <CustomRouter />
      </div>
    </Context.Provider>
  )
}

export default App
