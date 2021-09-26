import './Header.css';

function Header({showModal}) {
    return (
        <header className="header">
            <button
                type="button"
                className="header__register-btn"
                onClick={() => showModal()}
            >Register</button>
        </header>
    );
}

export default Header;