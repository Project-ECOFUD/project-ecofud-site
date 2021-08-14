import React from "react";
import AboutUs2 from "../element/aboutUs-2";
import Counter2 from "../element/counter2";
import OurServices2 from "../element/our-services-2";
import Slider2 from "../element/slider-2";
import Footer2 from "../layout/footer-2";
import Header2 from "./../layout/header-2";
import Comparison from "../element/Comparison";
import HowItWorks from "../element/HowItWorks";
import QuestionAndAnswer from "../element/QuestionAndAnswer";
// import Testimonial2 from "../element/testimonial-2";
// import Blog2 from "../element/blog-2";

function Index2() {
  return (
    <>
      <Header2 />
      <div className="page-content bg-white">
        <Slider2 />
        <Counter2 />
        <AboutUs2 />
        <HowItWorks />
        <Comparison />
        <QuestionAndAnswer />
        <OurServices2 />
        {/* Twitter testimonials? */}
        {/* <Testimonial2 /> */}
        {/* Coverage? */}
        {/* <Blog2 /> */}
      </div>
      <Footer2 />
    </>
  );
}

export default Index2;
