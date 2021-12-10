const Card = (props) => {
    return (
        <div className="card">
            <div className="card-interno">
                <img src={props.img} alt='icone'/>
                <span>{props.texto}</span>
            </div>
        </div>
    )
}

export default Card;