import React, { useContext } from "react";
import styled from "styled-components";
import Context from "./Context";

const StyledField = styled.input`
  background-color: rgb(240, 240, 240);
  border-radius: 10px;
  padding: 15px;
  border-style: none;
  font-size: 1rem;
  margin-left: 10px;
`;

const Form = () => {
  const { name, setName } = useContext(Context);

  return (
    <div>
      <form>
        <label>Your Name:</label>
        <StyledField
          onChange={event => setName(event.target.value)}
          placeholder={name}
        />
      </form>
    </div>
  );
};

export default Form;
