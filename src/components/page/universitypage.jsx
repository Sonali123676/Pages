import React from "react";
import FileUpload from "../files/FileUploader";
import "./page.css";
import img1 from "./images/img1.jpg";
const UniversityPage = () => {
  return (
    <div>
      <div className="description ">
        <div className="description-image">
          <img src={img1} alt="Image 1" />
        </div>
        <div className="description-content">
          <h2>Welcome to Transcript Manager</h2>
          <p>
            Utilize the power of ECDSA to digitally sign and securely upload
            transcripts onto the blockchain.
          </p>
          <div className="feature-box white-glassmorphism p-3 m-2">
            <div className="flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">
                Securely upload and store student transcripts on the blockchain
              </span>
            </div>
          </div>
          <div className="white-glassmorphism p-3 m-2">
            <div className="flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">
                Digital signature technology for tamper-proof records
              </span>
            </div>
          </div>
          <div className="white-glassmorphism p-3 m-2">
            <div className="flex flex-row items-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="ml-2">
                Prevent fraud and maintain data integrity
              </span>
            </div>
          </div>
          {/* Add more feature boxes */}
        </div>
      </div>
      <FileUpload /> {/* Include the updated FileUpload component here */}
      <div className="action-buttons">
        <button className="action-button">SIGN FILES</button>
        <button className="action-button">DOWNLOAD CSV</button>
        <button className="action-button">BLOCKCHAIN</button>
      </div>
    </div>
  );
};

export default UniversityPage;
