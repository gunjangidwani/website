import React from 'react';
import './App.css';
import  Header  from "./assets/Component/Header";
import Delivery from "./assets/Component/delivery";
import Testimonial from "./assets/Component/testimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <Delivery />
      <Testimonial />
    </div>
  );
}

export default App;
