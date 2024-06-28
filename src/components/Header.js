import headerLogo from "../images/headerlogo.svg";

function Header() {
  return (
    <header class="header">
      <img src={headerLogo} alt="encabezado" class="header__logo" />
      <div class="header__line"></div>
    </header>
  );
}

export default Header;
