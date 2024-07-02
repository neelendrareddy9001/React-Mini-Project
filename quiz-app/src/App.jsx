import React, { useState } from "react";
import Qestion from "./Components/Qestion";
import questions from "./constants/questions.json";

import "./App.css";
import Result from "./Components/Result";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([])
  }

  // keep all fo the logic in App.jsx
  const handleNextQuestionClick = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };
  return (
    <div className="App">
      <h1>World Quiz</h1>
      {/* Questions Component */}
      {currentQuestion < questions.length && (
        <Qestion
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestionClick}
        />
      )}

      {/* Result Component */}
      {currentQuestion ===  questions.length && (

        <Result userAnswer={userAnswer} question={questions} resetQuiz={resetQuiz} />
      )}
    </div>
  );
};

export default App;
