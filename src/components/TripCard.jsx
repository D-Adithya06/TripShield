
function formatDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
  });
}

function TripCard({ trip, onViewDetails }) {
  const progress =
    trip.checkpoints > 0
      ? Math.round(
          (trip.completedCheckpoints / trip.checkpoints) * 100
        )
      : 0;

  return (
    <article className="trip-card">
      <div className={`trip-card-cover ${trip.image}`}>
        <span className="trip-category">YOUR ADVENTURE</span>
        <span className={`trip-status ${trip.status.toLowerCase()}`}>
          {trip.status}
        </span>
      </div>

      <div className="trip-card-body">
        <h3>{trip.name}</h3>

        <p className="trip-destination">
          <span>⌖</span> {trip.destination}
        </p>

        <div className="trip-dates">
          <span>◷</span>
          {formatDate(trip.startDate)} – {formatDate(trip.endDate)}
        </div>

        <div className="trip-progress-heading">
          <span>Checkpoint progress</span>
          <strong>{progress}%</strong>
        </div>

        <div
          className="progress-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label="Checkpoint progress"
        >
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="trip-card-footer">
          <span>
            {trip.completedCheckpoints} of {trip.checkpoints} checkpoints
          </span>

          <button
            className="text-button"
            onClick={() => onViewDetails?.(trip)}
          >
            View trip <span>→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default TripCard;
