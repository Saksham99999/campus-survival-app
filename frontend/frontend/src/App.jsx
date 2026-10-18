
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#home">
          Campus Survival
        </a>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Explore</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero">
          <div className="hero-content">
            <p className="tagline">
              MADE FOR UNT STUDENTS
            </p>

            <h1>
              Your Campus.
              <br />
              Your Community.
              <br />
              Your Survival Guide.
            </h1>

            <p className="description">
              New to UNT or Denton? Find housing,
              dining, transportation, and campus
              resources in one convenient place in a short period of time.
            </p>

            <a className="primary-button" href="#features">
              Get Started →
            </a>
          </div>
        </section>

        <section className="features" id="features">
          <h2>Explore Campus Survival</h2>
          <p>Everything you need for student life.</p>

          <div className="feature-grid">
            <article className="feature-card">
              <span>🏠</span>
              <h3>Housing</h3>
              <p>Explore housing options near UNT.</p>
            </article>

            <article className="feature-card">
              <span>🍽️</span>
              <h3>Dining</h3>
              <p>Discover dining and grocery options.</p>
            </article>

            <article className="feature-card">
              <span>🚌</span>
              <h3>Transportation</h3>
              <p>Find useful transportation resources.</p>
            </article>

            <article className="feature-card">
              <span>📚</span>
              <h3>Campus Resources</h3>
              <p>Find helpful services for students.</p>
            </article>
          </div>
        </section>

        <section className="about" id="about">
          <h2>About Campus Survival</h2>
          <p>
            Campus Survival helps students to navigate about the resources  at the University of North Texas
            and in the Denton community.
          </p>
        </section>
      </main>

      <footer>
        <p>Campus Survival | Student Web Project</p>
      </footer>
    </div>
  );
}

export default App;
