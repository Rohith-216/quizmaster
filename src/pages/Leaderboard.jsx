function Leaderboard() {
  const leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Leaderboard</h1>

      {leaderboard.length === 0 ? (
        <p>No quiz attempts yet.</p>
      ) : (
        leaderboard.map((user, index) => (
          <div
            key={index}
            style={{
              background: "#1e2235",
              color: "white",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>
              #{index + 1} {user.name}
            </h3>
            <p>
              Score: {user.score}/{user.total}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default Leaderboard;