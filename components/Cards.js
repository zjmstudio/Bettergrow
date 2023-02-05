import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Landscaping Supplies</h1>
      <div classNam='cards__container'>
          <div className='cards__wrapper'>
           

            <ul className='cards__items'>
                
                <CardItem 
                src='images/playground-mulch.jpg'
                text='Pine Bark Playground Mulch'
                path='/'
                />

                <CardItem 
                src='images/16mm-pine-bark-horticultural.jpg'
                text='16mm Pine Bark Horticultural'
                path='/'
                />

                <CardItem 
                src='images/25mm-pine-bark.jpg'
                text='25mm Pine Bark'
                path='/'
                />

            </ul>

      </div>
    </div>
  </div>
  );
}

export default Cards
