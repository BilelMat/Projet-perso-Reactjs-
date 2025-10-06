import { Link } from "react-router-dom";
import styled from "styled-components";
import Profile from "./Profile";

export default function NavbarRightSide({ username }) {
  return (
    <NavbarRightSideStyled>
      {/* <div className="admin-button">admin</div> */}
      <Profile username={username} />
      <div className="profile-logo"></div>
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */
`;
