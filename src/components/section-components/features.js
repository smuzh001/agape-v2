import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Features extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <section className='wcu-section section-bg section-padding'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-5 offset-lg-1'>
              {/* Section Title */}
              <div className='feature-left'>
                <div className='section-title'>
                  <h1>With each room comes amenities</h1>
                </div>
                <ul className='feature-list'>
                  <li
                    className='wow fadeInUp animated'
                    data-wow-duration='1000ms'
                    data-wow-delay='0ms'
                  >
                    <div className='feature-icon'>
                      <i className='far fa-wifi' />
                    </div>
                    <h4>Free Wifi</h4>
                  </li>
                  <li
                    className='wow fadeInUp animated'
                    data-wow-duration='1000ms'
                    data-wow-delay='200ms'
                  >
                    <div className='feature-icon'>
                      <i className='far fa-utensils' />
                    </div>
                    <h4>Food Veg &amp; Non Veg</h4>
                    <p>with a kitchen for complete self cooking</p>
                  </li>
                  <li
                    className='wow fadeInUp animated'
                    data-wow-duration='1000ms'
                    data-wow-delay='300ms'
                  >
                    <div className='feature-icon'>
                      <i className='far fa-spa' />
                    </div>
                    <h4>Solidarity, Meditation and Yoga</h4>
                    <p>
                      Ayurvedic Massage, herbal steam bath offered by government
                      certified professionals (both male and female)
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='feature-img'>
                <img
                  src={publicUrl + "assets/img/Meditation.jpeg"}
                  alt='Image'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
