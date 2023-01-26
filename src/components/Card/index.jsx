import "./styles.css"
import { FaTrash } from "react-icons/fa"

const Card = ({transaction, listTransactions, setListTransactions}) => {

    const {description, value, type} = transaction

    const deleteCard = (uuid) => {
        setListTransactions(listTransactions.filter(transaction => transaction.id !== uuid))
    }

    return (
        <li className={type}>
            <div>
                <h2>{description}</h2>
                <span>{type}</span>
            </div>
            <span>R$ {value.toFixed(2)}</span>
            <button type="button" onClick={() => deleteCard(transaction.id)}>
                <FaTrash />
            </button>
        </li>
    )
}

export default Card