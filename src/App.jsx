import { useEffect, useState } from "react";
import data from "./assets/data";

function App() {
  const [quota, setQuota] = useState({});

  function randomQuote() {
    const randomNumber = Math.floor(Math.random() * data.length + 1);
    const findQuote = data.find((item) => item.id === randomNumber);
    setQuota(findQuote);
  }

  useEffect(() => {
    randomQuote();
  }, []);

  return (
    <main id="quote-box">
      <q id="text">{quota?.quote}</q>
      <p id="author">{quota?.author}</p>
      <div className="buttons">
        <a href="twitter.com/intent/tweet" id="tweet-quote">
          Tweet Quote
        </a>
        <button onClick={randomQuote} id="new-quote">
          New Quote...
        </button>
      </div>
    </main>
  );
}

export default App;
