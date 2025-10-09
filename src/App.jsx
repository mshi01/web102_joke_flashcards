import { useState } from "react";
import "./App.css";

function App() {
  const jokes = [
    {
      question: "Why was the nose so tired?",
      answer: "Because it had been running all day!",
    },
    { question: "What room do ghosts avoid?", answer: "The living room" },
    {
      question: "Where can you learn to make ice cream?",
      answer: "In Sundae school",
    },
    {
      question: "What did the hamburger give to his sweetheart?",
      answer: "An onion ring!",
    },
    {
      question: "What fruit always travels in groups of two?",
      answer: "Pears",
    },
    { question: "What kind of music do aliens like?", answer: "Nep-tunes" },
    { question: "What do elves make sandwiches with?", answer: "Shortbread" },
    {
      question: "What did the skeleton order at the restaurant?",
      answer: "Spare ribs!",
    },
    {
      question: "Why did the football team go to the bank?",
      answer: "To get a quarter back!",
    },
    {
      question: "What do you call cheese that doesn't belong to you?",
      answer: "Nacho cheese!",
    },
    {
      question: "What type of music are balloons scared of?",
      answer: "Pop music!",
    },
    {
      question: "What is the most splippery country in the world?",
      answer: "Greece!",
    },
  ];

  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = jokes[index];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const checkAnswer = () => {
    const cleanGuess = guess.trim().toLowerCase();
    const correctAnswer = currentCard.answer.toLowerCase();

    if (cleanGuess === correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Try again!");
    }
  };

  const nextJoke = () => {
    if (index < jokes.length - 1) {
      setIndex(index + 1);
      resetCard();
    }
  };

  const prevJoke = () => {
    if (index > 0) {
      setIndex(index - 1);
      resetCard();
    }
  };

  const resetCard = () => {
    setGuess("");
    setFeedback("");
    setIsFlipped(false);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Joke Flashcards</h1>
        <h2>Classic Jokes Challenge</h2>
        <h2>Total cards: {jokes.length}</h2>

        <div className="card" onClick={handleFlip}>
          <div className={`card-inner ${isFlipped ? "flipped" : ""}`}>
            <div className="card-front">{currentCard.question}</div>
            <div className="card-back">{currentCard.answer}</div>
          </div>
        </div>

        <div className="input-section">
          <input
            type="text"
            value={guess}
            placeholder="Your guess..."
            onChange={(e) => setGuess(e.target.value)}
            //   onKeyDown={(e) => e.key === "Enter" && checkAnswer()}
          />
          <button onClick={checkAnswer}>Submit</button>
          <p
            className={`feedback ${
              feedback === "Try again!"
                ? "wrong"
                : feedback === "Correct!"
                ? "correct"
                : ""
            }`}
          >
            {feedback}
          </p>
        </div>

        <div className="navigation">
          <button
            onClick={prevJoke}
            disabled={index === 0}
            className={index === 0 ? "disabled" : ""}
          >
            Back
          </button>
          <button
            onClick={nextJoke}
            disabled={index === jokes.length - 1}
            className={index === jokes.length - 1 ? "disabled" : ""}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
