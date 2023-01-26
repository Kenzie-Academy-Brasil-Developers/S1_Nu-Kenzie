import Container from "../Container"
import "./styles.css"

const Header = ({handlePages, logoBlack, children}) => {
    return (
        <header>
            <Container>
                <img src={logoBlack} alt="Nu Kenzie"/>
                <button type="button" onClick={handlePages}>Início</button>
            </Container>
        </header>
    )
}

export default Header