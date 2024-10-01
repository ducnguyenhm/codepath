import React, { useState } from 'react';
import Card from './Card';
const cardDetails = [
  { question: "What is a variable in a programming language?", answer: "A container for storing data that can change during program execution."},
  { question: "What is a function, and why is it useful?", answer: "A block of reusable code that performs a specific task." },
  { question: "What is a loop, and what are the common types of loops?", answer: "Repeats code multiple times; common types are for and while loops." },
  { question: "What is an if-else statement used for in programming?", answer: " Executes code based on a condition being true or false." },
  { question: "What is the difference between a list and a dictionary in Python?", answer: "A list is ordered and accessed by index; a dictionary uses key-value pairs." },
  { question: "What is an array in programming, and how is it used?", answer: " A fixed-size collection of elements, accessed by index." },
  { question: "What does it mean to debug code?", answer: "Finding and fixing errors in the code." },
  { question: "What is a syntax error in programming?", answer: "A violation of the programming language's rules." },
  { question: "What is the purpose of comments in code?", answer: "Notes in the code to explain its function, ignored by the compiler." },
  { question: "What is a string in programming?", answer: "A sequence of characters representing text." },
];

const CardSet = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const toggleCard = () => {
    setShowQuestion(!showQuestion);
  };

  const showRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cardDetails.length);
    setCurrentCardIndex(randomIndex);
    setShowQuestion(true);
  };

  return (
    <div className="card-set">
      <h1> First Step Becoming Coder </h1>
      <h3> This is some basic question for programmer to know how the code works </h3>
      <p>Number of cards: {cardDetails.length}</p>
      
      <Card 
        question={cardDetails[currentCardIndex].question} 
        answer={cardDetails[currentCardIndex].answer} 
        showQuestion={showQuestion}
        toggleCard={toggleCard}
      />

      <button onClick={showRandomCard}> &#8594; </button>
    </div>
  );
};


export default CardSet;
