import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class ContactInfo extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className='contact-info-section'>
        <div className='container'>
          {/* Section Title Start */}
          <div className='row'>
            <div className='col-lg-5'>
              <div className='section-title'>
                <span className='title-top'>How to get here</span>
                <h1>With GPS you will be brought here with Google Maps.</h1>
              </div>
            </div>
            <div className='col-lg-7'>
              <p>
                <strong>From Kochi</strong>
                <br />
                About 75 kilometers from Kochi to Moolamattam then 25 km to
                Vagamon town. Then 13 km to Plammood in the Upputhara route.
                400meters from Plammod Junction via Azhamkala Road.
                <br />
                <strong>From Kottayam</strong>
                <br />
                About 38 km from Kottayam to Erattupetta. Then 26 km from
                Erattupetta to Vagamon. Then 13 km to Plammood in the Upputhara
                route. 400meters from Plammod Junction via Azhamkala Road.
                <br />
                <strong>From Kattappana</strong>
                <br />
                19 km from kattappana to Upputhara. Then about 8 km to Valacoe
                in the Vagamon route.Then 2km to Plamood Junction. 400meters
                from Plammod Junction via Azhamkala Road.
                <br />
                <strong>From Kuttikanam , Thekkady, Kumily Area</strong>
                <br />
                Get Upputhara. Then about 8 km to Valacoe in the Vagamon
                route.Then 2km to Plamood Junction. 400meters from Plammod
                Junction via Azhamkala Road.
              </p>
            </div>
          </div>
          {/* Section Title End */}
          <div className='contact-info-boxes'>
            <div className='row'>
              <div className='col-lg-4 col-md-6'>
                <div className='contact-info-box'>
                  <div className='contact-icon'>
                    <i className='far fa-map-marker-alt' />
                  </div>
                  <h4>Whatsapp</h4>
                  <p>+1 951 323 5092</p>
                  <p>+81 90 6184 7746</p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='contact-info-box'>
                  <div className='contact-icon'>
                    <i className='far fa-envelope-open' />
                  </div>
                  <h4>Email</h4>
                  <p>
                    <a href='#'>peejose@gmail.com</a>
                  </p>
                  <p>
                    <a href='#'>augustinejojo@hotmail.com </a>
                  </p>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mx-auto'>
                <div className='contact-info-box'>
                  <div className='contact-icon'>
                    <i className='far fa-phone' />
                  </div>
                  <h4>Phone Us </h4>
                  <p>+91 81569 06909</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactInfo;
