import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function QuizQuestions() {
  const location = useLocation();
  const navigate = useNavigate();
  let { category, difficulty, firstName } = location.state || {};

  if (!category || !difficulty || !firstName) {
    const saved = localStorage.getItem("quizSetup");
    if (saved) {
      ({ category, difficulty, firstName } = JSON.parse(saved));
    }
  }
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        setQuestions(response.data.results);
      } catch {
        setError("Failed to fetch quiz questions.");
      } finally {
        setLoading(false);
      }
    }
    if (category && difficulty) {
      fetchQuestions();
    }
  }, [category, difficulty]);

  if (loading) return <div>Loading questions...</div>;
  if (error) return <div>{error}</div>;
  if (!questions.length) return <div>No questions found.</div>;

  const currentQuestion = questions[currentIndex];
  const allAnswers = currentQuestion
    ? [
        ...currentQuestion.incorrect_answers,
        currentQuestion.correct_answer,
      ].sort()
    : [];

  const handleAnswer = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      const finalAnswers = [...userAnswers, answer];
      navigate("/results", {
        state: {
          questions,
          userAnswers: finalAnswers,
          firstName,
        },
      });
    }
  };

  return (
    <div id="quiz-questions">
      <h2 className="quiz-heading">Quiz for {firstName}</h2>
      <h3 className="question">
        Question {currentIndex + 1} of {questions.length}
      </h3>
      <p className="question">{currentQuestion.question}</p>
      <ul>
        {allAnswers.map((answer, i) => (
          <li className="answer-list" key={i}>
            <button className="answer-button" onClick={() => handleAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizQuestions;
