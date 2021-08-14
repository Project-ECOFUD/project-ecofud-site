import React from "react";

export default function Comparison() {
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
                  ~1,701 <small>kWh/tx</small>
                </td>
                <td>
                  ~275 <small>tx/min</small>
                </td>
                <td>
                  ~275 <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>Bitcoin Cash</td>
                <td>
                  ~1,701 <small>kWh/tx</small>
                </td>
                <td>
                  ~275 <small>tx/min</small>
                </td>
                <td>
                  ~275 <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td>
                  ~140 <small>kWh/tx</small>
                </td>
                <td>
                  ~871 <small>tx/min</small>
                </td>
                <td>
                  ~275 <small>tx/min</small>
                </td>
              </tr>
              <tr>
                <td>Bitcoin + ECOFUD</td>
                <td>
                  ~0.00787 <small>kWh/tx</small>
                </td>
                <td>
                  ~34,672 <small>tx/min</small>
                </td>
                <td>
                  ~275 <small>tx/min</small>
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
