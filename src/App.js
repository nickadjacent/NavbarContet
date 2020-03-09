import React, { useContext, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Context from "./Components/Context";

const Navbar = () => {
  const { name } = useContext(Context);

  return <div className="navbar">Hi, {name}!</div>;
};

const FormWrapper = () => {
  return (
    <div className="form">
      <Form />
    </div>
  );
};

const Wrapper = () => {
  return (
    <div>
      <Navbar />
      <FormWrapper />
    </div>
  );
};

const App = () => {
  const [name, setName] = useState("Bob Smith");

  return (
    <Context.Provider value={{ name, setName }}>
      <Wrapper></Wrapper>
    </Context.Provider>
  );
};

export default App;
