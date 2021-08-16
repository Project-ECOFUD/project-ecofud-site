import React from "react";
import AboutUs2 from "../element/aboutUs-2";
import Counter2 from "../element/counter2";
import Slider2 from "../element/slider-2";
import Footer2 from "../layout/footer-2";
import Header2 from "./../layout/header-2";
import Comparison from "../element/Comparison";
import HowItWorks from "../element/HowItWorks";
import QuestionAndAnswer from "../element/QuestionAndAnswer";
// import Testimonial2 from "../element/testimonial-2";
// import Blog2 from "../element/blog-2";
import { EcofudContextProvider } from "../data/provider";
import { getEcofudPaymentsInfo } from "../data/api";

function Index(props) {
  return (
    <EcofudContextProvider {...props}>
      <Header2 />
      <div className="page-content bg-white">
        <Slider2 />
        <div id="about">
          <AboutUs2 />
        </div>
        <Counter2 />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="energy-comparison">
          <Comparison />
        </div>
        <div id="qa">
          <QuestionAndAnswer />
        </div>
        {/* Twitter testimonials? */}
        {/* <Testimonial2 /> */}
        {/* Coverage? */}
        {/* <Blog2 /> */}
      </div>
      <Footer2 />
    </EcofudContextProvider>
  );
}

export async function getStaticProps() {
  let info;
  try {
    info = await getEcofudPaymentsInfo();
  } catch (err) {
    console.error("Failed to get payment info in getStaticProps", err);
    info = { count: 0, amount: 0 };
  }
  return {
    props: {
      initialCount: info.count,
      initialAmount: info.amount,
    },
    revalidate: 60,
  };
}

export default Index;
