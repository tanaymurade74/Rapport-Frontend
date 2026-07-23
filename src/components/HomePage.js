import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import Footer from "../constants/Footer";
import HeaderWithoutSearch from "../constants/HeaderWithoutSearch";

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const { data } = useFetch(`${process.env.REACT_APP_API_URL}/leads`);
  const { data: salesAgent } = useFetch(`${process.env.REACT_APP_API_URL}/agents`);

  const leads = (data && data.Leads) || [];
  const agents = (salesAgent && salesAgent.agents) || [];
  const inPipeline = leads.filter((lead) => lead.status !== "Closed").length;

  return (
    <div className="d-flex flex-column min-vh-100">

    <HeaderWithoutSearch/>
    <main className="container py-5 flex-grow-1">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Rapport CRM</h1>
        <p className="lead text-muted">Select a module to begin</p>
        <hr className="w-25 mx-auto" />
      </div>

      <div className="row g-4 justify-content-center">

        <div className="col-md-6 col-lg-3">
          <Link to="/leadList" style={{ textDecoration: "none" }}>
            <div className="card h-100 border-1 text-center p-4 option-card">
              <div className="card-body">
                <h2 className="fw-bold text-primary mb-0">{leads.length}</h2>
                <h3 className="card-title h5 mt-2">Leads</h3>
                <p className="card-text text-muted small mb-0">View and manage potential clients</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/salesAgentList" style={{ textDecoration: "none" }}>
            <div className="card h-100 border-1 text-center p-4 option-card">
              <div className="card-body">
                <h2 className="fw-bold text-success mb-0">{agents.length}</h2>
                <h3 className="card-title h5 mt-2">Agents</h3>
                <p className="card-text text-muted small mb-0">Manage team members</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="col-md-6 col-lg-3">
          <Link to="/reports" style={{ textDecoration: "none" }}>
            <div className="card h-100 border-1 text-center p-4 option-card">
              <div className="card-body">
                <h2 className="fw-bold text-warning mb-0">{inPipeline}</h2>
                <h3 className="card-title h5 mt-2">In Pipeline</h3>
                <p className="card-text text-muted small mb-0">Visualize performance data</p>
              </div>
            </div>
          </Link>
        </div>

      </div>
    </main>
    <Footer/>
    </div>
  );
};

export default HomePage;