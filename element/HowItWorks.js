export default function HowItWorks() {
  return (
    <section
      className="content-inner about-wrapper-1"
      style={{
        backgroundImage: "url(images/background/bg15.png)",
        backgroundSize: "contain",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-6 m-b30 wow fadeInRight"
            data-wow-duration="2s"
            data-wow-delay="0.4s"
          >
            <div className="section-head style-3">
              <h6 className="sub-title text-primary bgl-primary m-b15">
                ABOUT US
              </h6>
              <h2 className="title m-b20">How does it work?</h2>
              <p>
                ECOFUD stands for <strong>E</strong>cological <strong>C</strong>
                oin <strong>O</strong>perations <strong>F</strong>ighting{" "}
                <strong>U</strong>necessary <strong>D</strong>etritus, an
                initiative to improve Bitcoin’s energy efficiency. One need only
                scroll through the internet see dozens of articles or hot takes
                pointing out the dangers and inefficiencies in Bitcoin's energy
                usage compared to other alternatives. But we’re here to change
                that.
                <br />
                <br />
                Using the latest in Number Go Up™ technology and the Lightning
                Network, we have found a way to increase Bitcoin’s kWh per
                transaction by multiple orders of magnitude. The key lies within
                the fact that that metric has two parts: total energy
                consumption and number of transactions. By applying our unique
                methodology, we can increase the number of transactions
                considerably.
              </p>
            </div>
          </div>
          <div
            className="col-lg-6 m-b30 wow fadeInLeft"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="dz-media right">
              <img src="images/about/pic1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
