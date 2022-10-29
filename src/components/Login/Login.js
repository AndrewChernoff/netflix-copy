import logo from "../../utils/imgs/netflix.png";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login__container">
        <header className="login__header">
          <img className="login__logo" src={logo} alt="Netflix logo" />
          <button className="login__btn">Sign in</button>
        </header>
      </div>
      <div className="login__layer"/>

    </div>
  );
};

export default Login;
