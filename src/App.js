import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  apikey = process.env.REACT_APP_MY_APIKEY;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({
      progress: progress
    })
  }

  router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "",
          element: <News setProgress={this.setProgress} apikey={this.apikey} key='general' pageSize={9} country='in' category='general' />
        },
        {
          path: "business",
          element: <News setProgress={this.setProgress} apikey={this.apikey} key='business' pageSize={9} country='in' category='business' />
        },
        {
          path: "entertainment",
          element: <News setProgress={this.setProgress} apikey={this.apikey} key='entertainment' pageSize={9} country='in' category='entertainment' />
        },
        {
          path: "health",
          element: <News setProgress={this.setProgress} apikey={this.apikey} key='health' pageSize={9} country='in' category='health' />
        },
        {
          path: "science",
          element: <News setProgress={this.setProgress} apikey={this.apikey} key='science' pageSize={9} country='in' category='science' />
        },
        {
          path: "sports",
          element: <News setProgress={this.setProgress} apikey={this.apikey} key='sports' pageSize={9} country='in' category='sports' />
        },
        {
          path: "technology",
          element: <News setProgress={this.setProgress} apikey={this.apikey} key='technology' pageSize={9} country='in' category='technology' />
        }
      ]
    },
  ]);

  render() {
    return (<>
    <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
     <RouterProvider router={this.router} />
    </>
    )
  }
}