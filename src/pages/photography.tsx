import * as React from "react"
import {useEffect} from "react"
import { Link } from "gatsby"
import "./photostyle.css"
import backArrow from "../images/backArrow.png"

const PhotoPage = () => { 
    useEffect (() =>{
    
    },[])

    return (
        <>  
            <header>
                <h1>Juho Puurunen Portfolio</h1>
            </header>
            <Link to="/">
                    <div className="backSpace">
                        <img className="backArrow" src={backArrow} alt="backArrow"/>
                        <p className="back">BACK</p>
                    </div>
                </Link>
            <h1>I'm the Photopage brother!</h1>
        </>
    )
}

export default PhotoPage