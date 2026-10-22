
import { useState } from "react";

function Profile({ profile, setProfile }) {
  const [isEditing, setIsEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [originalProfile, setOriginalProfile] = useState(null);

  function handleEdit() {
    setOriginalProfile({ ...profile });
    setSaved(false);
    setIsEditing(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: value,
    }));

    setSaved(false);
  }

  function handleSave(event) {
    event.preventDefault();
    setIsEditing(false);
    setOriginalProfile(null);
    setSaved(true);
  }

  function handleCancel() {
    if (originalProfile) {
      setProfile(originalProfile);
    }

    setIsEditing(false);
    setOriginalProfile(null);
    setSaved(false);
  }

  const initial = profile.name.trim().charAt(0).toUpperCase() || "T";

  return (
    <div className="profile-page">
      <header className="profile-page-header">
        <div>
          <p className="section-eyebrow">YOUR ACCOUNT</p>
          <h1>My Profile</h1>
          <p className="profile-subtitle">
            Manage your personal details and travel preferences.
          </p>
        </div>

        {!isEditing && (
          <button
            type="button"
            className="primary-button"
            onClick={handleEdit}
          >
            ✎ Edit Profile
          </button>
        )}
      </header>

      <section className="profile-hero">
        <div className="profile-large-avatar">{initial}</div>

        <div className="profile-hero-info">
          <h2>{profile.name || "Traveler"}</h2>
          <p>{profile.email || "No email added"}</p>
          <span className="profile-member-badge">
            ✦ TripShield Traveler
          </span>
        </div>

        <div className="profile-hero-decoration" aria-hidden="true">
          ✈
        </div>
      </section>

      <form onSubmit={handleSave}>
        <section className="profile-panel">
          <div className="profile-panel-heading">
            <div>
              <p className="section-eyebrow">ABOUT YOU</p>
              <h2>Personal information</h2>
            </div>
            <span className="profile-panel-icon">♙</span>
          </div>

          <div className="profile-fields-grid">
            <label className="profile-field">
              <span>Full name</span>
              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                disabled={!isEditing}
                required
              />
            </label>

            <label className="profile-field">
              <span>Email address</span>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="you@example.com"
                disabled={!isEditing}
                required
              />
            </label>

            <label className="profile-field">
              <span>Phone number</span>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                placeholder="Add your phone number"
                disabled={!isEditing}
              />
            </label>

            <label className="profile-field">
              <span>Home city</span>
              <input
                name="city"
                value={profile.city}
                onChange={handleChange}
                placeholder="Enter your home city"
                disabled={!isEditing}
              />
            </label>
          </div>
        </section>

        <section className="profile-panel">
          <div className="profile-panel-heading">
            <div>
              <p className="section-eyebrow">YOUR WAY TO EXPLORE</p>
              <h2>Travel preferences</h2>
            </div>
            <span className="profile-panel-icon">⌖</span>
          </div>

          <div className="profile-fields-grid">
            <label className="profile-field">
              <span>Preferred travel style</span>
              <select
                name="travelStyle"
                value={profile.travelStyle}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option>Adventure</option>
                <option>Relaxation</option>
                <option>Cultural exploration</option>
                <option>Nature and wildlife</option>
                <option>City exploration</option>
                <option>Business travel</option>
              </select>
            </label>

            <label className="profile-field">
              <span>Preferred accommodation</span>
              <select
                name="accommodation"
                value={profile.accommodation}
                onChange={handleChange}
                disabled={!isEditing}
              >
                <option>Hotels</option>
                <option>Hostels</option>
                <option>Homestays</option>
                <option>Resorts</option>
                <option>Camping</option>
                <option>No preference</option>
              </select>
            </label>

            <label className="profile-field profile-field-full">
              <span>Emergency contact</span>
              <input
                name="emergencyContact"
                value={profile.emergencyContact}
                onChange={handleChange}
                placeholder="Contact name and phone number"
                disabled={!isEditing}
              />
              <small>
                Adding a contact here does not send notifications
                or emergency messages.
              </small>
            </label>
          </div>
        </section>

        <section className="profile-privacy-note">
          <span className="profile-privacy-icon">✓</span>
          <div>
            <h3>Your information, your control</h3>
            <p>
              Profile changes are held in the current app session.
              Permanent storage and account authentication are not
              connected yet.
            </p>
          </div>
        </section>

        {isEditing && (
          <div className="profile-form-actions">
            <button
              type="button"
              className="secondary-button"
              onClick={handleCancel}
            >
              Cancel
            </button>

            <button type="submit" className="primary-button">
              Save Changes →
            </button>
          </div>
        )}

        {saved && !isEditing && (
          <p className="profile-saved-message" role="status">
            ✓ Your changes have been saved for this session.
          </p>
        )}
      </form>
    </div>
  );
}

export default Profile;
