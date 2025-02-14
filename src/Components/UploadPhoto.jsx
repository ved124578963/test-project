const UploadPhoto = ({ onCapture }) => {
  const handleCapture = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      onCapture(file); // Pass captured image to parent component
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label className="bg-green-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-green-700">
        Capture Photo
        <input 
          type="file" 
          accept="image/*" 
          capture="environment" // Ensures the camera opens
          className="hidden" 
          onChange={handleCapture} 
        />
      </label>
    </div>
  );
};

export default UploadPhoto;
