import React, { Component } from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <header className="header" id="header">
          {/* <!-- nav --> */}
          <div className="navigation">
            <div className="container">
              <nav className="nav">
                {/* https://wwww.iconfiner.com/icons/12533/cell_phone_icon. */}
                <div className="nav__hamburger"></div>
                <div className="nav__logo">
                  <Link to="/" className="scroll-link">
                    PHONE
                  </Link>
                </div>

                <div className="nav__menu">
                  <div className="menu__top">
                    <span className="nav__category">PHONE</span>
                    <Link to="#" className="close__toggle">
                      <i className="fas fa-cross" />
                      
                    </Link>
                  </div>
                  <ul className="nav__list">
                    <li className="nav__item">
                      <Link to="#header" className="nav__link scroll-link">
                        Home
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="#category" className="nav__link scroll-link">
                        Category
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="#news" className="nav__link scroll-link">
                        Blog
                      </Link>
                    </li>
                    <li className="nav__item">
                      <Link to="#contact" className="nav__link scroll-link">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="nav__icons">
                  <Link to="#" className="icon__item">
                    <i className="fas fa-user" />
                  </Link>
                  <Link to="#" className="icon__item">
                    <i className="fas fa-search" />
                  </Link>
                  <Link to="#" className="icon__item">
                    <i className="fas fa-cart-plus" />
                    <span id="cart__total">0</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

