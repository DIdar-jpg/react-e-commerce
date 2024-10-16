import './App.css';

import Navibar from './components/Layout/NaviBar.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Users from './components/Users.jsx'

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navibar/>
        <Outlet/>
      </>
    ),
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/users",
        element: <Users/>,
      },

    ]
  },

]);


function App() {
  return (
    <>
      {/* <Navibar/> */}
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
