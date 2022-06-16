import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInEmailPassword,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import "./sign-in-form.styles.scss";

const defaultFormsFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  //----Component State-----//
  const [formFields, setFormFields] = useState(defaultFormsFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();
    await createUserDocumentFromAuth(user);
  };

  //----- Event Handlers -----//

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInEmailPassword(email, password);
      console.log(user);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        alert("Wrong Username or Password");
      } else if (error.code === "auth/user-not-found") {
        alert("No user found");
      } else {
        alert(error.code);
      }
    }
  };

  return (
    <div className="sing-up-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
