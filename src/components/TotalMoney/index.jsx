import "./styles.css"

const TotalMoney = ({listTransactions}) => {
    return (
        <>
            {listTransactions.length > 0 ? 
            (<section>
                <div>
                    <h3>Valor Total:</h3>   
                    <span>R$ {listTransactions.reduce((previousValue, currentValue) => {
                        return previousValue + currentValue.value
                    },0).toFixed(2)}</span>
                </div>
                <span>O valor se refere ao saldo</span>
            </section>) : ("")}
        </>
    )
}

export default TotalMoney