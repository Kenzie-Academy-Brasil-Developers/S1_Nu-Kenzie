import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Header from "./components/Header";
import { v4 as uuid } from 'uuid'

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    { id: uuid(), description: "Salário recebido", type: "entrada", value: 2500 },
    { id: uuid(), description: "Conta de luz", type: "saída", value: -150 },
  ]);

  return (
    <>
      <Header />
      <aside>
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        {/* <TotalMoney listTransactions={listTransactions} /> */}
      </aside>
      <main>
        <List listTransactions={listTransactions} />
      </main>
    </>
  );
}

export default App;
