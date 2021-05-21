import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import Gallery from "./section-components/gallery-page";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";

const GalleryPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Our Gallery' subheader='Gallery' />
      <Gallery />
      <Brand Customclass='primary-bg' />
      <Footer />
    </div>
  );
};

export default GalleryPage;
