import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function HomePage() {
  const [categories, setCategories] = useState([]);
  const [difficulties, setDifficulties] = useState(["easy", "medium", "hard"]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api_category.php"
        );
        const { trivia_categories } = response.data;
        setCategories(trivia_categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = e.target["first-name"].value;
    const category = e.target["category"].value;
    const difficulty = e.target["difficulty"].value;
    if (!firstName || !category || !difficulty) {
      alert("Please fill out all fields.");
      return;
    }
    // Navigate to QuizQuestions page, passing state
    navigate("QuizQuestions.jsx", {
      state: {
        firstName,
        category,
        difficulty,
      },
    });
  };

  return (
    <div id="home-page">
      <h1 className="welcome">
        🎉 Welcome to the Ultimate Trivia Challenge! 🎉
      </h1>
      <br />
      <p className="instructions">
        Test your knowledge across multiple categories with fun, fast-paced
        multiple-choice questions.
        <br /> ✅ Choose the best answer
        <br /> ✅ See how many you can get right
        <br /> ✅ Challenge yourself to beat your high score!
      </p>
      <p className="instructions">
        When your ready, enter your name, select a category and difficulty, then
        hit "Start Quiz" to begin!
        <br /> Good luck and have fun! 🍀
      </p>
      <form id="quiz-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first-name">First Name:</label>
          <input type="text" id="first-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select id="category" required>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="difficulty">Difficulty:</label>
          <select id="difficulty" required>
            {difficulties.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <button id="submit-button" type="submit">
          Start Quiz
        </button>
      </form>
    </div>
  );
}

export default HomePage;

// HomePage
// 2. on the home page display a header that read "open trivia quiz"
// 3. under the header display a welcome message to the user
// 4. under the welcome message display instructions on the quiz
// 5. add a textbox and a label for the users first name that is required
// 6. add a dropdown and label for the question category - must hhave at least 4 choices from the api
// 7. add a dropdown and label for the question difficulty - use all three choices
// 8. add a submit button
// 9. add an error message stopping the form submit if any of the input fields aren't filled out
//10. add state to the input field to update the form data and load the quiz question page
// src/components/HomePage.jsx
