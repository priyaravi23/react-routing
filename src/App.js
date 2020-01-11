import React, {useState} from 'react';
import CarInfoComponent from './components/car/car-info/car-info.component';
import AboutComponent from './components/about.component';
import HomeComponent from './components/home.component';
import MainComponent from './components/car/main';
import CarDetailsComponent from './components/car/car-details/car-details.component';
import './App.css';

import {Route, Switch} from 'react-router';

import {
  BrowserRouter as Router
} from "react-router-dom";


function App() {
  const [cars, setCars] = useState({});
  
  return (
    <Router>
      <MainComponent/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path="/cars/:id" component={props => {
          const car = cars[props.match.params.id];
          if (car) {
            return (<CarDetailsComponent car={car}/>);
          } else {
            return null;
          }

        }}/>

        <Route path="/about" component={About}/>
        <Route path="/cars">
          <CarInfoComponent setCars={setCars} cars={cars}/>
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <HomeComponent/>
    </div>
  );
}

function About() {
  return (
    <div>
      <AboutComponent/>
    </div>
  );
}

export default App;
