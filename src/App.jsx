import { useState } from 'react'
import './App.css'

const jokes = [
  {question: "Why was the nose so tired?", answer: "Because it had been running all day!"},
  {question: "What room do ghosts avoid?", answer: "The living room"},
  {question: "Where can you learn to make ice cream?", answer: "In Sundae school"},
  {question: "What did the hamburger give to his sweetheart?", answer: "An onion ring!"},
  {question: "What fruit always travels in groups of two?", answer: "Pears"},
  {question: "What kind of music do aliens like?", answer: "Nep-tunes"},
  {question: "What do elves make sandwiches with?", answer: "Shortbread"},
  {question: "What did the sleleton order at the restaurant?", answer: "Spare ribs!"},
  {question: "Why did the football team go to the bank?", answer: "To get a quarter back!"},
  {question: "What do you call cheese that doesn't belong to you?", answer: "Nacho cheese!"},
  {question: "What type of music are balloons scared of?", answer: "Pop music!"},
  {question: "What is the most splippery country in the world?", answer: "Greece!"}
];

function App() {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = jokes[index];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  const handleNext = () => {
    const randomIdx = Math.floor(Math.random() * jokes.length);
    setIndex(randomIdx);
    setIsFlipped(false);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Joke Flashcards</h1>
        <h2>Classic Jokes Challenge</h2>
        <h2>Total cards: {jokes.length}</h2>

        <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
          {!isFlipped ? (
            <div className="front">{currentCard.question}</div>
          ) : (
            <div className="back">{currentCard.answer}</div>
          )}
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
