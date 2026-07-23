import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({search, setSearch}) => {

  const navigate = useNavigate();
  const [localSearch, setLocalSearch] = useState(search);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/")
  }

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
        setSearch(localSearch);
    }, 500)
    return () => clearTimeout(debounceSearch)
  }, [localSearch, setLocalSearch])

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-danger fst-italic fw-bold" to="/home">
            <i className="bi bi-people-fill me-2"></i>Rapport
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ps-2 ps-lg-0">

              <li className="nav-item">
                <NavLink className="nav-link" to="/leadList">
                  <i className="bi bi-person-lines-fill me-1"></i>Leads
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/salesAgentList">
                  <i className="bi bi-people me-1"></i>Agents
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/reports">
                  <i className="bi bi-bar-chart me-1"></i>Reports
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/settings">
                  <i className="bi bi-gear me-1"></i>Settings
                </NavLink>
              </li>

            </ul>
            <div className="d-flex mt-2 mt-lg-0 justify-content-end">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search By Lead Name"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
              />
              <button
                className="btn btn-outline-danger"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;