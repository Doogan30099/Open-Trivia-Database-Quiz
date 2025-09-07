import React from "react";
import { useLocation } from "react-router-dom";

function QuizResults() {
  const location = useLocation();
  const {
    questions = [],
    userAnswers = [],
    firstName = "",
  } = location.state || {};

  const score = questions.reduce(
    (acc, q, i) => acc + (userAnswers[i] === q.correct_answer ? 1 : 0),
    0
  );

  return (
    <div id="quiz-results">
      <h2 className="quiz-heading">Quiz Completed!</h2>
      <h3 className="quiz-heading">{firstName}'s Results</h3>
      <p className="instructions">
        Score: {score} / {questions.length}
      </p>
      <table className="results-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Your Answer</th>
            <th>Correct Answer</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((q, i) => (
            <tr key={i}>
              <td>{q.question}</td>
              <td>{userAnswers[i]}</td>
              <td>{q.correct_answer}</td>
              <td>{userAnswers[i] === q.correct_answer ? "✅" : "❌"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default QuizResults;
