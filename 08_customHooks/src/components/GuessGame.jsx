import React, { useState } from 'react';



function GuessTheNumber() {
  const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  
  // Function to handle guess checking
  const handleGuess = () => {
    const num = Number(guess)
    if (!num || num < 1 || num > 100) {
      setFeedback("Please enter a number between 1 and 100.")
      return;
    }
    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (num === randomNumber) {
      setFeedback(`Congratulations ! You guessed the number in ${newAttempts} attempts.`)
    } else if (num < randomNumber) {
      setFeedback("Too Low ! Try Again.")
    }
    else if (num > randomNumber) {
      setFeedback("Too High ! Try again.")
    }

  };
  // Function to reset the game
  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", margin:"50px 0"}}>
      <h2>Guess the Number</h2>
      <input
        type="number"
        placeholder="Enter a number between 1 and 100"
        style={{width:"300px",padding:"5px"}}
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleGuess}
        style={{ marginRight: "10px", padding: "6px 12px" }}>
        Check Guess
        </button>
        <button onClick={ resetGame } style={{ padding: "6px 12px" }}>
        Reset Game
        </button>
      </div>
      <p style={{ marginTop: "20px", fontWeight: "bold" }}>{feedback}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
}

export default GuessTheNumber;
