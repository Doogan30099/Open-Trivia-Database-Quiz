import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage.jsx";
import QuizQuestions from "./assets/components/QuizQuestions.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
  <Route path="/quiz" element={<QuizQuestions />} />
      </Routes>
    </>
  );
}

export default App;

        
   

