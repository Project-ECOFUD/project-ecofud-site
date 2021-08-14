import React from "react";
import "react-rangeslider/lib/index.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../css/style.css";
import "../css/skin/skin-2.css";
import "../styles/globals.css";
import "../styles/switcher.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
