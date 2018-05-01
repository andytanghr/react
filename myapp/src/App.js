import React, { Component } from 'react';
// import Projects from './components/Projects';
// import Hello from './components/Hello';
// import MoonTower from './components/MoonTower';
// import TicTacToe from './components/TicTacToe';
// import logo from './logo.svg';
// import CityWeather from './components/cityWeather';
// import CityWeather from './components/cityWeatherWorking';
import CityWeather from './components/cityWeatherWorkingAgain';

import './App.css';

class App extends Component { // 'extends' means the next thing inherits
  render() {
    return (

      <div >
        {/* <Projects projects={"Hello World"}/> */}
        {/* <Hello /> */}
        {/* <MoonTower /> */}
        {/* <TicTacToe /> */}
        <CityWeather />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>
    );
  }
}

export default App;
