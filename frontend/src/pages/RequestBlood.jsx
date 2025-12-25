import { useState } from "react";
import API from "../services/api";

export default function RequestBlood() {
  const [form, setForm] = useState({
    patientName: "",
    bloodGroup: "",
    hospital: "",
    city: "",
    contactNumber: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/requests", form);
    alert("Blood request submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Blood</h2>

      <input name="patientName" placeholder="Patient Name" onChange={handleChange} required />
      <input name="hospital" placeholder="Hospital" onChange={handleChange} required />
      <input name="city" placeholder="City" onChange={handleChange} required />
      <input name="contactNumber" placeholder="Contact Number" onChange={handleChange} required />

      <select name="bloodGroup" onChange={handleChange} required>
        <option value="">Select Blood Group</option>
        <option>O+</option><option>A+</option><option>B+</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
