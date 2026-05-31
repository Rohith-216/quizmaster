import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav
      style={{
        background: "#1a1d2e",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 style={{ color: "#8b85ff" }}>QuizMaster</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/leaderboard">Leaderboard</Link>

        {user?.role === "admin" && (
          <Link to="/admin">Admin</Link>
        )}
      </div>

      <button onClick={logout}>Logout</button>
    </nav>
  );
}

export default Navbar;