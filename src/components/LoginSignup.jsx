import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";



function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Temporarily redirect to the dashboard without credentials
    navigate('/dashboard');
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="leftSide">
          <h1>Your personal productivity companion.</h1>
          <img src="./src/assets/TM_bg.png" alt="picture" />
        </div>
        <div className="rightSide">
          {isLogin ? (
            <>
              <h1>Login</h1>
              <form onSubmit={handleLoginSubmit}>
                <label>
                  Email
                  <input type="email" name="email" />
                </label>
                <label>
                  Password
                  <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
              </form>
              <div className="or-separator">
                <span>or</span>
              </div>
              <button className="google-signin-button">Sign in with Google</button>
              <button className="github-signin-button">Sign in with GitHub</button>
              <p>
                Dont have an account? <button onClick={toggleForm} className="toggle-button">Sign Up</button>
              </p>
            </>
          ) : (
            <>
              <h1>Sign Up</h1>
              <form>
                <label>
                  Full Name
                  <input type="text" name="fullName" />
                </label>
                <label>
                  Email
                  <input type="email" name="email" />
                </label>
                <label>
                  Password
                  <input type="password" name="password" />
                </label>
                <label>
                  Confirm Password
                  <input type="password" name="confirmPassword" />
                </label>
                <input type="submit" value="Sign Up" />
                
              </form>
              <div className="or-separator">
                <span>or</span>
              </div>
              <button className="google-signin-button">Sign in with Google</button>
              <button className="github-signin-button">Sign in with GitHub</button>
              <p>
                Already have an account? <button onClick={toggleForm} className="toggle-button">Login</button>
              </p>
            </>
          )}
        </div>
      </div>
     
    </>
  );
}

export default LoginSignup;
