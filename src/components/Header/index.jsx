import "./styles.css"

const Header = ({handlePages, logoBlack}) => {
    return (
        <header>
            <img src={logoBlack} alt="Nu Kenzie"/>
            <button type="button" onClick={handlePages}>Início</button>
        </header>
    )
}

export default Header