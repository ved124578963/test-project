import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // Check if user is logged in
  const user = JSON.parse(localStorage.getItem("user"));

  // Handle Image Selection
  const handleImageCapture = (event) => {
    const file = event.target.files[0]; // Get selected image file
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Capture Photo</h2>

      {/* Show message & login button if user is not authenticated */}
      {!user ? (
        <div className="text-center p-4">
          <p className="text-red-500">You must be logged in to upload a photo.</p>
          <button 
            onClick={() => navigate("/login")} 
            className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      ) : (
        <>
          {/* Capture Photo Button (Visible Only to Authenticated Users) */}
          <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Capture Photo 📷
            <input
              type="file"
              accept="image/*"
              capture="environment"  // Opens back camera by default
              className="hidden"
              onChange={handleImageCapture}
            />
          </label>

          {/* Show Captured Image Preview */}
          {image && (
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">Captured Image:</h3>
              <img src={image} alt="Captured" className="w-64 h-48 rounded-lg border-2 border-gray-300 mt-2" />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UploadPhoto;
