export default function DonorCard({ donor }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">
          {donor.name}
        </h5>

        <h6 className="text-danger fw-bold mb-2">
          {donor.bloodGroup}
        </h6>

        <p className="text-muted mb-3">
          {donor.city}
        </p>

        <p className="text-muted mb-3">
          contact:-  
          {donor.phone}
        </p>

        <a
          href={`tel:${donor.phone}`}
          className="btn btn-success w-100"
        >
          Call Donor
        </a>
      </div>
    </div>
  );
}
