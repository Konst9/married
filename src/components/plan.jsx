import React from 'react';
import './plan.css'

const Plan = () => {
  return (
    <div className='plan_wrapper'>
      <h3>План мероприятия</h3>
      <span>День 1 - 26/07/24</span>
      <div className='time_wrapper'>
        <ul>
          <li>19:00 Сбор гостей</li>
          <li>20:00 Прожарка блюд</li>
          <li>21:00 Все к столу</li>
          <li>22:00 Уже становится весело</li>
          <li>00:00 Караоке и вечеринка в разгаре</li>
        </ul>
      </div>
      <span>День 2 - 27/07/24</span>
      <div className='time_wrapper'>
        <ul>
          <li>12:00 Подъем</li>
          <li>12:30 Прием таблеток</li>
          <li>13:00 Легкий завтрак</li>
          <li>14:00 Свободное время</li>
          <li>15:00 Банные процедуры</li>
          <li>17:00 Ужин</li>
          <li>...продолжение следует</li>
        </ul>
      </div>
      <span>День 3 - 28/07/24</span>
      <div className='time_wrapper'>
        <ul>
          <li>10:00 Подъем</li>
          <li>11:00 Прием таблеток</li>
          <li>11:30 Легкий завтрак</li>
          <li>12:00 Сборы</li>
          <li>13:00 Конец вечеринки</li>
          <li>...продолжения не будет (наверное)</li>
        </ul>
      </div>
    </div>
  );
};

export default Plan;