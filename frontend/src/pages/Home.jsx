import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <div className="bg-light py-5">
        <div className="container text-center">
          <h1 className="fw-bold text-danger mb-3">
            BloodConnect
          </h1>

          <p className="lead text-muted mb-4">
            Connecting blood donors with patients in need.
            <br />
            One donation can save up to three lives.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link to="/find" className="btn btn-danger">
              Find Blood
            </Link>

            <Link to="/register" className="btn btn-outline-danger">
              Become a Donor
            </Link>
          </div>
        </div>
      </div>

      {/* INFO SECTION */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold text-danger">
                  Quick Search
                </h5>
                <p className="text-muted">
                  Find blood donors instantly by blood group and location.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold text-danger">
                  Verified Donors
                </h5>
                <p className="text-muted">
                  Registered donors with direct contact access.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="fw-bold text-danger">
                  Admin Control
                </h5>
                <p className="text-muted">
                  Secure admin dashboard to manage donors and requests.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
