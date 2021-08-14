import Counterup from "../component/counterup";

function Slider2() {
  return (
    // <!-- Slider -->
    <div className="banner-two gradient">
      <div className="container">
        <div className="banner-inner">
          <img
            className="img1 move-2"
            src="images/main-slider/slider2/pic3.png"
            alt
          />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content text-white">
                <h6
                  className="wow fadeInUp sub-title bgl-light text-white"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Sustainable Bitcoin
                </h6>
                <h1
                  className="wow fadeInUp m-b20"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <Counterup count={1583457} />{" "}
                  <small>Transactions to improve Bitcoin’s energy usage</small>
                </h1>
                <p
                  className="wow fadeInUp m-b30"
                  data-wow-delay="1.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Mauris in enim sollicitudin quam sollicitudin fermentum ut
                  vitae massa. Donec venenatis accumsan nisi, sit amet maximus
                  velit euismod sit amet. Vivamus et sem sed ipsum pretium
                  lobortis non vitae sem.
                </p>
                <a
                  href="/about-us-2"
                  className="wow fadeInUp btn btn-light text-primary shadow rounded-xl"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="img2 move-1" alt />
          <div className="img3 move-2" alt />
        </div>
      </div>
      <div className="dz-media">
        <img src="images/main-slider/slider2/pic-alt.jpg" alt />
      </div>
    </div>
  );
}

export default Slider2;
