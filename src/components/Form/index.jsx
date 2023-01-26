import "../../styles/globalStyles.css";
import "./styles.css";

import { useState } from "react";
import { v4 as uuid } from "uuid";

const Form = ({ listTransactions, setListTransactions }) => {
  // const [transaction, setTransaction] = useState({})
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("entrada");

  const handleSumbit = (event) => {
    event.preventDefault();
    setListTransactions([
      ...listTransactions,
      { id: uuid(), description, value, type },
    ]);
  };

  const handleSignValue = () => {
    if (type === "entrada") {
      if (Math.sign(value) === -1) {
        setValue(value * -1);
      } else {
        setValue(value);
      }
    } else {
      if (Math.sign(value) === 1) {
        setValue(value * -1);
      } else {
        setValue(value);
      }
    }

    // setValue(
    //   type === "entrada" ?
    //   (value)
    //   :
    //   (value*(-1))
    //   )
  };

  return (
    <form onSubmit={handleSumbit}>
      <div>
        <label htmlFor="description" className="text-2">
          Descrição
        </label>
        <input
          type="text"
          id="description"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
          className="text-1"
        />
        <span className="text-2">Ex: Compra de roupas</span>
      </div>
      <div>
        <div>
          <label htmlFor="value" className="text-2">
            Valor
          </label>
          <input
            type="text"
            id="value"
            placeholder="1"
            onChange={(event) => setValue(Number(event.target.value))}
            className="text-1"
          />
          <span>R$</span>
        </div>
        <div>
          <label htmlFor="type" className="text-2">
            Tipo de valor
          </label>
          <select
            name="type"
            id="type"
            onChange={(event) => setType(event.target.value)}
            className="text-2"
          >
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        onClick={(event) => {
          handleSignValue();
          //   event.preventDefault();
          // setListTransactions([...listTransactions, transaction])
        }}
        className="button-pink"
      >
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
