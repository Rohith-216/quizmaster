import Navbar from "../components/Navbar";
import StatsCard from "../components/StatsCard";
import QuizCard from "../components/QuizCard";

import sampleQuizzes from "../data/sampleQuizzes";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
        }}
      >
        <h1>Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <StatsCard
            title="Available Quizzes"
            value="4"
          />

          <StatsCard
            title="Attempts"
            value="0"
          />

          <StatsCard
            title="Average Score"
            value="0%"
          />
        </div>

        <h2>Available Quizzes</h2>

        {sampleQuizzes.map((quiz) => (
          <QuizCard
            key={quiz.id}
            quiz={quiz}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;