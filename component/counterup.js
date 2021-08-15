import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counterup({ count, ...props }) {
  const [hasStarted, setHasStarted] = useState(false);
  return (
    <CountUp
      end={count}
      duration={3}
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
          <span ref={countUpRef}>count</span>
        </VisibilitySensor>
      )}
    </CountUp>
  );
}

export default Counterup;
