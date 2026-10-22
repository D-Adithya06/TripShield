
const navItems = [
  { icon: "▦", label: "Dashboard", active: true },
  { icon: "⌑", label: "My Trips", active: false },
  { icon: "♧", label: "Safety Center", active: false },
  { icon: "☼", label: "Weather & Alerts", active: false },
];

function Sidebar({ activePage = "Dashboard", onNavigate }) {
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

        <div className="sidebar-profile">
          <div className="profile-avatar">A</div>
          <div className="profile-info">
            <strong>Traveler</strong>
            <span>Personal Account</span>
          </div>
          <span className="profile-menu">···</span>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
