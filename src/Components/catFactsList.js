import React from "react";



// export default function CatFactsList(props) {
//     console.info(props)
//   return (
//       props.facts.map((fact,i) => <button class="button" key={i} onClick={() => props.onFactClick(i)}>{'FACT ' + (i + 1)}</button>)
//   );  
// }


const RandomFact = (props) => {

  return <button onClick={props.onFactClick(Math.random() * props.facts.length)}>{'Fact'}</button>

}
export default RandomFact;