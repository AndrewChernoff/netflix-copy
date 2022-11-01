import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate  } from "react-router-dom";
import { auth, registerWithEmailAndPassword, logInWithEmailAndPassword} from "../../firebase";



const SignUp = () => {
     const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const register = () => {
        if (!name) alert("Please enter name");
        registerWithEmailAndPassword(name, email, password);
      };
      useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
      }, [user, loading]);

    return <div className="signup">
        <form>
            <h1>Sign in</h1>
            <input placeholder="Name" value={name}
            onChange={(e) => setName(e.target.value)} type="name" required/>
            <input placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} type="email" required/>
            <input placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} type="password" required/>
            <button type="submit" 
            onClick={() => logInWithEmailAndPassword(email, password)}>Sign In</button>
            <h4><span>New to Netflix?</span>
            <span className="signup__link" onClick={register}> Sign Up now. </span></h4>
        </form>

    </div>
}

export default SignUp;