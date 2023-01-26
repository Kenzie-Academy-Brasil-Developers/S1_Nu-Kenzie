import "./styles.css"
import Card from "../Card"

const List = ({listTransactions}) => {

    return (
        <>
            {listTransactions ?
                (<ul>
                    {listTransactions.map((transaction,index) => <Card key={transaction.id} transaction={transaction}/>)}
                </ul>) 
                : 
                (<ul>
                    <li>Você ainda não possui nenhum lançamento</li>
                </ul>)}
        </>
    )
}

export default List