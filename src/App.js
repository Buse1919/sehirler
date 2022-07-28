import React, { Component } from 'react';
import './App.scss';
import Navbar from "./componenets/Navbar/Navbar";
import TourList from "./componenets/TourList/TourList";




class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <TourList/>
      </React.Fragment>
    );
  }
}

export default App;