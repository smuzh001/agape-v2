import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class FeaturesV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className='feature-section section-padding'>
        <div className='container'>
          {/* Section Title */}
          <div className='section-title text-center'>
            <span className='title-top'>Popular Features</span>
            <h1>Enjoy our Resorts Benefits</h1>
          </div>
          <div className='row'>
            <div className='col-lg-4 col-md-6 Agape-go-top'>
              {/* Single feature boxes */}
              <div
                className='single-feature-box text-center wow fadeIn  animated'
                data-wow-duration='1500ms'
                data-wow-delay='400ms'
              >
                <div>
                  <img src={publicUrl + "assets/img/icons/03.png"} alt='Icon' />
                </div>
                <h4>Meditation</h4>
                <p>Solidarity, meditation, and yoga.</p>
                <Link to='/service' className='read-more'>
                  raed more <i className='far fa-long-arrow-right' />
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 Agape-go-top'>
              {/* Single feature boxes */}
              <div
                className='single-feature-box text-center wow fadeIn  animated'
                data-wow-duration='1500ms'
                data-wow-delay='600ms'
              >
                <div>
                  <img
                    src={publicUrl + "assets/img/icons/icon-2.png"}
                    alt='Icon'
                  />
                </div>
                <h4>Food Veg &amp; Non Veg</h4>
                <p>Complementary kitchen for complete self cooking.</p>
                <Link to='/service' className='read-more'>
                  raed more <i className='far fa-long-arrow-right' />
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mx-auto Agape-go-top'>
              {/* Single feature boxes */}
              <div
                className='single-feature-box text-center wow fadeIn  animated'
                data-wow-duration='1500ms'
                data-wow-delay='800ms'
              >
                <div>
                  <img
                    src={publicUrl + "assets/img/icons/icon-3.png"}
                    alt='Icon'
                  />
                </div>
                <h4>Free Wi-fi Network</h4>
                <Link to='/service' className='read-more'>
                  raed more <i className='far fa-long-arrow-right' />
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mx-auto Agape-go-top'>
              {/* Single feature boxes */}
              <div
                className='single-feature-box text-center wow fadeIn  animated'
                data-wow-duration='1500ms'
                data-wow-delay='800ms'
              >
                <div>
                  <img
                    src={publicUrl + "assets/img/icons/icon-3.png"}
                    alt='Icon'
                  />
                </div>
                <h4>Free Wi-fi Network</h4>
                <Link to='/service' className='read-more'>
                  raed more <i className='far fa-long-arrow-right' />
                </Link>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 mx-auto Agape-go-top'>
              {/* Single feature boxes */}
              <div
                className='single-feature-box text-center wow fadeIn  animated'
                data-wow-duration='1500ms'
                data-wow-delay='800ms'
              >
                <div>
                  <img
                    src={publicUrl + "assets/img/icons/icon-3.png"}
                    alt='Icon'
                  />
                </div>
                <h4>Free Wi-fi Network</h4>
                <Link to='/service' className='read-more'>
                  raed more <i className='far fa-long-arrow-right' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeaturesV2;
