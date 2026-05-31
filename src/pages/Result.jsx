import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <h1>No Result Found</h1>;
  }

  const percentage = (
    (state.score / state.total) *
    100
  ).toFixed(2);

  const passed = percentage >= 40;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f1117",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#1e2235",
          padding: "40px",
          borderRadius: "16px",
          width: "100%",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <h1>🎉 Quiz Completed</h1>

        <h2 style={{ marginTop: "15px" }}>
          {state.quizTitle}
        </h2>

        <div style={{ marginTop: "30px" }}>
          <h2>
            Score: {state.score}/{state.total}
          </h2>

          <h2 style={{ marginTop: "15px" }}>
            Percentage: {percentage}%
          </h2>

          <h2
            style={{
              marginTop: "15px",
              color: passed ? "#22c55e" : "#ef4444",
            }}
          >
            {passed ? "PASS ✅" : "FAIL ❌"}
          </h2>
        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/dashboard")}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#8b85ff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Back To Dashboard
          </button>

          <button
            onClick={() => navigate("/leaderboard")}
            style={{
              padding: "12px 20px",
              border: "none",
              borderRadius: "8px",
              background: "#22c55e",
              color: "white",
              cursor: "pointer",
            }}
          >
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;