import './App.css';
import { useEffect, useState } from 'react';
import CatFactDetail from './Components/catFactDetail';

function App() {
 debugger
  const [facts, setfacts] = useState([])
  const random = Math.floor(Math.random() * 34)

  async function fetchData() { 
    debugger      
    let promise = await getFacts(random)
    const facts1 = await promise.data
    const randomFact = Math.floor(Math.random() * facts1.length)
    setfacts(facts1[randomFact])
  }

  useEffect(() => {fetchData()}, [])
  debugger
  return (
    <div className='container'>
      <div className='title'>
        Amazing facts about cats
      </div>
      <div className='divButton'>
        <button className="button" onClick={() => { fetchData() }}>{'New fact'}</button>
      </div>
      <div className='divFactsParent'>
        <div className='divFacts'>
          <CatFactDetail fact={facts}></CatFactDetail>
        </div>
      </div>
    </div>
  );
}
async function getFacts(props) {  
debugger
  const response = await fetch(`https://catfact.ninja/facts?page=${props}`);
  return await response.json();
}

export default App;
