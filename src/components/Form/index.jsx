import "./styles.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ listTransactions, setListTransactions }) => {
  // const [transaction, setTransaction] = useState({})
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("income");

  const handleSumbit = (event) => {
    event.preventDefault();
    setListTransactions([
      ...listTransactions,
      { id: uuid(), description, value, type },
    ]);
    console.log(listTransactions);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label htmlFor="description">Descrição</label>
      <input
        type="text"
        id="description"
        placeholder="Digite aqui sua descrição"
        onChange={(event) => setDescription(event.target.value)}
      />
      <span>Ex: Compra de roupas</span>

      <label htmlFor="value">Valor</label>
      <input
        type="text"
        id="value"
        placeholder="1"
        onChange={(event) => setValue(Number(event.target.value))}
      />
      <span>R$</span>

      <label htmlFor="type">Tipo de valor</label>
      <select
        name="type"
        id="type"
        onChange={(event) => setType(event.target.value)}
      >
        <option value="Entrada">Entrada</option>
        <option value="Saída">Despesa</option>
      </select>

      <button
        type="submit"
        onClick={(event) => {
          //   event.preventDefault();
          // setListTransactions([...listTransactions, transaction])
        }}
      >
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
