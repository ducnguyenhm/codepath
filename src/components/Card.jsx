import React from 'react'
const Card = ({ question, answer, showQuestion, toggleCard, image, SetColor}) => {
    return (
      <div style={{backgroundColor: {SetColor}}} className="card" onClick={toggleCard}>
        {showQuestion ? <p>{question}</p> : <p>{answer}</p>}
        <img src={image} alt="Logo" />;
      </div>
    );
  };
  

export default Card;