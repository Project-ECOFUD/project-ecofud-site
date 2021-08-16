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
  const maxEcofudKwhPerTx =
    (btcKwhTxPerMinute + C.EC2_KWH_PER_MINUTE * C.TOTAL_PUBLIC_NODES) /
    (C.BTC_ACTUAL_TX_PER_MINUTE + paymentsPerMinute * C.TOTAL_PUBLIC_NODES);

  return (
    <section
      className="content-inner-2"
      style={{
        backgroundImage: "url(images/background/bg2.svg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="section-head style-3 mb-4">
          <h2 className="title text-center m-b40">Energy Comparisons</h2>
        </div>
        <div class="comparison-container">
          <table class="comparison-table m-b40">
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
                <td className="green">
                  ~{ecofudKwhPerTx.toFixed(2)} <small>kWh/tx</small>
                </td>
                <td className="green">
                  ~{(C.BTC_MAX_TX_PER_MINUTE + paymentsPerMinute).toFixed(2)}{" "}
                  <small>tx/min</small>
                </td>
                <td className="green">
                  ~{(C.BTC_ACTUAL_TX_PER_MINUTE + paymentsPerMinute).toFixed(2)}{" "}
                  <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>ECOFUD Maximum</td>
                <td className="green">
                  ~{maxEcofudKwhPerTx.toFixed(5)} <small>kWh/tx</small>
                </td>
                <td className="green">
                  ~
                  {commaify(
                    Math.floor(
                      C.BTC_MAX_TX_PER_MINUTE +
                        paymentsPerMinute * C.TOTAL_PUBLIC_NODES
                    )
                  )}{" "}
                  <small>tx/min</small>
                </td>
                <td>
                  <small>N/A</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="comparison-notes">
          Stats for Bitcoin, Bitcoin Cash, and Ethereum were taken from
          digiconomist.net and bitinfocharts.com as of August 2021.
          <br />
          Stats for ECOFUD are updated in real-time. Energy usage for an ECOFUD
          node is measured using EC2 energy usage estimations.
          <br />
          The theoretical "ECOFUD Maximum" is if every public node were sending
          transactions at the rate that the ECOFUD nodes are sending. Truly the
          vision of a perfect utopia.
        </div>
      </div>
    </section>
  );
}
