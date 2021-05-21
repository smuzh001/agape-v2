import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import LatestFood from "./section-components/latest-food";
import Video from "./section-components/video";
import BookTable from "./section-components/book-table";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";

const ReservationPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Our Resturent' subheader='Resturent' />
      <LatestFood />
      <Video />
      <BookTable />
      <Brand Customclass='primary-bg' />
      <Footer />
    </div>
  );
};

export default ReservationPage;
