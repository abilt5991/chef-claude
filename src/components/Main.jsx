
// import data from '../data'

import React from "react"
import Ingredients from "./Ingredients"
import Recipe from "./Recipe"
import {getRecipeFromMistral} from "../ai"

export default function Main(){
    const [data, setData] = React.useState(["Salt", "Pepper", "Butter", "Milk", "Onions"])
    const [showRecipe, setShowRecipe] = React.useState(false)
    const [recipe, setRecipe] = React.useState("Here is the recipe")
    const recipeSection = React.useRef(null)
    
    async function getRecipe(){
        const resp = await getRecipeFromMistral(data)
        setRecipe(resp)
    }

    React.useEffect(() => {
        recipeSection.current.scrollIntoView({behavior: "smooth"})
    }, [recipe])

    function justfunc(formData){
        let new_ingredient = formData.get("ingrdient")
        setData(oldData => [...oldData,new_ingredient])
    }

    return (
        <main>
            <form className="ingrdient-form" action={justfunc} name="ingredientForm">
                <input name="ingrdient" aria-label="ingredient" aria-placeholder="e.g Sugar" placeholder="e.g Sugar" type="text"></input>
                <button> Add Ingredient</button>
            </form>
           { 
            data.length > 0 && <Ingredients ref={recipeSection} allData={data} length={data.length} handleClick={getRecipe}/>
           } 
           {
            recipe ? <Recipe recipe={recipe}/> : null
           }
        </main>
    )
}