import React, { useState } from 'react';
import Card from './Card';
const inicardDetails = [
  { id: 1, question: "console.log('Hello, World!');", answer: "JavaScript" },
  { id: 2, question: "print('Hello, World!')", answer: "Python" },
  { id: 3, question: "System.out.println('Hello, World!');", answer: "Java" },
  { id: 4, question: "#include <iostream>\nint main() { std::cout << 'Hello, World!'; return 0; }", answer: "C++" },
  { id: 5, question: "echo 'Hello, World!';", answer: "PHP" },
];

const CardSet = () => {
  const [cardDetails, setCardDetails] = useState([...inicardDetails]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const handleNext = () => {
    if (currentCardIndex < cardDetails.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      resetCard();
    }
  };

  const handleShuffle = () => {
    const shuffled = [...cardDetails].sort(() => 0.5 - Math.random());
    setCardDetails(shuffled);
    setCurrentCardIndex(0);
  };

  const handleBack = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      resetCard();
    }
  };
  const resetCard = () => {
    setShowQuestion(true);
  };

  const handleCorrect = () => {
    setCurrentStreak(currentStreak + 1);
  };

  const handleIncorrect = () => {
    setCurrentStreak(0);
    if (currentStreak > longestStreak) {
      setLongestStreak(currentStreak);
    }
  };

  const toggleCard = () => {
    setShowQuestion(!showQuestion);
  };

  const CurrentCard = cardDetails[currentCardIndex];
  return (
    <div className="card-set">
      <h1> First Step Becoming Coder </h1>
      <h3> Basic Languages Identify </h3>
      <p> Number of cards: {cardDetails.length}</p>
      <p> Current Streak: {currentStreak}</p>
      <p> Longest Streak: {longestStreak}</p>
      <Card
        id = {CurrentCard.id}
        question = {CurrentCard.question}
        answer = {CurrentCard.answer}
        toggleCard={toggleCard}
        showQuestion={showQuestion}
        correct = {handleCorrect}
        incorrect={handleIncorrect}
      />
      <div> 
        <button onClick={handleBack} disabled={currentCardIndex === 0}> &#8592; </button>
        <button onClick={handleNext} disabled={currentCardIndex === cardDetails.length - 1}> &#8594; </button>
        <button onClick={handleShuffle}> Shuffle </button>
      </div>

    </div>
  );
};


export default CardSet;
