import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "../pages"

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
])

function CustomRouter() {
  return <RouterProvider router={routerconfig} />
}

export { CustomRouter }
