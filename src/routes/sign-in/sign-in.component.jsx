import { signInWithGooglePopup } from "../../utilities/firebase.utils";


const logSignInUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response)
}

const SignIn = () => {
  return (
    <div>
        <h1>sign in</h1>
        <button onClick={logSignInUser}>Sign in button</button>
    </div>
    
  )
}


export default SignIn;