import "../../styles/home.css";
import React, { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { CharactersInfo } from "./charactersInfo.js";
import { VehiclesInfo } from "./vehiclesInfo.js"
import { PlanetsInfo } from "./planetsInfo.js"

export const Login = () => {


    return (

        <form className="form-login mt-5">
            <div className="mb-3">
                <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

            </div>
            <div className="mb-3">
                <label forhtml="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" forhtml="exampleCheck1">Check me out</label>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/home"> <button type="submit" className="btn btn-success btn-lg w-100">Log in

                </button></Link>
            </div>
        </form>

    )
}