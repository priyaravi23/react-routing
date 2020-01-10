import React from 'react';
import CarInfoComponent from './components/car/car-info/car-info.component';
import AboutComponent from './components/about.component';
import HomeComponent from './components/home.component';
import MainComponent from './components/car/main';
import CarDetailsComponent from './components/car/car-details/car-details.component';
import './App.css';

import { Route, Switch } from 'react-router';

import {
    BrowserRouter as Router,
    useParams
} from "react-router-dom";

function App() {
  return (
      <Router>
            <Switch>
                <Route exact path='/' component={ Home } />
                <Route path="/cars" component={ CarInfo } />
                <Route path="/cars/:id" component={ CarDetails } />
                <Route path="/about" component={ About }/>
            </Switch>
      </Router>
  );
}

function CarInfo() {
    return (
        <div>
            <MainComponent />
            <CarInfoComponent />
        </div>
    );
}

function Home() {
    return (
        <div>
            <MainComponent />
            <HomeComponent />
        </div>
    );
}

function About() {
    return (
        <div>
            <MainComponent />
            <AboutComponent />
        </div>
    );
}

function CarDetails() {
    let { id } = useParams();

    return (
        <div>
          <CarDetailsComponent />
        </div>
    )
}

export default App;
