import React, {Component} from 'react';
import {Switch, Route}  from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Default from "./components/Default";
import Product1 from "./components/Product1";
import Product2 from "./components/Product2";
import Product3 from "./components/Product3";
import ProductList from "./components/ProductList";


class App extends Component {
  render() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/detail" component={Detail} />
        <Route path="/product1" component={Product1} />
        <Route path="/product2" component={Product2} />
        <Route path="/product3" component={Product3} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
  }
}

export default App;
