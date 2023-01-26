import "../../styles/globalStyles.css";
import "./styles.css";

import Container from "../Container";

const Header = ({ handlePages, logoBlack, children }) => {
  return (
    <header>
      <Container>
        <img src={logoBlack} alt="Nu Kenzie" />
        <button type="button" onClick={handlePages} className="button-grey">
          Início
        </button>
      </Container>
    </header>
  );
};

export default Header;
