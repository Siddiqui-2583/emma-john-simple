import React from 'react';
import Header from './components/Header/Header.js';
import './App.css';
import Shop from './components/Shop/Shop.js';
import Review from './components/Review/Review.js';
import Inventory from './components/Inventory/Inventory.js';
import NotFound from './components/NotFound/NotFound.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail.js';
import Auth from './components/Auth/Auth.js';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/manage">
            <Inventory />
          </Route>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <Route exact path="/product/:ProductKey">
            <ProductDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
