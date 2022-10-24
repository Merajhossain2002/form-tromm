import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutMe from "./Component/About me/AboutMe";
import Home from "./Component/Home/Home";
import Main from "./Component/Main/Main";
import Registration from "./Component/Registration/Registration";
import SignIn from "./Component/SignIn/SignIn";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/about-me",
          element: <AboutMe></AboutMe>,
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>,
        },
        {
          path: "/register",
          element: <Registration></Registration>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
