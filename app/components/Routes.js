import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Visuals from './Visuals';
import Contact from './Contact';
import FAQ from './FAQ';
import Theme from './Theme';

export default class Routes extends React.Component{

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/theme" component={Theme}/>
          <Route path="/about" component={About}/>
          <Route path="/faq" component={FAQ}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/visuals" component={Visuals}/>
        </Route>
      </Router>
    )
  }
};

