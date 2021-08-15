import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { ECOFUD_STARTED_AT } from "./constants";

const SOCKET_ORIGIN = process.env.NEXT_PUBLIC_BACKEND_URL.replace(
  "http://",
  "ws://"
).replace("https://", "wss://");

const EcofudContext = createContext({
  isConnected: false,
  paymentCount: 0,
  paymentAmount: 0,
});

export function useEcofudContext() {
  return useContext(EcofudContext);
}

export function EcofudContextProvider({
  children,
  initialCount = 0,
  initialAmount = 0,
}) {
  const ws = useRef();
  const [connectionAttempt, setConnectionAttempt] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [paymentCount, setPaymentCount] = useState(initialCount);
  const [paymentAmount, setPaymentAmount] = useState(initialAmount);
  const [hasLoaded, setHasLoaded] = useState(
    initialCount !== 0 && initialAmount !== 0
  );

  useEffect(() => {
    ws.current = new WebSocket(`${SOCKET_ORIGIN}/payments`);
    ws.current.addEventListener("open", () => {
      console.info("Socket connected!");
      setIsConnected(true);
    });
    ws.current.addEventListener("error", (ev) => {
      console.error("Socket connect error:", ev);
    });
    ws.current.addEventListener("close", () => {
      setIsConnected(true);
      setTimeout(() => {
        console.info("Re-connecting socket...");
        setConnectionAttempt((s) => s + 1);
      }, 3000 + connectionAttempt * 3000);
    });
    ws.current.addEventListener("message", (ev) => {
      try {
        const data = JSON.parse(ev.data);
        setPaymentCount(data.count);
        setPaymentAmount(data.amount);
        setHasLoaded(true);
      } catch (err) {
        console.error("Failed to parse WS message:", err);
      }
    });
    return () => {
      if (ws.current && ws.current.readyState !== 3) {
        ws.current.close();
      }
      ws.current = undefined;
    };
  }, [connectionAttempt]);

  const state = useMemo(() => {
    const timeSinceStarted = Date.now() - ECOFUD_STARTED_AT;
    const minsSinceStarted = timeSinceStarted / 1000 / 60;
    const paymentsPerMinute = paymentCount / minsSinceStarted;
    return {
      isConnected,
      paymentCount,
      paymentAmount,
      paymentsPerMinute,
      hasLoaded,
    };
  }, [isConnected, paymentCount, paymentAmount, hasLoaded]);

  return (
    <EcofudContext.Provider value={state}>{children}</EcofudContext.Provider>
  );
}
