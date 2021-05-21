import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavbarV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imgattr = "logo";
    let anchor = "#";
    return (
      <header className='header-two'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-3 col-md-6 col-7'>
              <div className='logo-wrap d-flex justify-content-between align-items-center'>
                <div className='logo'>
                  <Link to='/'>
                    <img
                      src={publicUrl + "assets/img/AgapeBanner.jpg"}
                      alt='Agape Vagamon'
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-9 col-md-6 col-5'>
              <div className='menu-right-area text-  right'>
                <nav className='main-menu'>
                  <ul className='list-inline'>
                    <li>
                      <p className='phone-num'>
                        <i className='far fa-phone' />
                        +91 81569 06909
                      </p>
                    </li>
                    <li>
                      <Link to='/'>Home</Link>
                      {/* <ul className='submenu'>
                        <li>
                          <Link to='/'>Home 1</Link>
                        </li>
                        <li>
                          <Link to='/home-v2'>Home 2</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li className='have-submenu'>
                      <Link to='/room-grid'>Rooms</Link>
                      <ul className='submenu'>
                        <li>
                          <Link to='/room-grid'>Room Gird</Link>
                        </li>
                        <li>
                          <Link to='/room-details'>Room Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to='/service'>Services</Link>
                    </li>
                    {/* <li className='have-submenu'>
                      <Link to='/blog-grid'>News</Link>
                      <ul className='submenu'>
                        <li>
                          <Link to='/blog-grid'>News Gird</Link>
                        </li>
                        <li>
                          <Link to='/blog-list'>News Standard</Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>News Details</Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li className='have-submenu'>
                      <a href='#'>Pages</a>
                      <ul className='submenu'>
                        <li className='have-submenu'>
                          {" "}
                          <Link to='/'>Home</Link>
                          <ul className='submenu'>
                            <li>
                              <Link to='/'>Home 1</Link>
                            </li>
                            <li>
                              <Link to='/home-v2'>Home 2</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='/about'>About Us</Link>
                        </li>
                        <li className='have-submenu'>
                          <Link to='/room-gird'>Rooms</Link>
                          <ul className='submenu'>
                            <li>
                              <Link to='/room-list'>Room List</Link>
                            </li>
                            <li>
                              <Link to='/room-gird'>Room Gird</Link>
                            </li>
                            <li>
                              <Link to='/room-details'>Room Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='/service'>Services</Link>
                        </li>
                        <li className='have-submenu'>
                          <Link to='/blog-grid'>News</Link>
                          <ul className='submenu'>
                            <li>
                              <Link to='/blog-gird'>News Gird</Link>
                            </li>
                            <li>
                              <Link to='/blog-list'>News Standard</Link>
                            </li>
                            <li>
                              <Link to='/blog-details'>News Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to='/gallery'>Gallery</Link>
                        </li>
                        <li>
                          <Link to='/contact'>Contact</Link>
                        </li>
                        <li>
                          <Link to='/our-staff'>Our Staff</Link>
                        </li>
                        <li>
                          <Link to='/resturent'>Resturent</Link>
                        </li>
                        <li>
                          <Link to='/reservation'>Reservation</Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                      <Link to='/contact'>Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className='search-wrap'>
                  <a href='#' className='search-icon'>
                    <i className='far fa-search' />
                  </a>
                  <a href='#' className='search-icon icon-close'>
                    <i className='far fa-times' />
                  </a>
                  <div className='search-form'>
                    <form>
                      <input
                        type='search'
                        placeholder='TYPE AND PRESS ENTER.....'
                      />
                    </form>
                  </div>
                </div>
                <div className='quote-btn'>
                  <Link to='/contact' className='btn filled-btn'>
                    get a quote <i className='far fa-long-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='mobilemenu' />
        </div>
      </header>
    );
  }
}

export default NavbarV2;
