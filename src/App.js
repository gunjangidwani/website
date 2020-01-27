import React from 'react';
import './App.css';
import  Home  from "./assets/Component/home";
import Delivery from "./assets/Component/delivery";
import Testimonial from "./assets/Component/testimonial";
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom";
import Retailers from './assets/Component/retailers';

function App() {
  return (
    <Router >
    <div className="App">
      <Switch>
      <Route path="/" exact   component={Home} />
      <Route path="/faq" component={Retailers} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
