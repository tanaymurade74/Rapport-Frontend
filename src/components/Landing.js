import { Link } from "react-router-dom";
import Footer from "../constants/Footer";

const Landing = () => {
  return (
    <div className="d-flex flex-column min-vh-100">

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand text-danger fst-italic fw-bold" to="/">
            <i className="bi bi-people-fill me-2"></i>Rapport
          </Link>
          <div className="d-flex gap-2">
            <Link className="btn btn-sm btn-outline-secondary" to="/login">Log In</Link>
            <Link className="btn btn-sm btn-primary" to="/login">Get Started</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow-1">

        <section className="container text-center py-5">
          <h1 className="display-4 fw-bold">Keep every customer relationship on track</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "620px" }}>
            Rapport is a simple CRM for small sales teams. Track leads through your
            pipeline, assign them to agents, and see what closed last week.
          </p>
          <div className="d-flex justify-content-center gap-2 mt-4">
            <Link className="btn btn-primary" to="/login">Get Started</Link>
            <a className="btn btn-outline-secondary" href="#features">Learn More</a>
          </div>
          <p className="small text-muted mt-3 mb-0">Sign in with Google. No setup needed.</p>
        </section>

        <section id="features" className="container py-5">
          <h2 className="text-center mb-2">What you can do</h2>
          <hr className="w-25 mx-auto mb-5" />

          <div className="row g-4 justify-content-center">

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-1 text-center p-4 option-card">
                <div className="card-body">
                  <i className="bi bi-person-lines-fill fs-2 text-primary"></i>
                  <h5 className="card-title mt-3">Leads</h5>
                  <p className="card-text text-muted small">
                    Filter by status, source or agent, and search by name.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-1 text-center p-4 option-card">
                <div className="card-body">
                  <i className="bi bi-people fs-2 text-success"></i>
                  <h5 className="card-title mt-3">Sales Agents</h5>
                  <p className="card-text text-muted small">
                    Add your team and assign every lead an owner.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-1 text-center p-4 option-card">
                <div className="card-body">
                  <i className="bi bi-chat-left-text fs-2 text-info"></i>
                  <h5 className="card-title mt-3">Comments</h5>
                  <p className="card-text text-muted small">
                    Keep notes on the lead itself, not in someone's inbox.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-1 text-center p-4 option-card">
                <div className="card-body">
                  <i className="bi bi-bar-chart fs-2 text-warning"></i>
                  <h5 className="card-title mt-3">Reports</h5>
                  <p className="card-text text-muted small">
                    See open pipeline and everything closed in the last 7 days.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="container text-center py-5">
          <h2 className="mb-3">Ready to start?</h2>
          <p className="text-muted mb-4">Add your first lead in under a minute.</p>
          <Link className="btn btn-primary" to="/login">Get Started</Link>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Landing;