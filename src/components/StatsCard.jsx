function StatsCard({ title, value }) {
  return (
    <div
      style={{
        background: "#1e2235",
        padding: "25px",
        borderRadius: "12px",
        minWidth: "220px",
      }}
    >
      <h2>{value}</h2>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "10px",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export default StatsCard;