import Counterup from "../component/counterup";
function Counter2() {
  return (
    <>
      {/* <!-- Counters 2 --> */}
      <section className="counter-wrapper-2 overlay-gradient-dark">
        <div
          className="counter-inner content-inner-3"
          style={{
            backgroundImage: "url(images/background/bg14.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-sm-6 m-b30">
                <div className="dlab-content-bx style-3 text-center">
                  <div className="icon-content">
                    <h2 className="m-b0 text-primary">
                      <Counterup count={1583457} />
                    </h2>
                    <div className="title">Transactions sent</div>
                    <div className="icon-md text-primary">
                      <span className="icon-cell">
                        <i className="flaticon-smile"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 m-b30">
                <div className="dlab-content-bx style-3 text-center">
                  <div className="icon-content">
                    <h2 className="m-b0 text-primary">
                      +<Counterup count={99.999} decimals={3} />%
                    </h2>
                    <div className="title">Tx throughput</div>
                    <div className="icon-md text-primary">
                      <span className="icon-cell">
                        <i className="flaticon-line-chart"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 m-b30">
                <div className="dlab-content-bx style-3 text-center">
                  <div className="icon-content">
                    <h2 className="m-b0 text-primary">
                      <Counterup count={10000000} />
                    </h2>
                    <div className="title">Satoshis Sent</div>
                    <div className="icon-md text-primary">
                      <span className="icon-cell">
                        <i className="flaticon-startup"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counter2;
