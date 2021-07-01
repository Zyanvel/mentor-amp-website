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
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   breakpoints: {
//     values: {
//     xs: 0,
//     sm: 700,
//     md: 960,
//     lg: 1200,
//     xl: 1920,
// }
//   }
// })



function App() {
  return (
    <>
    <Router>
      <div className="app-container">
      <NavBar />
      <SunsetHeroSection /> 
      <GeneralInfoSection  />
      <ImageSlider  />
      <Features />
      <TestimonySection />
      <Form />
      </div>
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
  </>
  );
}

export default App;
