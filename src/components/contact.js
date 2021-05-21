import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import ContactInfo from "./section-components/contact-info";
import ContactMap from "./section-components/contact-map";
import ContactForm from "./section-components/contact-form";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle='Contact' />
      <ContactInfo />
      <ContactMap />
      <ContactForm />
      <Brand Customclass='primary-bg' />
      <Footer />
    </div>
  );
};

export default ContactPage;
