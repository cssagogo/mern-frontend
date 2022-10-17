import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_EMAIL, VALIDATOR_MIN } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import "./Auth.css";

const Auth = () => {
  const [formState, inputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <Card className="authentication">
      <h2 className="authentication__header">Login Required</h2>
      <hr />
      <form className="auth-form" onSubmit={authSubmitHandler}>
        <Input
          id="email"
          element="input"
          label="Email"
          type="text"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          label="Password"
          type="password"
          validators={[VALIDATOR_MIN(7)]}
          errorText="Please enter a valid password. Minimum 7 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          Log In
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
