export default function QuestionAndAnswer() {
  const qanda = [
    {
      question:
        "This is stupid, it doesn’t actually improve anything, it just artificially pads the statistics.",
      answer: (
        <>
          We looked it up, and kWh/transaction is what’s known as a fraction.{" "}
          <a
            href="https://en.wikipedia.org/wiki/Fraction"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Wikipedia definition of a fraction
          </a>{" "}
          makes it clear, it’s composed of a numerator and a denominator. We
          believe in approaching problems at both ends, so why focus only on the
          total energy usage when we can create more transactions? The math
          checks out.
          <br />
          <br />
          And if the amount of energy used per transaction isn’t actually an
          important or meaningful metric, then why have{" "}
          <a
            href="https://www.nytimes.com/2021/04/14/climate/coinbase-cryptocurrency-energy.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            The New York Times
          </a>
          ,{" "}
          <a
            href="https://www.washingtonpost.com/opinions/2021/02/18/bitcoin-emissions-pollution-tesla/"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Washington Post
          </a>
          ,{" "}
          <a
            href="https://twitter.com/elonmusk/status/1392602041025843203"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elon Musk
          </a>
          ,{" "}
          <a
            href="https://twitter.com/SenWarren/status/1402725005113364486"
            target="_blank"
            rel="noopener noreferrer"
          >
            Elizabeth Warren
          </a>
          ,{" "}
          <a
            href="https://www.forbes.com/sites/jonathanponciano/2021/03/09/bill-gates-bitcoin-crypto-climate-change/?sh=710f95176822"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bill Gates
          </a>
          , and countless other news outlets and thought leaders used it as a
          talking point statistic? I'm pretty sure they know what they're
          talking about.
        </>
      ),
    },
    {
      question:
        "Lightning transactions aren’t real transactions! These transactions don’t count!",
      answer: (
        <>
          It would be hard to exclude Lightning transactions from the definition
          of a “transaction” without also excluding most of the things it’s
          compared to.
          <br />
          <br />
          If the argument is that it isn’t at the true base layer, then the only
          real world transaction you could actually compare it to would be the
          transfer of hard assets, such as oil or gold. Visa or Cash App
          payments would be considered more like layer 6 or 7.
          <br />
          <br />
          If the argument is that these aren’t decentralized transactions
          because they’re happening between two trusted nodes, then we’d also
          have to discount any network that relies on a single or small set of
          central authorities, such as Ripple, Binance Coin, or Tether.
          <br />
          <br />
          If the argument is that Lightning transactions aren’t secure or
          finalized, consider how easy it is to reverse credit card payments,
          ACH transactions,{" "}
          <a
            href="https://www.crypto51.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            what the cost of 51% attacking your chain of choice
          </a>{" "}
          , or{" "}
          <a
            href="https://spectrum.ieee.org/ethereum-blockchain-forks-to-return-stolen-funds"
            target="_blank"
            rel="noopener noreferrer"
          >
            how malleable its governance and consensus mechanisms are
          </a>{" "}
          before being sure of how “final” most transactions really are. By
          comparison, Lightning's ability to go to chain at any time with a
          valid transaction makes it effectively as final as a broadcasted
          Bitcoin transaction.
        </>
      ),
    },
    {
      question: "How do we know you’re actually sending these transactions?",
      answer: `
        You don’t! One of the key features of the Lightning network is the ability for
        individual transactions to be sent between nodes without needing external
        validation. Only the opening and closing channel transactions are public. But
        if you’d like, you can find the channel open here and we’d be happy to provide
        server logs or a copy of the database that keeps track of each precious and
        important transaction we send.
      `,
    },
    {
      question:
        "Is this really the absolute fastest the Lightning Network can send?",
      answer: (
        <>
          Oh heavens no, absolutely not. Here at Project ECOFUD, resources are
          extremely limited. As such, we could only afford to have a single
          intern throw together our proof of concept Lightning nodes together.
          He's no{" "}
          <a
            href="https://bottlepay.com/blog/bitcoin-lightning-benchmarking-performance/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joost Jager
          </a>
          . But our code is open source, and anyone who would like to help out
          is more than welcome to.
        </>
      ),
    },
    {
      question:
        "Now that I’m convinced of the efficacy and legitimacy of Project ECOFUD, how can I support it?",
      answer: (
        <>
          We would hate to have to start paying our intern, so we aren’t seeking
          financial support at this time. Instead, we ask that you simply share
          the project. And if you're interested in what you've read here, start
          running your own Lightning Node today. We’re counting on you!
          <br />
          <br />
          And please give appreciation thanks to all of the fine folks who made
          this project possible.{" "}
          <a
            href="https://lightning.engineering/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lightning Labs
          </a>{" "}
          for the wonderful LND,{" "}
          <a
            href="https://voltage.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Voltage
          </a>{" "}
          for hosting our nodes, and{" "}
          <a href="https://steak.network/">The Steak Network</a> for inspiring
          us to build very serious products for very serious causes.
        </>
      ),
    },
  ];

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
        <div className="row justify-content-center">
          <div className="col-11">
            <div className="qanda">
              <h2 class="title m-b30">ECOFUD Q&amp;A</h2>
              {qanda.map(({ question, answer }) => (
                <div key={question}>
                  <div className="qanda-question">
                    <div className="qanda-question-q">Q:</div>
                    <div className="qanda-question-text">{question}</div>
                  </div>
                  <div className="qanda-answer">{answer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
