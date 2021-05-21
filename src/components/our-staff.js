import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import Staff from "./section-components/our-staff";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";

const RoomListPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Our Staffs' subheader='Staffs' />
      <Staff />
      <Brand Customclass='primary-bg' />
      <Footer />
    </div>
  );
};

export default RoomListPage;
