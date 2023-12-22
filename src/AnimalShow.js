import { useState } from 'react';
import './AnimalShow.css';
import bird  from './svg/bird.svg';
import cat   from './svg/cat.svg';
import cow   from './svg/cow.svg';
import dog   from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

const svgMap = { bird, cat, cow, dog, gator, horse };

function AnimalShow({ type }) {

  const [clicks, setClicks] = useState(1);

  const handleClick = () => setClicks(clicks === 5 ? 0 : clicks + 1);

  return (
    <div onClick={handleClick} className={'animal-container'}>
      <img src={svgMap[type]} className='animal-img' />
      <img src={heart} alt='heart' className='heart' style={{ width: 15 * `${clicks === 0 ? 0.5 : clicks}` + '%' }} />
    </div>
  );
}

export default AnimalShow;