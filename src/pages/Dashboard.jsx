
import "../App.css";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import TripCard from "../components/TripCard";
import TripDetails from "./TripDetails";
import SafetyCenter from "./SafetyCenter";
import Profile from "./Profile";
import sampleTrips from "../data/sampleTrips";

const initialProfile = {
  name: "Traveler",
  email: "traveler@example.com",
  phone: "",
  city: "",
  travelStyle: "Adventure",
  accommodation: "Hotels",
  emergencyContact: "",
};

function Dashboard() {
  const [trips] = useState(sampleTrips);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [activePage, setActivePage] = useState("Dashboard");
  const [profile, setProfile] = useState(initialProfile);

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
    setShowCreateForm(false);
  }

  function renderDashboard() {
    return (
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

        {upcomingTrips.length === 0 && (
          <div className="empty-state">
            <h2>No upcoming adventures yet</h2>
            <p>Create a trip to start planning your next journey.</p>
            <button
              className="primary-button"
              onClick={() => setShowCreateForm(true)}
            >
              + Create Trip
            </button>
          </div>
        )}

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
              <button
                className="text-button"
                onClick={() => handleNavigate("Safety Center")}
              >
                Open Safety Center →
              </button>
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
    );
  }

  function renderMyTrips() {
    return (
      <>
        <header className="safety-page-header">
          <div>
            <p className="section-eyebrow">ALL YOUR JOURNEYS</p>
            <h1>My Trips</h1>
            <p className="safety-page-subtitle">
              Every adventure, organized in one place.
            </p>
          </div>
          <button
            className="primary-button"
            onClick={() => setShowCreateForm(true)}
          >
            + Create Trip
          </button>
        </header>

        <section className="trips-grid">
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              trip={trip}
              onViewDetails={setSelectedTrip}
            />
          ))}
        </section>

        {trips.length === 0 && (
          <div className="empty-state">
            <h2>No trips yet</h2>
            <p>Your next adventure starts with a plan.</p>
          </div>
        )}

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
    );
  }

  function renderWeatherPage() {
    return (
      <section className="safety-page">
        <header className="safety-page-header">
          <div>
            <p className="section-eyebrow">TRAVEL CONDITIONS</p>
            <h1>Weather & Alerts</h1>
            <p className="safety-page-subtitle">
              Stay informed about the conditions at your destination.
            </p>
          </div>
          <div className="safety-shield-icon" aria-hidden="true">
            ☼
          </div>
        </header>

        <div className="readiness-card">
          <p className="section-eyebrow">WEATHER UPDATES</p>
          <h2>Travel conditions, all in one place</h2>
          <p className="safety-page-subtitle">
            Live weather forecasts and destination alerts are not
            connected yet. This section is a prototype preview.
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="app-layout">
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        profileName={profile.name || "Traveler"}
        profileEmail={profile.email || "Personal Account"}
      />

      <main className="main-content">
        {selectedTrip ? (
          <TripDetails
            trip={selectedTrip}
            onBack={() => setSelectedTrip(null)}
          />
        ) : activePage === "My Profile" ? (
          <Profile profile={profile} setProfile={setProfile} />
        ) : activePage === "Safety Center" ? (
          <SafetyCenter />
        ) : activePage === "My Trips" ? (
          renderMyTrips()
        ) : activePage === "Weather & Alerts" ? (
          renderWeatherPage()
        ) : (
          renderDashboard()
        )}
      </main>
    </div>
  );
}

export default Dashboard;
