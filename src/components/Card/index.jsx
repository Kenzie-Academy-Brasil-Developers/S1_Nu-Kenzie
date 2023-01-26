import "./styles.css"
import { FaTrash } from "react-icons/fa"

// key={index} transaction={transaction}

const Card = ({transaction}) => {

    const {description, value, type} = transaction

    return (
        <li className={type}>
            <div>
                <h2>{description}</h2>
                <span>{type}</span>
            </div>
            <span>R$ {value}</span>
            <button type="button">
                <FaTrash />
            </button>
        </li>
    )
}

export default Card