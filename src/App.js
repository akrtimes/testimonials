import React from 'react';
import './App.css';
import Card from './Components/Cards';
import reviews from "./Data";
function App() {

  return (
    <div className="App">
      <div className="header">
        <h1>Our Testimonials</h1>
        <div className='header-border'></div>
      </div>

      <div>
        <Card reviews={reviews} />
      </div>
    </div>
  );
}

export default App;
