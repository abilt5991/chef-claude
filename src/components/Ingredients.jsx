
import React from "react"
export default function Ingredients(props){
    const allIngredients = props.allData.map((ing) => <li key={ing}>{ing}</li>)

    return (
        <div>
                    <ul> {allIngredients} </ul>
                    {props.length > 4 ? <div ref={props.ref}>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                        <button onClick={props.handleClick}>Get a recipe</button>
                    </div>
                    :
                    null}
            </div>
    )
}
