

function Card(props){
    return(
      <div className="card">
          <img className="card-image" src={props.src} alt="" />
        <h3 className="card-heading">{props.heading}</h3>
        <p>{props.paragraph}</p>
      </div>
    )
}
export default Card;