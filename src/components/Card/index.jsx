import "./styles.css"

// key={index} transaction={transaction}

const Card = ({transaction}) => {

    const {description, value, type} = transaction

    return (
        <li className={type}>
            <div>
                <h2>{description}</h2>
                <span>{type}</span>
            </div>
            <span>R$ {value.toFixed(2)}</span>
            <button type="button">Deletar</button>
        </li>
    )
}

export default Card