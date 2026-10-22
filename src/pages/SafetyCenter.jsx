
import { useState } from "react";

const initialChecklist = [
  {
    id: 1,
    title: "Save important travel documents",
    description: "Keep copies of your ID, tickets, and bookings accessible.",
    category: "Documents",
  },
  {
    id: 2,
    title: "Review your accommodation details",
    description: "Confirm your address, booking, and check-in information.",
    category: "Accommodation",
  },
  {
    id: 3,
    title: "Plan your trip checkpoints",
    description: "Identify important stops along your journey.",
    category: "Trip planning",
  },
  {
    id: 4,
    title: "Share your itinerary with someone you trust",
    description: "Make sure a trusted person knows your travel plans.",
    category: "Communication",
  },
  {
    id: 5,
    title: "Keep emergency contacts accessible",
    description: "Save relevant local emergency numbers and contacts.",
    category: "Emergency readiness",
  },
];

function SafetyCenter() {
  const [checklist, setChecklist] = useState(initialChecklist.map((item) => ({
    ...item,
    completed: false,
  })));

  const completedCount = checklist.filter((item) => item.completed).length;
  const progress = Math.round((completedCount / checklist.length) * 100);

  function toggleChecklistItem(id) {
    setChecklist((current) =>
      current.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  return (
    <div className="safety-page">
      <header className="safety-page-header">
        <div>
          <p className="section-eyebrow">TRAVEL WITH CONFIDENCE</p>
          <h1>Safety Center</h1>
          <p className="safety-page-subtitle">
            A little preparation goes a long way. Get ready for a safer journey.
          </p>
        </div>
        <div className="safety-shield-icon" aria-hidden="true">
          ♧
        </div>
      </header>

      <section className="readiness-card">
        <div className="readiness-top">
          <div>
            <p className="section-eyebrow">YOUR PREPARATION</p>
            <h2>Travel readiness checklist</h2>
            <p>Work through these essentials before your next trip.</p>
          </div>
          <div className="readiness-percentage">{progress}%</div>
        </div>

        <div
          className="readiness-track"
          role="progressbar"
          aria-label="Checklist completion"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="readiness-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="readiness-count">
          {completedCount} of {checklist.length} tasks completed
        </div>
      </section>

      <section className="safety-content-grid">
        <div className="safety-checklist-panel">
          <div className="safety-section-heading">
            <div>
              <p className="section-eyebrow">BEFORE YOU GO</p>
              <h2>Your safety checklist</h2>
            </div>
            <span className="checklist-count">
              {completedCount}/{checklist.length}
            </span>
          </div>

          <div className="safety-checklist">
            {checklist.map((item) => (
              <label
                className={`safety-checklist-item ${
                  item.completed ? "completed" : ""
                }`}
                key={item.id}
              >
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleChecklistItem(item.id)}
                />
                <span className="custom-checkbox" aria-hidden="true">
                  {item.completed ? "✓" : ""}
                </span>
                <span className="checklist-item-content">
                  <span className="checklist-category">{item.category}</span>
                  <strong>{item.title}</strong>
                  <span className="checklist-description">
                    {item.description}
                  </span>
                </span>
              </label>
            ))}
          </div>
        </div>

        <aside className="safety-side-column">
          <div className="safety-info-card contacts-card">
            <div className="safety-info-icon">♡</div>
            <p className="section-eyebrow">STAY CONNECTED</p>
            <h3>Trusted contacts</h3>
            <p>
              Choose someone who knows your itinerary and how to reach you
              during your trip.
            </p>
            <div className="safety-info-note">
              <span>○</span>
              Contact management is not connected yet.
            </div>
          </div>

          <div className="safety-info-card emergency-card">
            <div className="safety-info-icon">＋</div>
            <p className="section-eyebrow">BE PREPARED</p>
            <h3>Emergency readiness</h3>
            <p>
              Keep your phone charged, save essential numbers, and know the
              nearest appropriate help options for your destination.
            </p>
            <div className="safety-info-note">
              <span>!</span>
              This page does not contact emergency services.
            </div>
          </div>
        </aside>
      </section>

      <p className="safety-demo-disclaimer">
        Prototype preview · Checklist progress is stored in page state and
        resets when this page is reloaded. No live tracking, emergency
        notifications, or contact sharing is active.
      </p>
    </div>
  );
}

export default SafetyCenter;
