import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
const styles = {
    facts: {
        margin: 100,
        width: 600,
    }
}
export default function CatFactDetail(props) {
    return (
        <div style={styles.facts}>
            <h1>
                {props.fact.fact}
            </h1>
        </div>
    )
    }