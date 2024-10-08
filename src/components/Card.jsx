import React, { useState } from 'react'

const Card = ({id, question, answer, showQuestion, toggleCard, image, correct, incorrect}) => {
    const [userGuess, setUserGuess] = useState("");
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = () => {
      setFeedback(userGuess.toLowerCase() === answer.toLowerCase() ? "Correct!" : "Incorrect.");
      if(userGuess.toLowerCase() === answer.toLowerCase()){
        correct();
      }
      else {
        incorrect();
      }

    };
    
    return (
      <>
        <div className="card" onClick={toggleCard}>
          {showQuestion ? <p>{question}</p> : <p>{answer}</p>}
          <img src={image} alt="Logo" />;
          
        </div>
        <div>
          Enter your Guess: 
          <form> 
              <input type = "text" onChange={(e) => setUserGuess(e.target.value)}/> 
          </form>
          <button type="submit" onClick={handleSubmit}> Summit </button> 
          <p> {feedback} </p>
        </div>
        
      </>
      
    );
  };
  

export default Card;