import "../../styles/home.css";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();


    const handleLogin = async () => {

        const logged = await actions.login(email, password)
        if (logged) {
            navigate("/home"); // Redirige al home si el inicio de sesión es exitoso
        } else {
            // Aquí podrías manejar errores, por ejemplo, mostrando un mensaje al usuario
            alert("Login failed. Please check your credentials.");
        }
    }


    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="w-50">
                <div className="w-75 mx-auto">
                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputEmail1" className="form-label text-white">Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            onClick={handleLogin}
                            type="button"  // Cambié a type="button" para evitar el comportamiento de submit
                            className="btn btn-success btn-lg mt-3"
                        >
                            Log in
                        </button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Link to="/registro">
                            <button className="btn btn-success btn-lg my-3">Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};