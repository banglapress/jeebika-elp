import { useState } from "react";

export default function QuizComponent({ questions, onSubmit }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      onSubmit(score >= 6); // Pass if 6 or more correct
    }
  };

  return (
    <div className="quiz-component">
      {!quizCompleted ? (
        <div>
          <p>{questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option.correct)}>
              {option.text}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <p>
            Your score: {score} out of {questions.length}
          </p>
          {score >= 6 ? (
            <p>Congratulations! You can proceed to the next content.</p>
          ) : (
            <p>Sorry, you need to score at least 6 to proceed.</p>
          )}
        </div>
      )}
    </div>
  );
}
