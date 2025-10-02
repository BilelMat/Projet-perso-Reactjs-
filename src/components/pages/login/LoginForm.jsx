import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import PrimaryButton from "../../reusable-ui/PrimaryButton";
import { theme } from "../../../theme";

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
      <div>
        <h1>Bienvenue chez nous !</h1>
        <hr />
        <h2>Connectez-vous</h2>
      </div>

      <div>
        <TextInput
          value={inputValue}
          onChange={handleChange}
          placeholder={"Entrez votre prénom"}
          required
          Icon={<BsPersonCircle className="icon" />}
        />

        <PrimaryButton
          label={"Accéder à mon espace"}
          Icon={<IoChevronForward className="icon" />}
        />
      </div>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  font-family: "Amatic SC", cursive;

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  hr {
    border: 1.5px solid ${theme.colors.loginline};
    margin-bottom: ${theme.gridUnit * 5}px;
  }

  h2 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P4};
    margin: 20px 10px 10px;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P0};
    margin-left: 10px;
  }
`;
