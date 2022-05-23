import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";


export default function CatFactDetail(props) {
    return (
        <div>            
            {props.fact.fact}
        </div>
    )
    }