import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <div>This is the signin page</div>
      <button onClick={logGoogleUser}>Log In Using Google Account</button>
    </div>
  );
};

export default SignIn;
