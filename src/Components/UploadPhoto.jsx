import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const UploadPhoto = ({ imageSrc }) => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
  });

  // Capture Photo & Get Location
  const capturePhoto = () => {
    if (!webcamRef.current) return;
    
    setLoading(true);
    
    // Capture image
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);

    // Get Geolocation with Accuracy
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy,
          });
          setLoading(false);
        },
        (error) => {
          console.error("Error getting location: ", error.message);
          setLoading(false);
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    } else {
      console.error("Geolocation not supported by this browser.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold mb-2">Capture Photo & Get Location</h2>

      {/* Camera View */}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        className="w-64 h-48 rounded-lg border-2 border-gray-300"
      />

      <button 
        onClick={capturePhoto}
        className="mt-3 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Capture Photo 📷
      </button>

      {/* Show Captured Image & Location */}
      {image && (
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold">Captured Image:</h3>
          <img src={image} alt="Captured" className="w-64 h-48 rounded-lg border-2 border-gray-300 mt-2" />
          
          <h3 className="text-lg font-semibold mt-3">Location:</h3>
          <p>🌍 Latitude: {location.latitude}</p>
          <p>📍 Longitude: {location.longitude}</p>
          <p>🎯 Accuracy: ±{location.accuracy} meters</p>
        </div>
      )}
    </div>
  );
};

export default UploadPhoto;
