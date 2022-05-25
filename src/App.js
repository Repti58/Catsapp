import './App.css';
import CatFactsList from './Components/catFactsList';
import { useEffect, useState } from 'react';
import CatFactDetail from './Components/catFactDetail';
import RandomFact from './Components/catFactsList';


function App() {
  const [facts, setfacts] = useState([])
  const [currentFact, setCurrentFact] = useState({})
  // debugger;
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
      <div className='title'>
        Amazing Facts About Cats
      </div>
      <div className='divButton'>
      <CatFactsList facts={facts} onFactClick={(factIndex)=> setCurrentFact(facts[factIndex])}></CatFactsList>
        {/* <button className="button" onClick={(factIndex) => setCurrentFact(facts[Math.floor(Math.random() * facts.length)])}>{'New fact'}</button> */}
        
        {/* {console.log(currentFact)} */}

      </div>
      <div className='divFactsParent'>
        <div className='divFacts'>
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














//     // .then((data) => {
//   //   console.log(data);
//   // });





//   //   .then((response) => {
//   //     return response.json();
//   //   })

// }
export default App;
