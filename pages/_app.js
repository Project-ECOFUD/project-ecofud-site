import React from "react";
import "../css/style.css";
import "wowjs/css/libs/animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="page-wrapper">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
