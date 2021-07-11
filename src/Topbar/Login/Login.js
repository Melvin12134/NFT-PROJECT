import './Login.css';
import {useState} from 'react';


export const Login = (props) => {


const [isLogin, setIsLogin] = useState(1);

const ToggleTab = (index) => {
    setIsLogin(index);
    console.log(isLogin);
}

    return (props.trigger) ? (
            <div className="logcontainer">
                <div className="h1container">
                    <h1 onClick={() => ToggleTab(1)} id={isLogin === 1 ? "active" : ""}>Login</h1>
                    <h1 onClick={() => ToggleTab(2)} id={isLogin === 2 ? "active" : ""}>Sign Up</h1> 
                </div>
              {isLogin === 1 ? 
                <div className="logincontainer">
                  <h1>Welcome Back!</h1>
                    <input placeholder="Username"></input>
                    <input placeholder="Password"></input>
                    <button className="submitbtn">Submit</button>
                </div>
              :              
                <div className="signupcontainer">
                  <h1>Join The Community!</h1>
                    <input placeholder="Username"></input>
                    <input placeholder="Email"></input>
                    <input placeholder="Password"></input>
                    <input placeholder="Repeat Password"></input>
                    <button className="submitbtn">Create Account</button>
                </div>}
            </div>

    ) : "";
}