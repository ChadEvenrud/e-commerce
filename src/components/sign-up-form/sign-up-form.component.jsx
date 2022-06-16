import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-up-form.styles.scss";

//Setting an object to create original state values

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

//Sign Up Form main component
const SignUpForm = () => {
  //React hook method that can alter state. Destructured will take a object first and then a method second.
  const [formFields, setFormFields] = useState(defaultFormFields);
  //Destructuring the formFields (user defined variable) from the hook variable
  const { displayName, email, password, confirmPassword } = formFields;
  //setFormFields method from the useState that takes in an object to update the state fields
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  //Event handler function used on the Form Submit event to
  const handleSubmit = async (event) => {
    event.preventDefault();
    if ((!password || !email, !confirmPassword)) {
      alert("Missing email or password");
      return;
    } else if (password !== confirmPassword) {
      alert("password does not match");
      return;
    }
    try {
      //Fetch await to see if a Authentication record is created in Firebase using the email and password
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      //Sends a "Post" to create a new record in the Firebase database using the authentication data.
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert(`This email is already in use`);
      }
      console.log(error);
    }
  };

  //Event handler that updates the state object fields with value data from the input fields
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //Return JSX Component
  return (
    <div className="sing-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up With Your Email And Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
