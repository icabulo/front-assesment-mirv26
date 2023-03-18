import React from "react"

export const initialContext = {
  FechtedProducts: {
    productsData: [],
  },
  redirectDetailsRoute: "",
}

export const Context = React.createContext(initialContext)
