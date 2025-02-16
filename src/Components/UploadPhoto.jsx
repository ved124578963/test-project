import { useState } from "react";

const UploadPhoto = () => {
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  // Handle Image Capture & Get Location
  const handleImageCapture = async (event) => {
    const file = event.target.files[0]; // Get image file
    if (file) {
      setImage(URL.createObjectURL(file)); // Show image preview

      // Get User's GPS Location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting location:", error);
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Capture Photo & Location</h2>

      {/* Capture Photo Button (Opens Phone Camera) */}
      <label className="cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Capture Photo 📷
        <input
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleImageCapture}
        />
      </label>

      {/* Show Captured Image & Location */}
      {image && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Captured Image:</h3>
          <img src={image} alt="Captured" className="w-64 h-48 rounded-lg border-2 border-gray-300 mt-2" />
          
          <h3 className="text-lg font-semibold mt-3">Location:</h3>
          {location.latitude && location.longitude ? (
            <>
              <p>🌍 Latitude: {location.latitude}</p>
              <p>📍 Longitude: {location.longitude}</p>
            </>
          ) : (
            <p className="text-red-500">Location not available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;
