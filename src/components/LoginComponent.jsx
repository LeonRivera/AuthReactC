import { Fragment, useState } from "react";
import './LoginComponent.css';
// import RegisterComponent from "./RegisterComponent";



const LoginComponent = ({handleEvent, handleUser}) => {

    const [passwordRest, setPasswordRest] = useState("");

    const handleInputChange = (e) => {
        if(e.target.name === "email"){
            handleUser.email = e.target.value;
        }
        if(e.target.name === "password"){
            handleUser.password = e.target.value;
        }
       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("actual email:" + handleUser.email);
        console.log("actual contra:" + handleUser.password);
        let urlValidate = 'http://brc2022.somee.com/User1/ValidateUser';
        fetch(urlValidate, {
            method: 'POST',
            body: JSON.stringify({email: handleUser.email, password: handleUser.password}), 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data === "contraseña correcta"){
                handleEvent("home")
            }
        })
    }

    return (
        <Fragment>
            <div className="contenedor">

                <div className="form-content">
                    <h1>LOGIN</h1>
                    <form>
                        <div className="input-wrapper">
                            <input onChange={handleInputChange} name="email" className="input" type="email" placeholder="EMAIL"></input>
                            <svg className="input-icon" width="29" height="23" viewBox="0 0 29 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="29" height="23" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlinkHref="#image0_9_111" transform="translate(0 -0.130435) scale(0.00195312 0.00246264)" />
                                    </pattern>
                                    <image id="image0_9_111" width="512" height="512" xlinkHref="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>

                        <div className="input-wrapper">
                            <input onChange={handleInputChange} name="password" className="input" type="password" placeholder="PASSWORD"></input>
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z" stroke="#0D0D0E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.83333 9.16663V5.83329C5.83333 4.72822 6.27232 3.66842 7.05372 2.88701C7.83512 2.10561 8.89493 1.66663 10 1.66663C11.1051 1.66663 12.1649 2.10561 12.9463 2.88701C13.7277 3.66842 14.1667 4.72822 14.1667 5.83329V9.16663" stroke="#0D0D0E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* <Switch>
                            <Route path="/register">
                                <RegisterComponent></RegisterComponent>
                            </Route>
                        </Switch> */}

                        < a onClick={ e => handleEvent("register") }> 
                             Registro
                        </a>

                      

                        <input type="button" onClick={handleSubmit} value="INGRESAR"></input>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default LoginComponent;

