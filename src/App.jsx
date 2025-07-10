import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";
import AppLayout from "./Components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
