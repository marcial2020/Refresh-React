import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Product1 from './Product1';
import Product2 from "./Product2";
import Product3 from "./Product3";



export default class ProductList extends Component {
  state = {
    products: []
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <section className="section latest__products" id="latest">
            <div className="title__container">
              <div className="section__title active" data-id="Latest Products">
                <span className="dot"></span>
                <h1 className="primary__title">Latest Products</h1>
              </div>
            </div>

            <div className="container">
              <div className="glide" id="glide_2">
                <div className="glide__track" data-glide-el="track">
                  <ul className="glide__slides latest-center">
                    <li className="glide__slide">
                      <div className="product">
                        <div className="product__header">
                          <img src="./images/products/iPhone/iphone6.jpeg" alt="" />
                                    </div>
                          <div className="product__footer">
                            <h3>Apple iPhone 11</h3>
                            <div className="rating">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="product__price">
                              <h4>$750</h4>
                              <Link to="#"><button type="button" className="product__btn">
                                Add To Cart
                                                </button></Link>
                            </div>
                            <ul>

                              <Link to="#">
                                <i className="fas fa-eye" />
                              </Link>
                              <Link to="#">
                                <i className="fas fa-heart" />
                              </Link>
                              <Link to="#">
                                <i className="fas fa-loop2" />
                              </Link>

                            </ul>
                          </div>
                        </div>
                            </li>

                      <li className="glide__slide">
                        <div className="product">
                          <div className="product__header">
                            <img src="./images/products/headphone/headphone10.jpeg" alt="" />
                                    </div>
                            <div className="product__footer">
                              <h3>Apple iPhone 11</h3>
                              <div className="rating">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                              </div>
                              <div className="product__price">
                                <h4>$750</h4>
                                <Link to="#"><button type="button" className="product__btn">
                                  Add To Cart
                                                </button></Link>
                              </div>
                              <ul>

                                <Link to="#">
                                  <i className="fas fa-eye" />
                                </Link>
                                <Link to="#">
                                  <i className="fas fa-heart" />
                                </Link>
                                <Link to="#">
                                  <i className="fas fa-loop2" />
                                </Link>

                              </ul>
                            </div>
                          </div>
                            </li>

                        <li className="glide__slide">
                          <div className="product">
                            <div className="product__header">
                              <img src="./images/products/iPhone/iphone3.jpeg" alt="" />
                                    </div>
                              <div className="product__footer">
                                <h3>Apple iPhone 11</h3>
                                <div className="rating">
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                  <i className="fas fa-star" />
                                </div>
                                <div className="product__price">
                                  <h4>$750</h4>
                                  <Link to="#"><button type="button" className="product__btn">
                                    Add To Cart
                                                </button></Link>
                                </div>
                                <ul>

                                  <Link to="#">
                                    <i className="fas fa-eye" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fas fa-heart" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fas fa-loop2" />
                                  </Link>

                                </ul>
                              </div>
                            </div>
                            </li>

                          <li className="glide__slide">
                            <div className="product">
                              <div className="product__header">
                                <img src="./images/products/sumsung/samsung2.jpeg" alt="" /> 
                                    </div>
                                <div className="product__footer">
                                  <h3>Apple iPhone 11</h3>
                                  <div className="rating">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                  </div>
                                  <div className="product__price">
                                    <h4>$750</h4>
                                    <Link to="#"><button type="button" className="product__btn">
                                      Add To Cart
                                                </button></Link>
                                  </div>
                                  <ul>

                                    <Link to="#">
                                      <i className="fas fa-eye" />
                                    </Link>
                                    <Link to="#">
                                      <i className="fas fa-heart" />
                                    </Link>
                                    <Link to="#">
                                      <i className="fas fa-loop2" />
                                    </Link>

                                  </ul>
                                </div>
                              </div>
                            </li>

                            <li className="glide__slide">
                              <div className="product">
                                <div className="product__header">
                                  <img src="./images/products/headphone/headphone4.jpeg" alt="" />
                                    </div>
                                  <div className="product__footer">
                                    <h3>Apple iPhone 11</h3>
                                    <div className="rating">
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                      <i className="fas fa-star" />
                                    </div>
                                    <div className="product__price">
                                      <h4>$750</h4>
                                      <Link to="#"><button type="button" className="product__btn">
                                        Add To Cart
                                                </button></Link>
                                    </div>
                                    <ul>

                                      <Link to="#">
                                        <i className="fas fa-eye" />
                                      </Link>
                                      <Link to="#">
                                        <i className="fas fa-heart" />
                                      </Link>
                                      <Link to="#">
                                        <i className="fas fa-loop2" />
                                      </Link>

                                    </ul>
                                  </div>
                                </div>
                            </li>

                              <li className="glide__slide">
                                <div className="product">
                                  <div className="product__header">
                                    <img src="./images/products/sumsung/samsung5.jpeg" alt="" />
                                    </div>
                                    <div className="product__footer">
                                      <h3>Apple iPhone 11</h3>
                                      <div className="rating">
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                        <i className="fas fa-star" />
                                      </div>
                                      <div className="product__price">
                                        <h4>$750</h4>
                                        <Link to="#"><button type="button" className="product__btn">
                                          Add To Cart
                                                </button></Link>
                                      </div>
                                      <ul>

                                        <Link to="#">
                                          <i className="fas fa-eye" />
                                        </Link>
                                        <Link to="#">
                                          <i className="fas fa-heart" />
                                        </Link>
                                        <Link to="#">
                                          <i className="fas fa-loop2" />
                                        </Link>

                                      </ul>
                                    </div>
                                  </div>
                            </li>

                                <li className="glide__slide">
                                  <div className="product">
                                    <div className="product__header">
                                      <img src="./images/products/headphone/headphone5.jpeg" alt="" />
                                    </div>
                                      <div className="product__footer">
                                        <h3>Apple iPhone 11</h3>
                                        <div className="rating">
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                          <i className="fas fa-star" />
                                        </div>
                                        <div className="product__price">
                                          <h4>$750</h4>
                                          <Link to="#"><button type="button" className="product__btn">
                                            Add To Cart
                                                </button></Link>
                                        </div>
                                        <ul>

                                          <Link to="#">
                                            <i className="fas fa-eye" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fas fa-heart" />
                                          </Link>
                                          <Link to="#">
                                            <i className="fas fa-loop2" />
                                          </Link>

                                        </ul>
                                      </div>
                                    </div>
                            </li>

                                  <li className="glide__slide">
                                    <div className="product">
                                      <div className="product__header">
                                        <img src="./images/products/sumsung/samsung2.jpeg" alt="" />
                                    </div>
                                        <div className="product__footer">
                                          <h3>Apple iPhone 11</h3>
                                          <div className="rating">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                          </div>
                                          <div className="product__price">
                                            <h4>$750</h4>
                                            <Link to="#"><button type="button" className="product__btn">
                                              Add To Cart
                                                </button></Link>
                                          </div>
                                          <ul>

                                            <Link to="#">
                                              <i className="fas fa-eye" />
                                            </Link>
                                            <Link to="#">
                                              <i className="fas fa-heart" />
                                            </Link>
                                            <Link to="#">
                                              <i className="fas fa-loop2" />
                                            </Link>

                                          </ul>
                                        </div>
                                      </div>
                            </li>

                                    <li className="glide__slide">
                                      <div className="product">
                                        <div className="product__header">
                                          <img src="./images/products/iPhone/iphone2.jpeg" alt="" />
                                    </div>
                                          <div className="product__footer">
                                            <h3>Apple iPhone 11</h3>
                                            <div className="rating">
                                              <i className="fas fa-star" />
                                              <i className="fas fa-star" />
                                              <i className="fas fa-star" />
                                              <i className="fas fa-star" />
                                              <i className="fas fa-star" />
                                            </div>
                                            <div className="product__price">
                                              <h4>$750</h4>
                                              <Link to="#"><button type="button" className="product__btn">
                                                Add To Cart
                                                </button></Link>
                                            </div>
                                            <ul>

                                              <Link to="#">
                                                <i className="fas fa-eye" />
                                              </Link>
                                              <Link to="#">
                                                <i className="fas fa-heart-o" />
                                              </Link>
                                              <Link to="#">
                                                <i className="fas fa-loop2" />
                                              </Link>

                                            </ul>
                                          </div>
                                        </div>
                            </li>
                        </ul>
                    </div>

                                  <div className="glide__arrows" data-glide-el="controls">
                                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                      <i className="fas fa-arrow-left2" />
                                    </button>
                                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                      <i className="fas fa-arrow-right2" />
                                    </button>
                                  </div>
                </div>
            </div>
        </section>

                            {/* <!-- Category center --> */}
                            <section className="category__section section" id="category">
                              <div className="tab__list">
                                <div className="title__container tabs">
                                  <div className="section__titles category__titles">
                                    <div className="section__title filter-btn active" data-id="All Products">
                                      <span className="dot"></span>
                                      <h1 className="primary__title">All Products</h1>
                                    </div>
                                  </div>
                                  <div className="section__titles">
                                    <div className="section__title filter-btn" data-id="Trending Products">
                                      <span className="dot"></span>
                                      <h1 className="primary__title">Trending Products</h1>
                                    </div>
                                  </div>
                                  <div className="section__titles">
                                    <div className="section__title filter-btn" data-id="Special Products">
                                      <span className="dot"></span>
                                      <h1 className="primary__title">Special Products</h1>
                                    </div>
                                  </div>
                                  <div className="section__titles">
                                    <div className="section__title filter-btn" data-id="Features Products">
                                      <span className="dot"></span>
                                      <h1 className="primary__title">Features Products</h1>
                                    </div>
                                  </div>
                                </div>

                                <div className="category__container">
                                  <div className="category__center">

                                  </div>
                                </div>
                              </div>
                            </section>
    </div>
          </React.Fragment>
          //</li> <div>
                        //   <Product1></Product1>
          //   <Product2></Product2>
          //   <Product3></Product3>
          // </div>
          
        );
    }
}
