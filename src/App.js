import './App.css';
import React from "react";

import About from './pages/about';
import Team from './pages/team';
import Tutorial from './pages/tutorial';

function mobile_zoom() {
  var viewport = document.querySelector('meta[name="viewport"]');
  viewport.setAttribute('content', 'width=device-width, initial-scale=0.6, maximum-scale=1.0, user-scalable=0');

}

function App() {
  mobile_zoom();
  return (
    <div className="Page">
      <About />
      <Team />
      <Tutorial />
    </div>
  );
}

export default App;
