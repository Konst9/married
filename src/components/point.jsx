import React from 'react';
import './point.css';

const Point = () => {
  return (
    <div className='point_wrapper'>
      <h1>Как добраться</h1>
      <div className="adress">
        <span>Вводите в Яндекс навигаторе адрес:</span>
        <ul>
          <li>КП Лопухинская, Мыза, 83, Заостровье, Ленинградская обл.</li>
        </ul>
        <span>или координаты:</span>
        <ul>
          <li>59.719219</li>
          <li>29.509321</li>
        </ul>
      </div>
    </div>
  );
};

export default Point;
