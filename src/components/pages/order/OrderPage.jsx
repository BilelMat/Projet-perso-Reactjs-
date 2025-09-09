import { Link, useParams } from "react-router-dom";

export default function OrderPage() {
  //etat
  const { inputValue } = useParams();
  //comportement
  //affichage
  return (
    <div>
      <h1>Bonjour {inputValue} </h1>
      <br />
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
    </div>
  );
}
