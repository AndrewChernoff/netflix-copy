import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate  } from "react-router-dom";
import { auth, registerWithEmailAndPassword, logInWithEmailAndPassword} from "../../firebase";
import "../Login/Login.css";

const SignUp = ({setSignUp, setSignIn}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const register = ({setSignUp, setSignIn}) => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
      };
      useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
      }, [user, loading]);

    return <div className="signin">
        <form>
            <h1>Sign Up</h1>
            <input placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} type="name" required/>
            <input placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" required/>
            <input placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" required/>
            <button type="submit" 
            onClick={register}>Sign Up</button>
            <h4><span>Already have an accaunt?</span>
            <span className="signin__link" onClick={() => {
              setSignUp(false)
              setSignIn(true)
            }}> Sign in now. </span></h4>
        </form>

    </div>
}

export default SignUp;