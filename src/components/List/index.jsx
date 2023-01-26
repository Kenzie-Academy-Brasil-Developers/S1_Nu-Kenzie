import "./styles.css"
import Card from "../Card"

const List = ({listTransactions, setListTransactions}) => {

    return (
        <>
            <h3>Resumo financeiro</h3>
            {listTransactions ?
                (<ul>
                    {listTransactions.map((transaction,index) => <Card key={transaction.id} transaction={transaction} listTransactions={listTransactions} setListTransactions={setListTransactions}/>)}
                </ul>) 
                : 
                (<ul>
                    <li>Você ainda não possui nenhum lançamento</li>
                </ul>)}
        </>
    )
}

export default List