import "../../styles/home.css";
import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CharactersInfo } from "./charactersInfo.js";
import { VehiclesInfo } from "./vehiclesInfo.js"
import { PlanetsInfo } from "./planetsInfo.js"

export const Login = () => {

    const { actions } = useContext(Context)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        actions.login(email, password)
    }


    return (

        <form className="form-login mt-5" onSubmit={handleLogin}          >
            <div className="mb-3">
                <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                    type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

            </div>
            <div className="mb-3">
                <label forhtml="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>

            <div className="d-flex justify-content-center">
                <button
                    type="submit" className="btn btn-success btn-lg w-100">Log in

                </button>
            </div>
        </form>

    )
}