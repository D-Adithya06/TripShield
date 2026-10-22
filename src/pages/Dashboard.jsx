import "../App.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import TripCard from "../components/TripCard";
import TripDetails from "./TripDetails";
import sampleTrips from "../data/sampleTrips";

function Dashboard() {
  const [trips, setTrips] = useState(sampleTrips);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");

  const upcomingTrips = trips.filter(
    (trip) => trip.status === "Upcoming" || trip.status === "Planned"
  );

  const completedTrips = trips.filter(
    (trip) => trip.status === "Completed"
  );

  const pendingCheckpoints = trips.reduce(
    (total, trip) =>
      total + trip.checkpoints - trip.completedCheckpoints,
    0
  );

  function handleNavigate(page) {
    setActivePage(page);
    setSelectedTrip(null);
  }

  return (
    <div className="app-layout">
      <Sidebar activePage={activePage} onNavigate={handleNavigate} />

      <main className="main-content">
        {selectedTrip ? (
          <TripDetails
            trip={selectedTrip}
            onBack={() => setSelectedTrip(null)}
          />
        ) : (
          <>
            <Header onCreateTrip={() => setShowCreateForm(true)} />

            <section className="summary-grid">
              <SummaryCard
                title="Total Trips"
                value={trips.length}
                subtitle="All your adventures"
                icon="✈"
              />
              <SummaryCard
                title="Upcoming Trips"
                value={upcomingTrips.length}
                subtitle="Adventures ahead"
                icon="↗"
              />
              <SummaryCard
                title="Completed Trips"
                value={completedTrips.length}
                subtitle="Memories made"
                icon="✓"
              />
              <SummaryCard
                title="Pending Checkpoints"
                value={pendingCheckpoints}
                subtitle="Across your trips"
                icon="⌖"
              />
            </section>

            <section className="section-heading">
              <div>
                <p className="section-eyebrow">YOUR JOURNEYS</p>
                <h2>Upcoming adventures</h2>
                <p>Every great journey starts with a plan.</p>
              </div>

              <button
                className="secondary-button"
                onClick={() => handleNavigate("My Trips")}
              >
                View all trips →
              </button>
            </section>

            <section className="trips-grid">
              {upcomingTrips.map((trip) => (
                <TripCard
                  key={trip.id}
                  trip={trip}
                  onViewDetails={setSelectedTrip}
                />
              ))}
            </section>

            <section className="overview-grid">
              <div className="overview-card safety-overview">
                <div className="overview-icon">✓</div>
                <div>
                  <p className="section-eyebrow">TRAVEL PREPARED</p>
                  <h3>Your safety overview</h3>
                  <p>
                    Keep checkpoints and trusted contacts organized before
                    your next journey.
                  </p>
                  <span className="demo-badge">Demo preview</span>
                </div>
              </div>

              <div className="overview-card weather-overview">
                <div className="overview-icon">☼</div>
                <div>
                  <p className="section-eyebrow">TRAVEL CONDITIONS</p>
                  <h3>Weather & alerts</h3>
                  <p>
                    Weather information and travel alerts will appear here
                    when an API is connected.
                  </p>
                  <span className="demo-badge">Sample preview</span>
                </div>
              </div>
            </section>

            {showCreateForm && (
              <div className="modal-backdrop">
                <div
                  className="create-trip-modal"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="create-trip-title"
                >
                  <button
                    className="modal-close"
                    onClick={() => setShowCreateForm(false)}
                    aria-label="Close"
                  >
                    ×
                  </button>

                  <p className="section-eyebrow">NEW ADVENTURE</p>
                  <h2 id="create-trip-title">Create your next trip</h2>
                  <p>
                    The trip creation form will be connected here next.
                  </p>

                  <button
                    className="primary-button"
                    onClick={() => setShowCreateForm(false)}
                  >
                    Got it
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
