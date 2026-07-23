import { Link } from "react-router-dom";
import HeaderWithoutSearch from "../constants/HeaderWithoutSearch";
import Footer from "../constants/Footer";
import useSettingsContext from "../contexts/SettingsContext";

const Settings = () => {
    const { allLeads, setAllLeads, allAgents, setAllAgents, activeView, setActiveView, data, salesAgent, getSalesAgent, 
    handleAgentDelete, handleLeadDelete} = useSettingsContext();
    

   

  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderWithoutSearch />
      <main className="flex-grow-1 container">
        <div className="container mt-4">
          <h1 className="text-center mb-4">Settings</h1>
          <div className="row mb-4 text-center">
            <div className="col-12 col-md-6 mb-4">
              <div className="card p-3  border-primary">
                <h5>Total Leads</h5>
                <h2 className="text-primary">{allLeads.length}</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="card p-3  border-success">
                <h5>Total Agents</h5>
                <h2 className="text-success">{allAgents.length}</h2>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="btn-group" role="group" aria-label="Settings view">
              <button
                type="button"
                className={`btn btn-sm ${activeView === "leads" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setActiveView("leads")}
              >
                Manage Leads
              </button>
              <button
                type="button"
                className={`btn btn-sm ${activeView === "agents" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setActiveView("agents")}
              >
                Manage Agents
              </button>
            </div>
          </div>

          <br />
          <hr />

          {activeView === "leads" && (allLeads.length > 0 ? (
            <div className="text-center">
              <h1 className="text-center mt-3">Manage Leads</h1>
              <div className="row">
                {allLeads.map((lead) => (
                  <div key={lead._id} className="col-md-4">
                    <Link
                      className="text-decoration-none"
                      to={`/lead/${lead._id}`}
                    >
                      <div className="card p-3 mt-4">
                        <p>
                          <strong>Lead Name: </strong>
                          {lead.name}
                        </p>
                        <p>
                          <strong>Lead Source: </strong>
                          {lead.source}
                        </p>
                        <p>
                          <strong>Status: </strong>
                          {lead.status}
                        </p>
                        <p>
                          <strong>Priority: </strong>
                          {lead.priority}
                        </p>
                        <p>
                          <strong>SalesAgent: </strong>
                          {`${getSalesAgent(`${lead.salesAgent}`)}`}
                        </p>
                      </div>
                    </Link>
                    <button
                      className="btn btn-sm btn-outline-danger mt-2 w-100"
                      onClick={() => window.confirm(`Delete lead "${lead.name}"?`) && handleLeadDelete(`${lead._id}`)}
                    >
                      Delete Lead
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-muted py-5">
              <i className="bi bi-person-lines-fill" style={{ fontSize: "2.5rem" }}></i>
              <h6 className="mt-3 mb-1">No leads to manage</h6>
              <p className="small mb-3">Create a lead and it will show up here.</p>
              <Link className="btn btn-sm btn-primary" to="/addLead" state={{ state: "add" }}>Add New Lead</Link>
            </div>
          ))}

          {activeView === "agents" && (allAgents.length > 0 ? (
            <div>
              <h1 className="text-center">Manage Sales Agent</h1>
              <div className="row">
                {allAgents.map((agent) => (
                  <div key={agent._id} className="col-md-4">
                    {/* <Link className="text-decoration-none" to = {`/agent/${agent._id}`}> */}
                    <div className="card p-3 mt-4">
                      <p>
                        <strong>Agent Name: </strong>
                        {agent.name}
                      </p>
                      <p>
                        <strong>Agent Email: </strong>
                        {agent.email}
                      </p>
                    </div>
                    {/* </Link> */}
                    <button
                      className="btn btn-sm btn-outline-danger mt-2 w-100"
                      onClick={() => window.confirm(`Delete agent "${agent.name}"?`) && handleAgentDelete(`${agent._id}`)}
                    >
                      Delete Agent
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center text-muted py-5">
              <i className="bi bi-people" style={{ fontSize: "2.5rem" }}></i>
              <h6 className="mt-3 mb-1">No agents to manage</h6>
              <p className="small mb-3">Add an agent and it will show up here.</p>
              <Link className="btn btn-sm btn-primary" to="/salesAgentList">Add Sales Agent</Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;