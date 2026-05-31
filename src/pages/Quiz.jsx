import { useParams } from "react-router-dom";
import { useState } from "react";
import sampleQuizzes from "../data/sampleQuizzes";

function Quiz() {
  const { id } = useParams();

  const quiz = sampleQuizzes.find(
    (q) => q.id === Number(id)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  if (!quiz) {
    return <h1>Quiz Not Found</h1>;
  }

  const question = quiz.questions[currentQuestion];

  const nextQuestion = () => {
    if (
      currentQuestion <
      quiz.questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );
    }
  };

  return (
    <div
      style={{
        padding: "30px",
      }}
    >
      <h1>{quiz.title}</h1>

      <h3>
        Question {currentQuestion + 1} of{" "}
        {quiz.questions.length}
      </h3>

      <div
        style={{
          background: "#1e2235",
          padding: "20px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <h2>{question.question}</h2>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          {question.options.map(
            (option, index) => (
              <button
  key={index}
  onClick={() => setSelectedAnswer(option)}
  style={{
    display: "block",
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    background:
      selectedAnswer === option
        ? "#8b85ff"
        : "#ffffff",
    color:
      selectedAnswer === option
        ? "white"
        : "black",
  }}
>
  {option}
</button>
            )
          )}
        </div>

        <button
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </div>
    </div>
  );
}

export default Quiz;