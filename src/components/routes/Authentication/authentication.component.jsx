import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sing-in-form/sing-in-form.component";
import "./authentication.styles.scss";

const Authenticate = () => {
  // useEffect(() => {
  //   const fetchAuth = async () => {
  //     const response = await getRedirectResult(auth);
  //     const updateData = await createUserDocumentFromAuth(response.user);
  //   };
  //   fetchAuth();
  // }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authenticate;
