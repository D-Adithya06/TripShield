
function TripDetails({ trip, onBack }) {
  if (!trip) {
    return (
      <div className="empty-state">
        <h2>Trip not found</h2>
        <button className="primary-button" onClick={onBack}>
          Back to dashboard
        </button>
      </div>
    );
  }

  return (
    <section className="trip-details-page">
      <button className="back-button" onClick={onBack}>
        ← Back to dashboard
      </button>

      <div className={`details-cover ${trip.image}`}>
        <span className="trip-category">YOUR ADVENTURE</span>
        <h1>{trip.name}</h1>
        <p>{trip.destination}</p>
      </div>

      <div className="details-summary">
        <div>
          <span className="detail-label">Start date</span>
          <strong>{trip.startDate}</strong>
        </div>

        <div>
          <span className="detail-label">End date</span>
          <strong>{trip.endDate}</strong>
        </div>

        <div>
          <span className="detail-label">Trip status</span>
          <strong>{trip.status}</strong>
        </div>
      </div>

      <div className="details-section">
        <h2>Trip checkpoints</h2>
        <p>
          {trip.completedCheckpoints} of {trip.checkpoints} checkpoints
          completed.
        </p>
        <p className="demo-note">
          Checkpoint information is sample data for this prototype.
        </p>
      </div>
    </section>
  );
}

export default TripDetails;
