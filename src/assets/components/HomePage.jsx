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

function HomePage() {
    return (
      <div>
        <h1 className="welcome">Welcome to the Open Trivia Quiz</h1>
        <p className="instructions">Today we are going to be taking a quiz. It will be multiple choice and you will have to choice of difficulty.</p>

      </div>
    );
  }
  
  export default HomePage;