import { useState } from 'react';
import NavBar from './NavBar';
import List from './List';
import './App.css';


function MyButton () {
   const  [count, setCount] = useState(0);

   function handleClick() {
      setCount(count + 1);
   }

  return (
    <button onClick={handleClick}>
      Clicked {count} times

    </button>
  )
};

export default function App() {
    const epices = ['cumin', 'paprika', 'curcuma', 'poivre'];

  return(
    <>            
      <NavBar title="Le vrai gout des choses et rien de plus!"/>
      
  
      <div className="container">
      <List
          title="Epices"
          items={epices[2]}
      />
      
    <div>
      <h1>Add to cart</h1>
      <MyButton/>
    </div>
    
      </div>
      
    </>
      )
}


