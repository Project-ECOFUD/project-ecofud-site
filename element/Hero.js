import Counter from "../component/Counter";
import { useEcofudContext } from "../data/provider";

function Hero() {
  const { paymentCount } = useEcofudContext();
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
                  data-wow-duration="0.5s"
                  data-wow-delay="0.1s"
                >
                  Sustainable Bitcoin
                </h6>
                <h1
                  className="wow fadeInUp m-b20"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.3s"
                >
                  <small>We've sent</small> <Counter count={paymentCount} />{" "}
                  <small>Transactions to Improve Bitcoin’s Energy Usage</small>
                </h1>
                <h4
                  className="wow fadeInUp m-b30"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.5s"
                >
                  Project ECOFUD is solving the ecological footprint of sending
                  Bitcoin, one transaction at a time.
                </h4>
                <a
                  href="#about"
                  className="wow fadeInUp btn btn-light text-primary shadow rounded-xl"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.7s"
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
        <img src="images/main-slider/slider2/pic-alt-min.jpg" alt />
      </div>
    </div>
  );
}

export default Hero;
