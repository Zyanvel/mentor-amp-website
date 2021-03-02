import React from 'react';
import './App.css';
import SunsetHeroSection from "./components/SunsetHeroSection";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import GeneralInfoSection from "./components/GeneralInfoSection";
import Features from "./components/Features";
import TestimonySection from "./components/TestimonySection";
import Form from "./components/Form";
import ImageSlider from "./components/ImageSlider";
import { SliderData } from "./components/SliderData";


function App() {
  return (
    <>
    <Router>
      <div className="container">
      <NavBar/>
      <SunsetHeroSection/>
      <GeneralInfoSection/>
      <ImageSlider slides={SliderData} />
      <Features/>
      <TestimonySection/>
      <Form/>
      </div>
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
  </>
  );
}

export default App;
