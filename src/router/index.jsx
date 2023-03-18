import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home, AbouLanding, ProductDetails } from "../pages"

const routerconfig = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Hubo un error!</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AbouLanding />,
  },
  {
    path: "/detalle/:id",
    element: <ProductDetails />,
  },
])

function CustomRouter() {
  return <RouterProvider router={routerconfig} />
}

export { CustomRouter }
