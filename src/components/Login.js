const Login = () => {
  const handleLogin = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/login`;
  };

  return (
    <div className="container position-relative">
      <div className="row justify-content-center align-items-center min-vh-100">
        <div className="col-11 col-sm-9 col-md-6 col-lg-4">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-body text-center p-5">
              <h1 className="fw-bold mb-1 fst-italic text-danger">Rapport</h1>
              <p className="text-secondary mb-4">
                Customer relationships.<br />Tracked and closed.
              </p>
              <button
                onClick={handleLogin}
                className="btn btn-light border w-100 py-2 rounded-3 shadow-sm"
              >
                Continue with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;