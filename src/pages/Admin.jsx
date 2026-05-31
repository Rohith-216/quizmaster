function Admin() {
  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const leaderboard =
    JSON.parse(localStorage.getItem("leaderboard")) || [];

  return (
    <div style={{ padding: "30px" }}>
      <h1>Admin Dashboard</h1>

      <h2>Total Users: {users.length}</h2>

      <h2>Total Attempts: {leaderboard.length}</h2>
    </div>
  );
}

export default Admin;