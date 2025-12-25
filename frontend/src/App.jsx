import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RegisterDonor from "./pages/RegisterDonor";
import FindBlood from "./pages/FindBlood";
import RequestBlood from "./pages/RequestBlood";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import Signup from "./pages/Signup";
import AuthRedirect from "./components/AuthRedirect";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterDonor />} />
        <Route path="/find" element={<FindBlood />} />
        <Route path="/request" element={<RequestBlood />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route
  path="/login"
  element={
    <AuthRedirect>
      <Login />
    </AuthRedirect>
  }
/>

<Route
  path="/signup"
  element={
    <AuthRedirect>
      <Signup />
    </AuthRedirect>
  }
/>

      </Routes>
      <Footer />
    </BrowserRouter>

 
  );
}



