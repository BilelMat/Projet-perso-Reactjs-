import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar({ username }) {
  return (
    <NavbarStyled>
      navbar
      <h1>Bonjour {username} </h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: red;
  height: 10vh;
`;
