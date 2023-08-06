import "./styles.css";
import Navigation from "./components/navbar";
import QuizScreen from "./components/quizScreen";
import JoinScreen from "./components/joinScreen";
import { useState } from "react";
export default function App() {
  const [isStarted, setIsStarted] = useState(true);
  const [question, setQuestion] = useState(
    "Quiz App UI. Inspirational designs, illustrations, and graphic elements from the world's best designers. Want more inspiration? Browse our search results."
  );
  return (
    <div className="App">
      {isStarted ? (
        <QuizScreen />
      ) : (
        <>
          <Navigation />
          <JoinScreen />
        </>
      )}
    </div>
  );
}
