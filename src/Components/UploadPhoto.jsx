import { useState } from "react";

const UploadPhoto = () => {
  const [image, setImage] = useState(null);

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

      {/* Capture Photo Button (Opens Phone Camera) */}
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
    </div>
  );
};

export default UploadPhoto;
