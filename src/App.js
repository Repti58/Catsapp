import logo from './logo.svg';
import './App.css';
import CatFactsList from './Components/catFactsList';
import { useEffect, useState } from 'react';
import CatFactDetail from './Components/catFactDetail';


function App() {
  const [facts, setfacts] = useState([])
  const [currentFact, setCurrentFact] = useState({})
  useEffect(() => {
    async function fetchData() {
      const facts1 = (await getFacts()).data;
      setfacts(facts1);


    }

    fetchData()
  }, [])
  console.info(facts);
 
  return (
    <div className='container'>
      <div class='title'>
        Amazing Facts About Cats
      </div>
      <div class='divButton'>
        {/* <button class="button" onClick={(factIndex) => setCurrentFact(facts[Math.floor(Math.random() * facts.length)])}>{'FACT '}</button> */}
        <CatFactsList facts={facts} onFactClick={(factIndex)=> setCurrentFact(facts[factIndex])}></CatFactsList>
        {/* {console.log(currentFact)} */}

      </div>
      <div class='divFactsParent'>
        <div class='divFacts'>
          <CatFactDetail fact={currentFact}></CatFactDetail>
        </div>
      </div>
    </div>
  );
}
function getFacts() {
  return fetch('https://catfact.ninja/facts')
    .then((response) => {
      return response.json();
    })
  }
  getFacts()
  
  
  
  
  
  
  
  
  
  
  
  
  
//     // .then((data) => {
//   //   console.log(data);
//   // });





//   //   .then((response) => {
//   //     return response.json();
//   //   })

// }
export default App;
