import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light mt-5 pt-4 pb-3">
      <div className="container">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-6 mb-3">
            <h5 className="text-danger fw-bold">BloodConnect</h5>
            <p className="small">
              A college-level blood donation platform connecting donors
              with those in need. Built with ❤️ for humanity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link className="text-light text-decoration-none" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none" to="/find">
                  Find Blood
                </Link>
              </li>
              <li>
                <Link className="text-light text-decoration-none" to="/register">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact / Info */}
          <div className="col-md-3 mb-3">
            <h6 className="fw-bold">Contact</h6>
            <p className="small mb-1">📍 College Hackathon Project</p>
            <p className="small mb-0">📧 bloodconnect@gmail.com</p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small">
          © {new Date().getFullYear()} BloodConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
