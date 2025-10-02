import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

export default function OrderPage() {
  //etat
  const { username } = useParams();

  //comportement
  //affichage
  return (
    <OrderPageStyled>
      <div className="container">
        <h1>Bonjour {username} </h1>
        <br />
        <Link to="/">
          <button>Déconnexion</button>
        </Link>
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: yellow;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: green;
    height: 95vh;
    width: 1400px;
  }
`;
