import React from "react";
import Navbar from "./global-components/navbar-v2";
import SliderV2 from "./section-components/slider-v2";
import BookingForm from "./section-components/booking-form-v2";
import Features from "./section-components/features";
import Welcome from "./section-components/welcome";
// import LatestProduct from "./section-components/latest-product";
import LatestRoom from "./section-components/latest-room";
import Attractions from "./section-components/attractions";
import CounterUP from "./section-components/counter-up";
import CallToAction from "./section-components/call-to-action";
import ClientV2 from "./section-components/client-v2";
import LatestBlog from "./section-components/latest-blog";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";

const Home_V2 = () => {
  return (
    <div>
      <Navbar />
      <SliderV2 />
      <BookingForm />
      <Welcome />
      <Attractions />
      <LatestRoom />
      <Features />
      <CallToAction />
      <ClientV2 />
      <LatestBlog />
      yarn <Footer />
    </div>
  );
};

export default Home_V2;
