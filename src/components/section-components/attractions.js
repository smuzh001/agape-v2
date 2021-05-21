import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class WhyCooseUs extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className='feature-section'>
        {/* Why Choose US start */}

        {/* Why Choose US End */}
        {/* Feature Slider Section Start */}
        <h1 style={{ textAlign: "center", padding: "2%" }}>
          Come see our Local Attractions
        </h1>
        <div className='featured-slider position-relative'>
          <div className='container-fluid'>
            <div className='row no-gutters'>
              <div className='col-xl-12'>
                <div className='feature-slide-wrap' id='featureSlideActive'>
                  <div className='single-feature-slide'>
                    <img
                      src={publicUrl + "assets/img/EggHills.jpg"}
                      alt='Image'
                      className='f-big-image'
                    />
                    <div className='row no-gutters justify-content-end'>
                      <div className='col-xl-5 col-lg-8 col-md-8'>
                        <div className='f-desc'>
                          {/* <div className='f-icon'>
                            <img
                              src={publicUrl + "assets/img/icons/11.png"}
                              alt='Icon'
                            />
                          </div> */}
                          <h1>Egg Hills</h1>
                          <p>Spectacular array of small tonsured hills.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='single-feature-slide'>
                    <img
                      src={publicUrl + "assets/img/PineValley.jpg"}
                      alt='Image'
                      className='f-big-image'
                    />
                    <div className='row no-gutters justify-content-end'>
                      <div className='col-xl-5 col-lg-8 col-md-8'>
                        <div className='f-desc'>
                          <h1>Pine Valley</h1>
                          <p>Beautiful Pristine Pine forest</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='single-feature-slide'>
                    <img
                      src={publicUrl + "assets/img/Waterfall.jpg"}
                      alt='Image'
                      className='f-big-image'
                    />
                    <div className='row no-gutters justify-content-end'>
                      <div className='col-xl-5 col-lg-8 col-md-8'>
                        <div className='f-desc'>
                          <h1>Waterfalls</h1>
                          <p>Small and large magnificent waterfalls.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='single-feature-slide'>
                    <img
                      src={publicUrl + "assets/img/Resevoir.jpg"}
                      alt='Image'
                      className='f-big-image'
                    />
                    <div className='row no-gutters justify-content-end'>
                      <div className='col-xl-5 col-lg-8 col-md-8'>
                        <div className='f-desc'>
                          <h1>Reservoirs</h1>
                          <p>
                            Water spread of largest Arch dam in Asia. Small and
                            large lakes
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='single-feature-slide'>
                    <img
                      src={publicUrl + "assets/img/trekking.jpg"}
                      alt='Image'
                      className='f-big-image'
                    />
                    <div className='row no-gutters justify-content-end'>
                      <div className='col-xl-5 col-lg-8 col-md-8'>
                        <div className='f-desc'>
                          <h1>Trekking</h1>
                          <p>
                            Woods trekking offered by Forest and Wildlife
                            Department accompanied by trained guides
                          </p>
                          <div className='line' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyCooseUs;
