import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default class App extends Component {
  router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <News key='general' pageSize={9} country='in' category='general' />
        },
        {
          path: "business",
          element: <News key='business' pageSize={9} country='in' category='business' />
        },
        {
          path: "entertainment",
          element: <News key='entertainment' pageSize={9} country='in' category='entertainment' />
        },
        {
          path: "health",
          element: <News key='health' pageSize={9} country='in' category='health' />
        },
        {
          path: "science",
          element: <News key='science' pageSize={9} country='in' category='science' />
        },
        {
          path: "sports",
          element: <News key='sports' pageSize={9} country='in' category='sports' />
        },
        {
          path: "technology",
          element: <News key='technology' pageSize={9} country='in' category='technology' />
        }
      ]
    },
  ]);

  render() {
    return (<>
     <RouterProvider router={this.router} />
    </>
    )
  }
}