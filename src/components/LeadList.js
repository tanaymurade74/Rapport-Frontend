import { Link } from "react-router-dom";
import Header from "../constants/Header";
import Footer from "../constants/Footer";
import useLeadListContext from "../contexts/LeadListContext";

const priorityColor = {
    "High": "text-danger",
    "Medium": "text-warning",
    "Low": "text-secondary"
}

const statusColor = {
    "New": "bg-primary",
    "Contacted": "bg-info text-dark",
    "Qualified": "bg-secondary",
    "Proposal Sent": "bg-warning text-dark",
    "Closed": "bg-success"
}

const LeadList = () => {

    const {leads, allLeads, search, setSearch, status, setStatus, selectAgent, setSelectAgent
        ,agents, priorityOrder, setPriorityOrder, timeToCloseOrder, setTimeToCloseOrder, handleClear,
        getSalesAgent, loading
    } = useLeadListContext();

    return <div className="d-flex flex-column min-vh-100">

      <Header search={search} setSearch={setSearch} />
      <main className="mt-4 flex-grow-1">

        <div className="container p-4">
          <button
            className="btn btn-primary w-100 mb-3 d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#filterSection"
            aria-expanded="false"
            aria-controls="filterSection"
          >
            Show/Hide Filters
          </button>

          <div className="row">
            <div className="col-md-3 mb-4">
              <div className="collapse d-md-block" id="filterSection">
                <div className="card p-3">
                  <h6 className="fw-bold mb-3">Filters</h6>

                  <div className="mb-3">
                    <label className="form-label fw-semibold small text-uppercase text-muted" htmlFor="f-status">Status</label>
                    <select id="f-status" className="form-select form-select-sm" value={status} onChange={(e) => setStatus(e.target.value)}>
                      <option value="">All statuses</option>
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Qualified">Qualified</option>
                      <option value="Proposal Sent">Proposal Sent</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold small text-uppercase text-muted" htmlFor="f-agent">Sales agent</label>
                    <select id="f-agent" className="form-select form-select-sm" value={selectAgent} onChange={(e) => setSelectAgent(e.target.value)}>
                      <option value="">All agents</option>
                      {agents.map(agent => (
                        <option key={agent._id} value={agent._id}>{agent.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold small text-uppercase text-muted" htmlFor="f-priority">Sort by priority</label>
                    <select id="f-priority" className="form-select form-select-sm" value={priorityOrder} onChange={(e) => setPriorityOrder(e.target.value)}>
                      <option value="">None</option>
                      <option value="Desc">High to low</option>
                      <option value="Asc">Low to high</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold small text-uppercase text-muted" htmlFor="f-ttc">Sort by time to close</label>
                    <select id="f-ttc" className="form-select form-select-sm" value={timeToCloseOrder} onChange={(e) => setTimeToCloseOrder(e.target.value)}>
                      <option value="">None</option>
                      <option value="Desc">Longest first</option>
                      <option value="Asc">Shortest first</option>
                    </select>
                  </div>

                  <button className="btn btn-sm btn-outline-secondary w-100" onClick={() => handleClear()}>Clear Filters</button>
                </div>
              </div>
            </div>

            <div className="col-md-9">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Leads {!loading && <span className="text-muted fw-normal">({leads.length})</span>}</h5>
                <Link className="btn btn-sm btn-primary" to="/addLead" state={{state: "add"}}>
                  <i className="bi bi-plus-lg me-1"></i>Add New Lead
                </Link>
              </div>

              {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
                  <div className="text-center">
                    <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3 fs-5 text-muted">Fetching...</p>
                  </div>
                </div>
              )}

              {!loading && leads && leads.length > 0 ?
              <div className="row">
                {leads.map(lead => (
                  <div key={lead._id} className="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch">
                    <Link className="text-decoration-none w-100 mt-4" to={`/lead/${lead._id}`}>
                      <div className="card h-100 p-3 option-card">
                        <div className="card-body p-0 text-start">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <h5 className="card-title text-dark mb-0">{lead.name}</h5>
                            <span className={`badge ${statusColor[lead.status]}`}>{lead.status}</span>
                          </div>
                          <p className="text-muted small mb-3">{lead.source}</p>
                          <p className="mb-1 text-dark"><strong>Sales Agent: </strong>{getSalesAgent(`${lead.salesAgent}`)}</p>
                          <p className="mb-1 text-dark"><strong>Priority: </strong><span className={`fw-semibold ${priorityColor[lead.priority]}`}>{lead.priority}</span></p>
                          <p className="mb-0 text-dark"><strong>Time To Close: </strong>{lead.timeToClose} days</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              :
              <div>
                {!loading && (allLeads.length === 0 ?
                <div className="text-center text-muted py-5">
                  <i className="bi bi-people" style={{ fontSize: "2.5rem" }}></i>
                  <h6 className="mt-3 mb-1">No leads yet</h6>
                  <p className="small mb-3">Add your first lead to start tracking your pipeline.</p>
                  <Link className="btn btn-sm btn-primary" to="/addLead" state={{state: "add"}}>Add New Lead</Link>
                </div>
                :
                <div className="text-center text-muted py-5">
                  <i className="bi bi-funnel" style={{ fontSize: "2.5rem" }}></i>
                  <h6 className="mt-3 mb-1">No leads match these filters</h6>
                  <p className="small mb-3">Try a different status or agent.</p>
                  <button className="btn btn-sm btn-outline-secondary" onClick={() => handleClear()}>Clear Filters</button>
                </div>)}
              </div>
              }

            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
}

export default LeadList;