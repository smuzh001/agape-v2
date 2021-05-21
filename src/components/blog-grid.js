import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import BlogGrid from "./blog-components/blog-grid";
import Brand from "./section-components/brand";
import Footer from "./global-components/footer";

const BlogGridPage = () => {
  return (
    <div>
      <Navbar />
      <PageHeader
        headertitle='Blog Gird'
        subheader='Blogs'
        Img='blog/blog-breadcrumb.jpg'
      />
      <BlogGrid />
      <Brand Customclass='primary-bg' />
      <Footer />
    </div>
  );
};

export default BlogGridPage;
