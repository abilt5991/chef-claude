import ReactMarkdown from 'react-markdown'
// import ReactDOM from "react-dom"
export default function Recipe(props){
    return(
        <ReactMarkdown>{props.recipe}</ReactMarkdown>
    )
}