import SignInForm from "../../components/sign-in-form/sign-in-form-component";
import SignUpForm from "../../components/sign-up-form/sign-up-form-component";
import { signInWithGooglePopup,createUserDocumentFromAuth} from "../../utilities/firebase/firebase.utils";

import "./authentication.styles.scss"

const logSignInUser = async () => {
    const response = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(response.user);
    console.log(response)
}

const Authentication = () => {
  return (
    <div className="authentication-container">
        <SignInForm/>
        <SignUpForm/>
    </div>
    
  )
}


export default Authentication;