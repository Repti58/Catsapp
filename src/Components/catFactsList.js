import React from "react";



export default function CatFactsList(props) {
    console.info(props)
  return (
      props.facts.map((fact,i) => <button key={i} onClick={() => props.onFactClick(i)}>{'Факт ' + (i + 1)}</button>)
  );  
}
