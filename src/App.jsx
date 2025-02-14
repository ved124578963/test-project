import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";  // Footer import
import Home from "./pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./Pages/Adminusers";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">  {/* Full height wrapper */}
        <Navbar />  {/* Navbar at the top */}
        
        <main className="flex-grow">  {/* Takes up remaining space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />  
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/adminlogin" element={<AdminLogin />} /> 
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/adminusers" element={<AdminUsers />} />
          </Routes>
        </main>

        <Footer />  {/* Footer stays at the bottom */}
      </div>
    </Router>
  );
}

export default App;
