import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './Pages/Home';
import About from './Pages/About';
import Event from './Pages/Event';
import Blog from './Pages/Blog';
import ImageGallery from './Pages/ImageGallery';

import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/event" component={Event} />
        <Route path="/image" component={ImageGallery} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </>
  )

}

export default App;

