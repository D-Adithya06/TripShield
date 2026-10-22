
const navItems = [
  { icon: "▦", label: "Dashboard" },
  { icon: "⌑", label: "My Trips" },
  { icon: "♧", label: "Safety Center" },
  { icon: "☼", label: "Weather & Alerts" },
];

function Sidebar({
  activePage = "Dashboard",
  onNavigate,
  profileName = "Traveler",
  profileEmail = "Personal Account",
}) {
  const initial = profileName.trim().charAt(0).toUpperCase() || "T";

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-icon">T</div>
        <div>
          <h2>TripShield</h2>
          <span>TRAVEL WITH CONFIDENCE</span>
        </div>
      </div>

      <div className="nav-section-label">MENU</div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`nav-item ${
              activePage === item.label ? "active" : ""
            }`}
            onClick={() => onNavigate?.(item.label)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="sidebar-tip">
          <span className="tip-icon">✦</span>
          <h3>Travel smarter.</h3>
          <p>Your journey, your safety, all in one place.</p>
        </div>

        <button
          type="button"
          className={`sidebar-profile ${
            activePage === "My Profile" ? "active" : ""
          }`}
          onClick={() => onNavigate?.("My Profile")}
          aria-label="Open your profile"
        >
          <div className="profile-avatar">{initial}</div>

          <div className="profile-info">
            <strong>{profileName}</strong>
            <span>{profileEmail}</span>
          </div>

          <span className="profile-menu">···</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
