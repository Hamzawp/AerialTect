import { useState } from "react";
import axios from "axios";
import "./ImageUpload.css";

export default function ImageUpload({ onUploadSuccess }) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "aerialtect");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dnefagmzn/image/upload",
        formData
      );
      console.log("Upload successful", response.data);
      alert("Image uploaded successfully!");

      // Call the function to scroll after successful upload
      onUploadSuccess();
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id="upload-input"
      />
      <label htmlFor="upload-input" className="upload-label">
        {preview ? (
          <img src={preview} alt="Preview" className="upload-preview" />
        ) : (
          <div className="upload-placeholder">📤 Click to upload</div>
        )}
      </label>
      {image && (
        <button
          onClick={handleUpload}
          className="upload-button"
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Image"}
        </button>
      )}
    </div>
  );
}
