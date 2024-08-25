
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Registro = () => {

    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');

    const navigate = useNavigate();

    const handleRegistrer = async (e) => {
        e.preventDefault()
        const createUser = await actions.createUser(email, password, name, lastname)
        if (createUser) {
            navigate("/home"); // Redirige a la pagina student si el inicio de sesión es exitoso
        } else {
            alert("Login failed. Please check your credentials.");

        }
    }


    return (


        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="w-50">
                <form onSubmit={handleRegistrer} className="w-75 mx-auto">
                    <div className="form-group mt-4">
                        <label className="form-label text-white" htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label className="form-label text-white" htmlFor="password">Password:</label>
                        <input
                            className="form-control"
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label className="form-label text-white" htmlFor="name">Name:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label className="form-label text-white" htmlFor="lastname">Lastname:</label>
                        <input
                            className="form-control"
                            type="text"
                            id="lastname"
                            value={lastname}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success btn-lg my-4" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};