import { Fragment, useState } from "react";
import CodigoComponent from "./CodigoComponent";
import HomeComponent from "./HomeComponent";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";

const UserCompontent = (props) => {

    const [componente, setComponente] = useState("");

    

    const [user, setUser] = useState({
        email: "",
        password: "",
        telefono: ""
    })

    console.log("objeto en userComponent.mail: " + user.email);


    if(componente === "") return <HomeComponent></HomeComponent>;
    // if(componente === "") return <LoginComponent handleEvent={setComponente}></LoginComponent>;

    if(componente === "register") return <RegisterComponent handleEvent={setComponente}
    handleUser={user}></RegisterComponent>
    // (componente === "register")    return <RegisterComponent handleEvent={setComponente}></RegisterComponent>

    if(componente === "codigo") return <CodigoComponent handleUser={user} handleEvent={setComponente}></CodigoComponent>


}

export default UserCompontent;