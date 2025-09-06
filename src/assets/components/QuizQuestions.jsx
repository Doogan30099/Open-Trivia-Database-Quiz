import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function QuizQuestions() {
  const location = useLocation();
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

  return (
    <div>
      <h2>Quiz for {firstName}</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <h3>{question.question}</h3>
            <ul>
              {question.incorrect_answers.map((answer, i) => (
                <li key={i}>{answer}</li>
              ))}
              <li>{question.correct_answer}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuizQuestions;
