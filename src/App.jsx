import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Error from "./Components/Error";
import AppLayout from "./Components/AppLayout";
import Exam from "./Components/Exam";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exam",
        element: <Exam />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
