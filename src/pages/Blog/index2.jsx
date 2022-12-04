import React from "react";

import Foot from "../../components/Footer/Foot";
import Head from "../../components/Header/Head";
import BlogMain from "../../components/Main/BlogMain";
import BlogMain1 from "../../components/Main/BlogMain1";
import BlogMain2 from "../../components/Main/BlogMain2";
import HomeMain from "../../components/Main/HomeMain";
import Navigation from "../../components/Navigation/navigation";

function Blog2() {
  return (
    <div>
      <Head />
      <>
        <div className="Flex">
          <BlogMain2 />
          <Navigation />
        </div>
      </>
      <Foot />
    </div>
  );
}

export default Blog2;
