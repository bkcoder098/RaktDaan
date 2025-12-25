
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {

  const name = localStorage.getItem("name");

  const navigate = useNavigate();

  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setRole(localStorage.getItem("role"));
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setToken(null);
    setRole(null);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          BloodConnect
        </Link>

        <div className="collapse navbar-collapse show">
          <ul className="navbar-nav ms-auto align-items-center gap-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/find">Find Blood</Link>
            </li>

            {token && (
              <li className="nav-item">
                <Link className="nav-link" to="/register">Donate</Link>
              </li>
            )}

            {/* ADMIN ONLY */}
            {token && role === "admin" && (
              <li className="nav-item">
                <Link className="btn btn-dark btn-sm" to="/admin">
                  Admin
                </Link>
              </li>
            )}

            {/* 👇 WHEN USER IS NOT LOGGED IN */}
            {!token && (
              <>
                <li className="nav-item">
                  <Link className="btn btn-outline-light btn-sm" to="/login">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="btn btn-light btn-sm text-danger" to="/signup">
                    Signup
                  </Link>
                </li>
              </>
            )}


            {token && (
  <li className="nav-item">
    <span className="text-light small">
       Hi, <strong>{name}</strong> 👋
    </span>
  </li>
)}

            {/* 👇 WHEN USER IS LOGGED IN */}
            {token && (
              <li className="nav-item">
                <button
                  className="btn btn-light btn-sm text-danger"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
