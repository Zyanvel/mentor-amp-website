import React from 'react';
import './App.css';
import SunsetHeroSection from "./components/SunsetHeroSection";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import GeneralInfoSection from "./components/GeneralInfoSection";
import TestimonySection from "./components/TestimonySection";


function App() {
  return (
    <>
    <Router>
      <div className="container">
      <NavBar/>
      <SunsetHeroSection/>
      <GeneralInfoSection/>
      <TestimonySection/>
      </div>
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
  </>
  );
}

export default App;
