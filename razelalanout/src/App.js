import { useState } from 'react';
import NavBar from './components/NavBar';
import List from './components/List';
import Header from './components/Header';
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
       <div>
      <Header/>
      </div>    
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


