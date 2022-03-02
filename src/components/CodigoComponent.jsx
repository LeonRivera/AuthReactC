import React, { Fragment, useState } from "react";
import './LoginComponent.css';
// import RegisterComponent from "./RegisterComponent";

const CodigoComponent = ({ handleUser, handleEvent }) => {

    const [codigoRest, setCodigoRest] = useState("");

    const [codigoInput, setCodigoInput] = useState("");


    const handleInputChange = (e) => {
        if (e.target.name === "codigo") {
            setCodigoInput(e.target.value);
            console.log(codigoInput);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (codigoRest === codigoInput) {
            console.log("correctos");
            let urlValidate = 'http://brc2022.somee.com/api/User1';
            fetch(urlValidate, {
                method: 'POST',
                body: JSON.stringify({ email: handleUser.email, password: handleUser.password, telefono: handleUser.telefono }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data === "contraseña correcta") {
                        handleEvent("home")
                    }
                })
            handleEvent("");
        } else {
            console.log("incorrectos");
        }
    }


    React.useEffect(() => {



        console.log("user en Codigo component: " +
            handleUser.email + handleUser.password +
            handleUser.telefono);

        var formData = new FormData();

        formData.append("email", handleUser.email);
        formData.append("password", handleUser.password);
        formData.append("telefono", "52" + handleUser.telefono);





        let urlValidate = 'http://brc2022.somee.com/User1/ValidateUser';
        let urlSms = 'http://brc2022.somee.com/Mensaje/SendCode';
        let urlP = "http://brc2022.somee.com/api/User1"
        let urlT = 'http://localhost:60566/api/User1';

        fetch(urlSms, {
            method: 'POST',
            body: JSON.stringify({ email: handleUser.email, telefono: "+52" + handleUser.telefono }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCodigoRest(data.toString());
            })
    }, []);

    return (
        <Fragment>
            <div className="contenedor">

                <div className="form-content">
                    <h1>INGRESE EL CODIGO</h1>
                    <form>

                        <div className="input-wrapper">
                            <input onChange={handleInputChange} name="codigo" className="input" type="password" placeholder="CODIGO"></input>
                            <svg className="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8333 9.16663H4.16667C3.24619 9.16663 2.5 9.91282 2.5 10.8333V16.6666C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6666V10.8333C17.5 9.91282 16.7538 9.16663 15.8333 9.16663Z" stroke="#0D0D0E" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.83333 9.16663V5.83329C5.83333 4.72822 6.27232 3.66842 7.05372 2.88701C7.83512 2.10561 8.89493 1.66663 10 1.66663C11.1051 1.66663 12.1649 2.10561 12.9463 2.88701C13.7277 3.66842 14.1667 4.72822 14.1667 5.83329V9.16663" stroke="#0D0D0E" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>


                        <input onClick={handleSubmit} type="button" value="VERIFICAR"></input>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default CodigoComponent;

