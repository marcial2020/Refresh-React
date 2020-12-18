import React, {Component} from 'react'
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
    </React.Fragment>
  );
  }
}

export default App;
