import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Counterup({ count, ...props }) {
  return (
    <CountUp end={count} redraw={true} separator="," decimal="." {...props}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef}>count</span>
        </VisibilitySensor>
      )}
    </CountUp>
  );
}

export default Counterup;
