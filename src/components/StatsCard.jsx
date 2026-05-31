function StatsCard({ title, value }) {
  return (
    <div
      style={{
        background: "#1e2235",
        padding: "20px",
        borderRadius: "12px",
        minWidth: "200px",
      }}
    >
      <h3>{value}</h3>
      <p>{title}</p>
    </div>
  );
}

export default StatsCard;