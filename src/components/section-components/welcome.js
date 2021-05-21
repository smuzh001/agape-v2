import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
import AgapeResort1 from "../../images/AgapeResort2.jpg";

class Welcome extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className='welcome-section section-padding'>
        <div className='container'>
          <div className='row align-items-center no-gutters'>
            {/* Tile Gallery */}
            <div className='col-lg-6'>
              <div className='tile-gallery'>
                <img
                  //   src={publicUrl + "assets/img/tile-gallery/01.jpg"}
                  src={AgapeResort1}
                  alt='Tile Gallery'
                />
                {/* <div className='tile-gallery-content'>
                  <div className='tile-icon'>
                    <img
                      src={publicUrl + "assets/img/icons/hostel-hover.png"}
                      alt=''
                    />
                  </div>
                  <h3>Luxury Interior</h3>
                  <p>
                    Builder of human happiness. No one rejects dislikes or
                    apleasure itself cause it is pleasure, but because
                  </p>
                </div> */}
              </div>
            </div>
            {/* End tile Gallery */}
            <div className='col-lg-5 offset-lg-1'>
              {/* Section Title */}
              <div className='section-title'>
                {/* <span className='title-top with-border'>
                  What is Agape Vagamon?
                </span> */}
                <h1>What is Agape Vagamon?</h1>
                <p>
                  An Eco-Spiritual resort located in the village of Plamood
                  which is not yet tainted by the flurries of the town but
                  sprawling in the fringes of pristine Vagamon hill ranges. The
                  resort located in a small hill side surrounded by a slew of
                  luxuriant tea estates, cardamom, pepper, and coffee
                  plantations. Apart from these cultivations, the highlight of
                  Agape eco spiritual resort is the rich habitation of hundreds
                  of variety exotic fruit plants which sprawls in a 3 acre farm.
                  The rare undefiled environment gives the opportunity to
                  experience beautiful tweets of many kinds of indigenous birds,
                  a soft creek which flows through the resort land that renders
                  safe swimming in the unsoiled water.
                </p>
              </div>
              {/* counter up */}
              {/* <div className='counter'>
                <div className='row'>
                  <div className='col-4'>
                    <div
                      className='counter-box wow fadeInLeft animated'
                      data-wow-duration='1500ms'
                      data-wow-delay='400ms'
                    >
                      <img
                        src={publicUrl + "assets/img/icons/building.png"}
                        alt=''
                      />
                      <span className='counter-number'>506</span>
                      <p>Luxury Appartment</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div
                      className='counter-box wow fadeInUp animated'
                      data-wow-duration='1500ms'
                      data-wow-delay='600ms'
                    >
                      <img
                        src={publicUrl + "assets/img/icons/hostel.png"}
                        alt=''
                      />
                      <span className='counter-number'>252</span>
                      <p>Modern Bedroom</p>
                    </div>
                  </div>
                  <div className='col-4'>
                    <div
                      className='counter-box wow fadeInRight animated'
                      data-wow-duration='1500ms'
                      data-wow-delay='800ms'
                    >
                      <img
                        src={publicUrl + "assets/img/icons/trophy.png"}
                        alt=''
                      />
                      <span className='counter-number'>420</span>
                      <p>Win Int Awards</p>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End counter */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Welcome;
