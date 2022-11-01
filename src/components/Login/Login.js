import logo from "../../utils/imgs/netflix.png";
import "./Login.css";
import { useState } from 'react';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";


const Login = () => {

  const [isSignIn, setSignIn] = useState(false);
  const [signUp, setSignUp] = useState(false)

  return (
    <div className="login">
      <header className="login__header">
        <img className="login__logo" src={logo} alt="Netflix logo" />
        <button onClick={() => {
          setSignUp(false)
          setSignIn(true)
          }} className="login__btn">Sign in</button>
      </header>
      <div className="login__layer" />

      {isSignIn && !signUp ? <SignIn setSignIn={setSignIn} setSignUp={setSignUp}/>
      :!isSignIn && signUp? <SignUp setSignIn={setSignIn} setSignUp={setSignUp}/>
      :<>
      <div className="login__content">
        <h1 className="login__title">
          Unlimited films, TV programmes and more.
        </h1>
        <h2>Watch anywhere. Cancel at anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <div>
        <form className="login__input">
          <input placeholder="Email address"/>
          <button onClick={() => {
            setSignIn(false)
            setSignUp(true)
            }}>GET STARTED</button>
        </form>
        </div>
      </div>
      </>}

    </div>
  );
};

export default Login;
