import styled from "styled-components";

export default function TextInput({ value, onChange, Icon, ...extraProps }) {
  return (
    <InputStyled>
      {Icon && Icon}
      {/* S'il ya une icone ALORS je mets une icone */}
      <input value={value} onChange={onChange} type="text" {...extraProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
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
`;
