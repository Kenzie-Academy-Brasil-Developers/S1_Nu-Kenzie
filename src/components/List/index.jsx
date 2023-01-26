import "../../styles/globalStyles.css";
import "./styles.css";
import Card from "../Card";
import cardEmpty from "../../assets/images/NoCard.svg";

const List = ({ listTransactions, setListTransactions }) => {
  return (
    <>
      <h3 className="title-3 resume__title">Resumo financeiro</h3>
      {listTransactions.length > 0 ? (
        <ul>
          {listTransactions.map((transaction) => (
            <Card
              key={transaction.id}
              transaction={transaction}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          ))}
        </ul>
      ) : (
        <>
          <h3 className="title-2 noCards__warning">
            Você ainda não possui nenhum lançamento
          </h3>
          <ul>
            <li>
              <img src={cardEmpty} alt="" />
            </li>
            <li>
              <img src={cardEmpty} alt="" />
            </li>
            <li>
              <img src={cardEmpty} alt="" />
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default List;
