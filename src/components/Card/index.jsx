import "../../styles/globalStyles.css";
import "./styles.css";

import { FaTrash } from "react-icons/fa";

const Card = ({ transaction, listTransactions, setListTransactions }) => {
  const { description, value, type } = transaction;

  const deleteCard = (uuid) => {
    setListTransactions(
      listTransactions.filter((transaction) => transaction.id !== uuid)
    );
  };

  return (
    <li className={type}>
      <div>
        <h2 className="title-3">{description}</h2>
        <span className="text-2">
          {type[0].toUpperCase() + type.substring(1, type.length)}
        </span>
      </div>
      <div>
        <span className="text-2">R$ {value.toFixed(2)}</span>
        <button
          type="button"
          onClick={() => deleteCard(transaction.id)}
          className="button-grey-icon"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

export default Card;
