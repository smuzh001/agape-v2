import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";
// import AgapeResort1 from "../../agapeImages/AgapeResort1";

class SliderV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <section className='hero-section slider-two' id='secondSlider'>
        <div
          className='single-hero-slide bg-img-center d-flex align-items-center'
          style={{
            backgroundImage:
              "url(" + publicUrl + "assets/img/AgapeResort1.jpg)",
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-10'>
                <div className='slider-text'>
                  <h1 data-animation='fadeInDown' data-delay='.3s'>
                    Welcome to <br />
                    Agape
                  </h1>
                  <p data-animation='fadeInLeft' data-delay='.5s'>
                    A getaway haven in a rustic environment in the Popular
                    Vagamon hill ranges, the prominent hill station in Kerala,
                    South India.
                  </p>
                  <Link
                    className='btn filled-btn'
                    to='/service'
                    data-animation='fadeInUp'
                    data-delay='.8s'
                  >
                    get started <i className='far fa-long-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single-hero-slide bg-img-center d-flex align-items-center'
          style={{
            backgroundImage:
              "url(" + publicUrl + "assets/img/AgapeResort2.jpg)",
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-10'>
                <div className='slider-text'>
                  <h1 data-animation='fadeInDown' data-delay='.3s'>
                    Come Enjoy <br /> &amp; Our Resort!
                  </h1>
                  <p data-animation='fadeInLeft' data-delay='.5s'>
                    We provide a quite quality stay for guests with family and
                    friends in harmony with nature featured by the facilities of
                    treehouse- a spacious house built in traditional Kerala
                    architecture exclusively with wood and eco friendly
                    materials.
                  </p>
                  <Link
                    className='btn filled-btn'
                    to='/service'
                    data-animation='fadeInUp'
                    data-delay='.8s'
                  >
                    get started <i className='far fa-long-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single-hero-slide bg-img-center d-flex align-items-center'
          style={{
            backgroundImage:
              "url(" + publicUrl + "assets/img/AgapeResort3.jpg)",
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-10'>
                <div className='slider-text'>
                  <h1 data-animation='fadeInDown' data-delay='.3s'>
                    Find peace at Agape
                  </h1>
                  <p data-animation='fadeInLeft' data-delay='.5s'>
                    This place is a kind of sanctum especially for the
                    individuals who seek to get a complete spiritual, physical
                    and mental rejuvenation.{" "}
                  </p>
                  <Link
                    className='btn filled-btn'
                    to='/service'
                    data-animation='fadeInUp'
                    data-delay='.8s'
                  >
                    get started <i className='far fa-long-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className='single-hero-slide bg-img-center d-flex align-items-center'
          style={{
            backgroundImage:
              "url(" + publicUrl + "assets/img/AgapeResort4.jpg)",
          }}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7 col-md-10'>
                <div className='slider-text'>
                  <h1 data-animation='fadeInDown' data-delay='.3s'>
                    Discover our Beautiful Environment
                  </h1>
                  <p data-animation='fadeInLeft' data-delay='.5s'>
                    Vagamon is famous for its exquisite natural beauty and its
                    exhilarating cool weather.
                  </p>
                  <Link
                    className='btn filled-btn'
                    to='/service'
                    data-animation='fadeInUp'
                    data-delay='.8s'
                  >
                    get started <i className='far fa-long-arrow-right' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SliderV2;
