import { Routes, Route } from "react-router-dom";
import HomePage from "./assets/components/HomePage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
