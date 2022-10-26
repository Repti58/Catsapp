import './App.css';
import { useEffect, useState } from 'react';
import CatFactDetail from './Components/catFactDetail';
import pic from './img/cats-min.png'

function App() {
  const [facts, setfacts] = useState([])
  const random = Math.floor(Math.random() * 34)

  async function fetchData() { 
    let promise = await getFacts(random)
    const facts1 = await promise.data
    const randomFact = Math.floor(Math.random() * facts1.length)
    setfacts(facts1[randomFact])
  }

  useEffect(() => {fetchData()}, [])
  return (
    <div className='container'>
      <div className='image-container'>
        <img  className='image' src={pic} alt='cats'/>
      </div>
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
  const response = await fetch(`https://catfact.ninja/facts?page=${props}`);
  return await response.json();
}

export default App;
