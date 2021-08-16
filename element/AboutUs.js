function AboutUs_2() {
  return (
    <section
      className="content-inner about-wrapper-1"
      style={{
        backgroundImage: "url(images/background/bg15.svg)",
        backgroundSize: "contain",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 m-b30 wow fadeInLeft"
            data-wow-duration="0.5s"
            data-wow-delay="0.2s"
          >
            <div className="dz-media left">
              <img src="images/about/robot-hand.jpg" alt="" />
            </div>
          </div>
          <div
            className="col-lg-6 m-b30 wow fadeInRight"
            data-wow-duration="0.5s"
            data-wow-delay="0.4s"
          >
            <div className="section-head style-3">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                ABOUT US
              </h6>
              <h2 className="title m-b20">What is Project ECOFUD?</h2>
              <p>
                ECOFUD stands for{" "}
                <strong>
                  Ecological Coin Operations Fighting Unecessary Detritus
                </strong>
                , an initiative to improve Bitcoin’s energy efficiency. One need
                only read the latest op-ed about Bitcoin pointing out the
                dangerous energy usage and inefficiencies to see that there's a
                serious crisis afoot. But we’re here to change that.
                <br />
                <br />
                Using the latest in <strong>
                  Number Go Up™ technology
                </strong>{" "}
                and the Lightning Network, we have found a way to increase
                Bitcoin’s kWh per transaction by{" "}
                <strong>multiple orders of magnitude</strong>. The key lies
                within the fact that that metric has two parts: total energy
                consumption and number of transactions. By applying our unique
                methodology, we can increase the number of transactions
                considerably.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs_2;
