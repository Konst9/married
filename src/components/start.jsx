import React from 'react';
import './start.css';
import startImg from '../img/start_img.jpg';

const Start = () => {
  return (
    <div className="start_wrapper">
      <img src={startImg} alt="Background" className="background_image"/>
      <div className="text_start">
        <h3>26-28 июля 2024</h3>
      </div>
      <div className="text_overlay">
        <h3>Добро пожаловать к нам на мероприятие</h3>
        <p>Путешествие начинается уже сейчас</p>
      </div>
    </div>
  );
};

export default Start;
