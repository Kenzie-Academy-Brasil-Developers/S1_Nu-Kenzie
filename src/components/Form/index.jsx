import "./styles.css"
import { useState } from "react"

const Form = ({listTransactions, setListTransactions}) => {

    const [transaction, setTransaction] = useState({})

    return (
        <form>
            <label htmlFor="description">Descrição</label>
            <input type="text" id="description" placeholder="Digite aqui sua descrição" onChange={(event) => setTransaction(event.target.value)}/>
            <span>Ex: Compra de roupas</span>
            <label htmlFor="price">Valor</label>
            <input type="text" id="price" placeholder="1" />
            <span>R$</span>
            <label htmlFor="type">Tipo de valor</label>
            <select name="type" id="type">
                <option value="income">Entrada</option>
                <option value="expense">Despesa</option>
            </select>
            <button onClick={(event) => {
                event.preventDefault()
                setListTransactions([...listTransactions, transaction])
            }}>Inserir valor</button>
        </form>
    )
}

export default Form