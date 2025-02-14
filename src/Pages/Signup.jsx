import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    country: "",
    state: "",
    district: "",
    taluka: "",
    village: "",
    pincode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("User Data:", formData); // Just logs the data for now
    navigate("/login"); // Redirect to login page after signup
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>

        <form onSubmit={handleSignup}>
          {Object.keys(formData).map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1")}</label>
              <input
                type={field === "password" ? "password" : field === "dateOfBirth" ? "date" : "text"}
                name={field}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
                placeholder={`Enter ${field.replace(/([A-Z])/g, " $1")}`}
                value={formData[field]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <button onClick={() => navigate("/login")} className="text-blue-500 hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
