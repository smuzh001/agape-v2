import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import About from "./section-components/about";
import Mission from "./section-components/mission";
import Features from "./section-components/features-v3";
import ClientV3 from "./section-components/client-v3";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='About Us' />
      <About />
      <Mission />
      <Features />
      <ClientV3 />
      <Brand Customclass='primary-bg' />
      <Footer />
    </div>
  );
};

export default AboutPage;
