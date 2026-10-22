
function SummaryCard({ title, value, subtitle, icon }) {
  return (
    <div className="summary-card">
      <div className="summary-card-top">
        <span className="summary-card-title">{title}</span>
        <span className="summary-card-icon">{icon}</span>
      </div>

      <h2 className="summary-card-value">{value}</h2>
      <p className="summary-card-subtitle">{subtitle}</p>
    </div>
  );
}

export default SummaryCard;
