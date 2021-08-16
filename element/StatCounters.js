import Counter from "../component/Counter";
import { useEcofudContext } from "../data/provider";
import { BTC_ACTUAL_TX_PER_MINUTE } from "../data/constants";

function StatCounters() {
  const { paymentAmount, paymentCount, paymentsPerMinute } = useEcofudContext();
  const btc = paymentAmount / 100000000;
  const improvementPct = (paymentsPerMinute / BTC_ACTUAL_TX_PER_MINUTE) * 100;

  return (
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
                    <Counter count={paymentCount} />
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
                    +<Counter count={improvementPct} decimals={1} />%
                  </h2>
                  <div className="title">Efficiency improvement</div>
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
                    <Counter count={btc} decimals={4} />
                  </h2>
                  <div className="title">BTC Sent</div>
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
  );
}

export default StatCounters;
