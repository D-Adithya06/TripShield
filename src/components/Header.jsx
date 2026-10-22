
function Header({ onCreateTrip }) {
  return (
    <header className="dashboard-header">
      <div className="header-greeting">
        <p className="header-eyebrow">YOUR TRAVEL OVERVIEW</p>
        <h1>Good to see you, Traveler <span>✦</span></h1>
        <p className="header-subtitle">
          Plan your next adventure. We'll help you stay prepared.
        </p>
      </div>

      <div className="header-actions">
        <button
          className="notification-button"
          aria-label="Notifications"
          title="Notifications"
        >
          ♧
          <span className="notification-dot"></span>
        </button>

        <button className="primary-button" onClick={onCreateTrip}>
          <span>＋</span> Create Trip
        </button>
      </div>
    </header>
  );
}

export default Header;
