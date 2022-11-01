import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = ({setSignUp, setSignIn}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);
  return (
    <div className="signin">
      <form>
      <h1>Sign In</h1>
        <input
          type="email"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            logInWithEmailAndPassword(email, password)
          }}
        >
          Sign In
        </button>
        <h4><span>New to Netflix?</span>
            <span className="signin__link" onClick={() => {
              setSignIn(false)
              setSignUp(true)
            }}> Sign Up now. </span></h4>
          <h4>
            <Link to="reset">Reset password</Link>
          </h4>
      </form>
    </div>
  );
}

export default SignIn;