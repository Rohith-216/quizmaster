import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import sampleQuizzes from "../data/sampleQuizzes";

function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const quiz = sampleQuizzes.find(
    (q) => q.id === parseInt(id)
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(300);

  if (!quiz) {
    return <h1>Quiz Not Found</h1>;
  }

  const submitQuiz = () => {
    let score = 0;

    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.answer) {
        score++;
      }
    });

    const leaderboard =
      JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({
      name: "User",
      score,
      total: quiz.questions.length,
    });

    localStorage.setItem(
      "leaderboard",
      JSON.stringify(leaderboard)
    );

    navigate("/result", {
      state: {
        score,
        total: quiz.questions.length,
        quizTitle: quiz.title,
      },
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          submitQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const question = quiz.questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = option;

    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);

      setSelectedAnswer(
        answers[currentQuestion + 1] || ""
      );
    } else {
      submitQuiz();
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "auto",
      }}
    >
      <h1>{quiz.title}</h1>

      <h2>
        Time Left: {Math.floor(timeLeft / 60)}:
        {(timeLeft % 60)
          .toString()
          .padStart(2, "0")}
      </h2>

      <h3>
        Question {currentQuestion + 1} of{" "}
        {quiz.questions.length}
      </h3>

      <div
        style={{
          background: "#1e2235",
          padding: "25px",
          borderRadius: "12px",
          marginTop: "20px",
        }}
      >
        <h2>{question.question}</h2>

        <div style={{ marginTop: "20px" }}>
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              style={{
                display: "block",
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                background:
                  selectedAnswer === option
                    ? "#8b85ff"
                    : "#ffffff",
                color:
                  selectedAnswer === option
                    ? "#ffffff"
                    : "#000000",
              }}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={nextQuestion}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#8b85ff",
            color: "#ffffff",
            cursor: "pointer",
          }}
        >
          {currentQuestion ===
          quiz.questions.length - 1
            ? "Submit Quiz"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
}

export default Quiz;