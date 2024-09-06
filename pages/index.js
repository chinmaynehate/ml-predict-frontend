// pages/index.js
import React, { useState } from 'react';
import axios from 'axios';
import InputForm from '../components/InputForm';

export default function Home() {
  const [prediction, setPrediction] = useState(null);

  const handlePredict = async (inputData) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/predict`, inputData);
      setPrediction(response.data.prediction);
    } catch (error) {
      console.error("Error making prediction request:", error);
      alert("Failed to fetch prediction. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Predict App</h1>
      <InputForm onPredict={handlePredict} />
      {prediction !== null && <h2>Prediction: {prediction}</h2>}
    </div>
  );
}
