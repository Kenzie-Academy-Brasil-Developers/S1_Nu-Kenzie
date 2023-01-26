import { useState } from "react";

import "./App.css";
import "./styles/globalStyles.css";
import "./styles/reset.css";

import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";
import Header from "./components/Header";
import Container from "./components/Container";

import { v4 as uuid } from "uuid";

import illustation from "./assets/images/Illustration.svg";
import logoWhite from "./assets/images/Nu Kenzie text white.svg";
import logoBlack from "./assets/images/Nu Kenzie text black.svg";

const App = () => {
  const [listTransactions, setListTransactions] = useState([
    {
      id: uuid(),
      description: "Salário recebido",
      type: "entrada",
      value: 2500,
    },
    { id: uuid(), description: "Conta de luz", type: "despesa", value: -150 },
  ]);

  const [page, setPage] = useState("");

  const handlePages = () => {
    page === "" ? setPage("Dashboard") : setPage("");
  };

  return (
    <>
      {page === "Dashboard" ? (
        <>
          <Header handlePages={handlePages} logoBlack={logoBlack} />
          <div className="dashboard__container">
            <aside>
              <Form
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
              <TotalMoney listTransactions={listTransactions} />
            </aside>
            <main className="main__dashboard">
              <List
                listTransactions={listTransactions}
                setListTransactions={setListTransactions}
              />
            </main>
          </div>
        </>
      ) : (
        <main className="main__home">
          <Container>
            <section className="home__sectionLeft">
              <img src={logoWhite} alt="Nu Kenzie Logo" />
              <h1 className="title-1">
                Centralize o controle das suas finanças
              </h1>
              <span className="text-1">de forma rápida e segura</span>
              <button
                type="button"
                onClick={handlePages}
                className="button-pink"
              >
                Iniciar
              </button>
            </section>
            <section className="home__sectionRight">
              <img src={illustation} alt="Ilustração da Aplicação" />
            </section>
          </Container>
        </main>
      )}
    </>
  );
};

export default App;
