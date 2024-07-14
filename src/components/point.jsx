import React from 'react';
import './point.css';

const Point = () => {
  return (
    <div className='point_wrapper'>
      <h3>Как добраться</h3>
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
        <span>или по этой ссылке:</span>
        <ul>
          <li>
            <a
              href="https://yandex.ru/navi/?whatshere%5Bzoom%5D=18&whatshere%5Bpoint%5D=29.510322%2C59.718952&lang=ru&from=navi">место
              проведения праздника</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Point;
