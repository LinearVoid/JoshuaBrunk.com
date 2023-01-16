
import "./Card.css"
function Card(props){
    return(
        <div className = "Card">
            <a target="_blank" rel="noreferrer" href = {props.url}>
            <h1>{props.name}</h1>
            <img alt = {props.alt} className = "cardPhoto" src = {props.photo}></img>
            <p>{props.phrase}</p>
            </a>
        </div>
    )

}



export default Card;