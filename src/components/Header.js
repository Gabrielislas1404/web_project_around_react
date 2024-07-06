import headerLogo from '../images/headerlogo.svg';

function Header() {
  return (
    <header className="header">
      <img src={headerLogo} alt="encabezado" className="header__logo" />
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
