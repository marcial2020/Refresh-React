import React, { Component } from 'react';
import Product1 from './Product1';
import Product2 from "./Product2";
import Product3 from "./Product3";



export default class ProductList extends Component {
    render() {
        return (
          <div>
            <Product1></Product1>
            <Product2></Product2>
            <Product3></Product3>
          </div>
          
        );
    }
}
