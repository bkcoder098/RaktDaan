export default function DonorCard({ donor }) {
  return (
    <div className="card donor-card h-100">
      <div className="card-body text-center p-4">
        <h5 className="fw-bold mb-1">{donor.name}</h5>

        <span className="badge bg-danger mb-3 px-3 py-2">
          {donor.bloodGroup}
        </span>

        <p className="text-muted mb-2">{donor.city}</p>

        <p className="text-muted small mb-3">{donor.phone}</p>

        <a href={`tel:${donor.phone}`} className="btn btn-success w-100">
          Call Donor
        </a>
      </div>
    </div>
  );
}
