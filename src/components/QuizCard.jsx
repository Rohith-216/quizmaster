import { useNavigate } from "react-router-dom";

function QuizCard({ quiz }) {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate(`/quiz/${quiz.id}`);
  };

  return (
    <div
      style={{
        background: "#1e2235",
        padding: "20px",
        borderRadius: "12px",
        marginBottom: "15px",
      }}
    >
      <h3>{quiz.title}</h3>

      <p>{quiz.category}</p>

      <p>{quiz.questions.length} Questions</p>

      <button onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default QuizCard;