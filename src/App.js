import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {

  const [animals, setAnimals] = useState([]);

  const handleClick = () => setAnimals([...animals, getRandomAnimal()]);

  const renderedAnimals = animals.map((item, i) => <AnimalShow key={i} type={item} />);

  return (
    <div className='app'>
      <h2>Show animal list here!</h2>
      <button type="button" value="Add animal" onClick={handleClick}>Add animal</button>
      <div className='animal-list'>
        {renderedAnimals}
      </div>
    </div>
  );
}

export default App;