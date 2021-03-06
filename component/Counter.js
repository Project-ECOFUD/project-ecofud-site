import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { commaify } from "../util";

function Counter({ count, ...props }) {
  const [hasStarted, setHasStarted] = useState(false);
  return (
    <CountUp
      end={count}
      duration={3.5}
      preserveValue
      separator=","
      decimal="."
      {...props}
    >
      {({ countUpRef, start }) => (
        <VisibilitySensor
          onChange={() => {
            if (!hasStarted) {
              start();
            }
            setHasStarted(true);
          }}
          delayedCall
          active={!hasStarted}
        >
          <span ref={countUpRef}>
            {props.decimals
              ? commaify(parseFloat(count.toFixed(props.decimals)))
              : commaify(count)}
          </span>
        </VisibilitySensor>
      )}
    </CountUp>
  );
}

export default Counter;
