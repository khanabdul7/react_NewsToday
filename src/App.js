import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {

  const [progressValue, setProgressValue] = useState(0)

  const apikey = process.env.REACT_APP_MY_APIKEY;

  const setProgress = (progress) => {
    setProgressValue(progress)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <News setProgress={setProgress} apikey={apikey} key='general' pageSize={9} country='in' category='general' />
        },
        {
          path: "business",
          element: <News setProgress={setProgress} apikey={apikey} key='business' pageSize={9} country='in' category='business' />
        },
        {
          path: "entertainment",
          element: <News setProgress={setProgress} apikey={apikey} key='entertainment' pageSize={9} country='in' category='entertainment' />
        },
        {
          path: "health",
          element: <News setProgress={setProgress} apikey={apikey} key='health' pageSize={9} country='in' category='health' />
        },
        {
          path: "science",
          element: <News setProgress={setProgress} apikey={apikey} key='science' pageSize={9} country='in' category='science' />
        },
        {
          path: "sports",
          element: <News setProgress={setProgress} apikey={apikey} key='sports' pageSize={9} country='in' category='sports' />
        },
        {
          path: "technology",
          element: <News setProgress={setProgress} apikey={apikey} key='technology' pageSize={9} country='in' category='technology' />
        }
      ]
    },
  ]);

  return (
    <>
      <LoadingBar
        color='#f11946'
        progress={progressValue}
      />
      <RouterProvider router={router} />
    </>
  )
}
export default App;