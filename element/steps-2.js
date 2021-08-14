import React from "react";

export default function Steps2() {
  return (
    <section className="content-inner-2">
      <div className="container">
        <div className="section-head style-3 text-center">
          <h6 className="sub-title text-primary bgl-primary m-b15">
            OUR STEPS
          </h6>
          <h2 className="title">How It’s Work</h2>
        </div>
        <div
          className="row about-wrapper-3 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="col-md-4">
            <div className="icon-bx-wrapper style-6 text-center m-b30 icon-up">
              <div className="icon-bx-lg radius bg-white">
                <a
                  href="javascript:void(0);"
                  className="icon-cell text-primary"
                >
                  <i className="flaticon-sketch"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-title m-b15">Designing</h4>
                <p>
                  Suspendisse potenti. Pellentesque ornare mattis elit non
                  fermentum. Mauris rhoncus efficitu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-bx-wrapper style-6 text-center m-b30 icon-up">
              <div className="icon-bx-lg radius bg-white">
                <a
                  href="javascript:void(0);"
                  className="icon-cell text-primary"
                >
                  <i className="flaticon-vector"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-title m-b15">Development</h4>
                <p>
                  Suspendisse potenti. Pellentesque ornare mattis elit non
                  fermentum. Mauris rhoncus efficitu.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon-bx-wrapper style-6 text-center m-b30 icon-up">
              <div className="icon-bx-lg radius bg-white">
                <a
                  href="javascript:void(0);"
                  className="icon-cell text-primary"
                >
                  <i className="flaticon-startup"></i>
                </a>
              </div>
              <div className="icon-content">
                <h4 className="dlab-title m-b15">Launching</h4>
                <p>
                  Suspendisse potenti. Pellentesque ornare mattis elit non
                  fermentum. Mauris rhoncus efficitu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
