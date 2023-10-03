
import NavBar from './NavBar';
import List from './List';
import './App.css';


function App() {
    const epices = ['cumin', 'paprika', 'curcuma', 'poivre'];

  return(
    <>            
      <NavBar title="Le vrai gout des choses et rien de plus!"/>
  
      <div className="container">
      <List
          title="Epices"
          items={epices[2]}
      />
      </div>
      
    </>
  )
}

export default App;
