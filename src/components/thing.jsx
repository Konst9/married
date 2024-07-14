import React from 'react';
import './thing.css'

const Thing = () => {
  return (
    <div className='thing_wrapper'>
      <h3>При себе иметь:</h3>
      <ul>
        <li>Предметы личной гигиены</li>
        <li>Зарядные устройства</li>
        <li>Тапочки (не обязательно)</li>
        <li>Принадлежности для бани и басика</li>
        <li>Хорошее настроение</li>
        <li>Немного здоровья</li>
      </ul>
      <span>P.S. дресс кода нет</span>
    </div>
  );
};

export default Thing;