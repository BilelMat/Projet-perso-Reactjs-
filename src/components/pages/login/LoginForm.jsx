import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

export default function LoginForm() {
  //états
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`order/${inputValue}`);
    setInputValue("");
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  //affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>
      <div className="input-with-icon">
        <BsPersonCircle className="icon" />
        <input
          value={inputValue}
          onChange={handleChange}
          type="text"
          placeholder="Entrez votre prénom"
          required
        />
      </div>
      <button>Accéder à mon espace</button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2.5rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  h1 {
    color: white;
    font-size: 48px;
  }

  hr {
    border: 1.5px solid orangered;
    margin-bottom: 40px;
  }

  h2 {
    color: white;
    font-size: 36px;
    margin: 20px 10px 10px;
  }

  .input-with-icon {
    background-color: white;
    border-radius: 5pxs;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
      font-size: 15px;
      margin-right: 8px;
      color: #93a2b1;
    }

    input {
      border: none;
      font-size: 15px;
      color: #17161a;
    }

    &::placeholder {
      background-color: white;
      color: lightgrey;
    }
  }
`;
