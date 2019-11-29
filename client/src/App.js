import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import WeatherDashboard from './components/WeatherDashboard'
import './App.css'
import './WeatherDashboard.css'
import './TodaysWeather.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={WeatherDashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
