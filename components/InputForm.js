// components/InputForm.js
import React, { useState } from 'react';
import styles from '../styles/InputForm.module.css';

const InputForm = ({ onPredict }) => {
  const [feature1, setFeature1] = useState('');
  const [feature2, setFeature2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feature1 || !feature2) {
      alert("Please fill in all fields.");
      return;
    }
    onPredict({ feature1: parseFloat(feature1), feature2: parseFloat(feature2) });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="number"
        placeholder="Feature 1"
        value={feature1}
        onChange={(e) => setFeature1(e.target.value)}
        required
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Feature 2"
        value={feature2}
        onChange={(e) => setFeature2(e.target.value)}
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Predict</button>
    </form>
  );
};

export default InputForm;
