import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      <h1>Hey, {username} </h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  background: pink;
`;
