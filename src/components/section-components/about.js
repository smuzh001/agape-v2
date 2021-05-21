import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class AboutPage extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className='about-site section-padding'>
        <div className='container'>
          {/* Section Title Start */}
          <div className='row'>
            <div className='col-md-6'>
              <div className='section-title text-right'>
                <h1>About Us</h1>
              </div>
            </div>
            <div className='col-md-6'>
              <p className='mb-30'>
                Agape, Eco-Spiritual Resort is a Project as the name suggests
                that it provides an environment to be and stay in harmony with
                nature. This project is jointly owned by Joseph P. J. Who lives
                in the USA and JoJo Augustine who lives in Japan. They initiated
                this project originated from the idea as they believe in the
                sacredness of Earth, environment and of course the universe.
              </p>
            </div>
          </div>
          {/* Section Title End */}
          <div
            className='about-img bg-image'
            style={{
              backgroundImage:
                "url(" + publicUrl + "assets/img/AgapeResort6.jpg)",
            }}
          />
          <div className='row no-gutters'>
            <div className='offset-xl-1 col-xl-5 col-md-6'>
              <div className='about-text-box section-bg'>
                <h2>An Professional Hotel, Living Service Provider Company</h2>
                <p>
                  The project features rustic cottages-a treehouse- which was
                  built by traditional eco-friendly technology and materials
                  such as real wood and terracotta. It is located in a secluded
                  environment that it is away from hustles and bustles of the
                  town but yet in the same magnificent geo climatic environment
                  of Vagamon hill ranges. Agape offers quality stay in organic
                  comfort for the nature lovers and those who want to get away
                  from Urban hustles and seek refuge in organic setting.
                </p>
                <a href='#' className='btn filled-btn'>
                  Get Started <i className='far fa-long-arrow-right' />
                </a>
              </div>
            </div>
            {/* <div className='offset-lg-1 col-lg-5 col-md-6'>
              <div className='counter'>
                <div className='row'>
                  <div className='col-6'>
                    <div className='counter-box'>
                      <img src='assets/img/icons/building.png' alt='' />
                      <span className='counter-number'>506</span>
                      <p>Luxury Appartment</p>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='counter-box'>
                      <img src='assets/img/icons/trophy.png' alt='' />
                      <span className='counter-number'>420</span>
                      <p>Win Int Awards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default AboutPage;
