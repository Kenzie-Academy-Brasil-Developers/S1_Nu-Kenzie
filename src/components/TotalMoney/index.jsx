import "../../styles/globalStyles.css";
import "./styles.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <>
      {listTransactions.length > 0 ? (
        <section className="section__balance">
          <div>
            <h3 className="title-3">Valor Total:</h3>
            <span className="title-3 balance">
              R${" "}
              {listTransactions
                .reduce((previousValue, currentValue) => {
                  return previousValue + currentValue.value;
                }, 0)
                .toFixed(2)}
            </span>
          </div>
          <span className="text-2">O valor se refere ao saldo</span>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default TotalMoney;
