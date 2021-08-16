export default function HowItWorks() {
  return (
    <section
      className="content-inner about-wrapper-1"
      style={{
        backgroundImage: "url(images/background/bg17.svg)",
        backgroundSize: "contain",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 m-b30 wow fadeInRight"
            data-wow-duration="0.5s"
            data-wow-delay="0.4s"
          >
            <div className="section-head style-3">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                THE TECHNICALS
              </h6>
              <h2 className="title m-b20">How does it work?</h2>
              <p>
                By establishing a channel between two of our own Lightning
                nodes, we can send payments back and forth extremely fast, and
                with a minimal footprint. Every transaction between these nodes
                adds to the overall Bitcoin transaction count, thus improving
                overall efficiency.
                <br />
                <br />
                We're <strong>reducing</strong> the number of high energy
                transaction, <strong>reusing</strong> the channel open
                transaction to continue to send transactions, and{" "}
                <strong>recycling</strong> the channel at the end to get back
                our on-chain Bitcoin.
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 m-b30 wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay="0.2s"
          >
            <div className="dz-media right">
              <img
                src="images/about/circuits.jpg"
                style={{ opacity: 0.5 }}
                alt=""
              />
              <div className="network-animation">
                <div className="node node-1">
                  <LightningLogo />
                </div>
                <div className="node node-2">
                  <LightningLogo />
                </div>
                <div className="payment-container">
                  <div className="payment payment-1" />
                  <div className="payment payment-2" />
                  <div className="payment payment-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LightningLogo = () => (
  <svg viewBox="0 0 28 55" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M27.25 30.7094L11.3542 53.8946C11.0952 54.2743 10.5792 54.3755 10.1961 54.1217C10.0071 53.997 9.87652 53.8014 9.83377 53.5791C9.79103 53.3568 9.83977 53.1267 9.96897 52.9409L25.8648 29.7556C26.1282 29.3731 26.6518 29.2765 27.0343 29.5399C27.4168 29.8033 27.5134 30.3269 27.25 30.7094Z"
      fill="#F5F5F5"
    />
    <path
      d="M25.1608 26.5765L9.62834 49.2848C9.36497 49.6673 8.84137 49.7639 8.45886 49.5005C8.07634 49.2371 7.97976 48.7136 8.24313 48.331L23.7756 25.6227C24.039 25.2402 24.5626 25.1436 24.9451 25.407C25.3276 25.6703 25.4242 26.1939 25.1608 26.5765Z"
      fill="#F5F5F5"
    />
    <path
      d="M20.4375 1.77895L2.4298 28.0979H19.3248L18.1894 29.7783H0.522295H0.363337C-0.016373 29.5194 -0.117548 29.0034 0.136253 28.6202L19.0069 0.825205C19.2658 0.445495 19.7818 0.34432 20.165 0.598122C20.5634 0.851001 20.6848 1.37705 20.4375 1.77895Z"
      fill="#F5F5F5"
    />
    <path
      d="M22.1179 6.82022L10.2415 24.1921H22.0044L20.8463 25.8725H7.0623L8.19772 24.1921L20.7327 5.88918C21.01 5.56545 21.4858 5.50065 21.8395 5.73843C22.1933 5.97621 22.313 6.44121 22.1179 6.82022Z"
      fill="#F5F5F5"
    />
  </svg>
);
