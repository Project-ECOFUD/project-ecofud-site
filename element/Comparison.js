import React from "react";
import { commaify } from "../util";
import * as C from "../data/constants";
import { useEcofudContext } from "../data/provider";

export default function Comparison() {
  const { paymentCount, paymentsPerMinute } = useEcofudContext();
  const btcKwhTxPerMinute = C.BTC_KWH_PER_TX * C.BTC_ACTUAL_TX_PER_MINUTE;
  const ecofudKwhPerTx =
    (btcKwhTxPerMinute + C.EC2_KWH_PER_MINUTE) /
    (C.BTC_ACTUAL_TX_PER_MINUTE + paymentsPerMinute);

  return (
    <section
      className="content-inner-2"
      style={{
        backgroundImage: "url(images/background/bg2.png)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="section-head style-3 mb-4">
          <h2 className="title text-center">Energy Comparisons</h2>
        </div>
        <div class="comparison-container">
          <table class="comparison-table">
            <thead>
              <tr>
                <td>Project</td>
                <td>kW/h per TX</td>
                <td>Max TXs Minute</td>
                <td>Actual TXs Minute</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bitcoin</td>
                <td>
                  ~{commaify(C.BTC_KWH_PER_TX)} <small>kWh/tx</small>
                </td>
                <td>
                  ~{commaify(C.BTC_MAX_TX_PER_MINUTE)} <small>tx/min</small>
                </td>
                <td>
                  ~{commaify(C.BTC_ACTUAL_TX_PER_MINUTE)} <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>Bitcoin Cash</td>
                <td>
                  ~{commaify(C.BCH_KWH_PER_TX)} <small>kWh/tx</small>
                </td>
                <td>
                  ~{commaify(C.BCH_MAX_TX_PER_MINUTE)} <small>tx/min</small>
                </td>
                <td>
                  ~{commaify(C.BCH_ACTUAL_TX_PER_MINUTE)} <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>
                  ~{commaify(C.ETH_KWH_PER_TX)} <small>kWh/tx</small>
                </td>
                <td>
                  ~{commaify(C.ETH_MAX_TX_PER_MINUTE)} <small>tx/min</small>
                </td>
                <td>
                  ~{commaify(C.ETH_ACTUAL_TX_PER_MINUTE)} <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>Bitcoin + ECOFUD</td>
                <td>
                  ~{ecofudKwhPerTx.toFixed(2)} <small>kWh/tx</small>
                </td>
                <td>
                  ~{(C.BTC_MAX_TX_PER_MINUTE + paymentsPerMinute).toFixed(2)}{" "}
                  <small>tx/min</small>
                </td>
                <td>
                  ~{(C.BTC_ACTUAL_TX_PER_MINUTE + paymentsPerMinute).toFixed(2)}{" "}
                  <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>
                  <sup>†</sup>ECOFUD Maximum
                </td>
                <td>
                  ~5.820285 × 10<sup>-10</sup> <small>kWh/tx</small>
                </td>
                <td>
                  ~4.372483 × 10<sup>11</sup> <small>tx/min</small>
                </td>
                <td>
                  ~275 <small>tx/min</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="comparison-notes">
          Stats for Bitcoin, Bitcoin Cash, and Ethereum were taken from
          digiconomist.net as of August 2021. Stats for ECOFUD are updated in
          real-time.
          <br />
          <br />
          <sup>†</sup>The theoretical "ECOFUD Maximum" is a projection of if
          every bitcoin transaction for the next year was a channel opening
          between two ECOFUD nodes, which then continued to send back and forth
          in perpetuity. Truly the vision of a perfect utopia.
        </div>
      </div>
    </section>
  );
}
