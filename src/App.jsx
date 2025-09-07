import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage.jsx";
import QuizQuestions from "./assets/components/QuizQuestions.jsx";
import QuizResults from "./assets/components/QuizResults.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizQuestions />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </>
  );
}

export default App;

        
   

