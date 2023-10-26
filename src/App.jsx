import { useState } from "react";

import quotes from "../quotes.json";

import { FaQuoteLeft, FaTwitterSquare, FaTumblrSquare } from "react-icons/fa";

const getRandomQuote = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = () => {
  return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)})`;
};

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [color, setColor] = useState(getRandomColor());

  const handleChange = () => {
    const newQuote = getRandomQuote();
    const newColor = getRandomColor();

    setQuote(newQuote);
    setColor(newColor);
  };

  return (
    <div
      className="wrapper"
      style={{ backgroundColor: color, transition: ".5s" }}
    >
      <div id="quote-box" className="quote_box">
        <div className="quote_text" style={{ color: color, transition: ".5s" }}>
          <p>
            <i className="fa_quote">
              <FaQuoteLeft />
            </i>
            <span id="text">{quote.quote}</span>
          </p>
        </div>
        <div
          className="quote_author"
          style={{ color: color, transition: ".5s" }}
        >
          <p>
            -<span id="author"> {quote.author} </span>
          </p>
        </div>
        <div
          className="quote_buttons"
          style={{ color: color, transition: ".5s" }}
        >
          <a
            className="button"
            id="tweet-quote"
            href={`http://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
            target="_blank"
            style={{ color: color, transition: ".5s" }}
          >
            <i className="fa fa-twitter">
              <FaTwitterSquare />
            </i>
          </a>
          <button
            className="button"
            id="new-quote"
            style={{ backgroundColor: color, transition: ".5s" }}
            onClick={handleChange}
          >
            Nova Cotação
          </button>
        </div>
      </div>
      <footer className="footer">
        <p>
          por <span>Arthur Rocha</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
