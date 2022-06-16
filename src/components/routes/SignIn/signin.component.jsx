import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

import SignUpForm from "../../sign-up-form/sign-up-form.component";
import Button from "../../button/button.component";

const SignIn = () => {
  // useEffect(() => {
  //   const fetchAuth = async () => {
  //     const response = await getRedirectResult(auth);
  //     const updateData = await createUserDocumentFromAuth(response.user);
  //   };
  //   fetchAuth();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <div>This is the signin page</div>
      <Button onClick={logGoogleUser} buttonType="google">
        Log In Using Google Account
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
