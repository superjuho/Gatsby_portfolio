import * as React from "react"
import {useEffect} from "react"
import { Link } from "gatsby"
import "./valhalladenied.css"
import backArrow from "../images/backArrow.png"


const ValhallaDenied = () => { 
    useEffect (() =>{
    },[])

    return (
        <>  
            
            <div className="suberbGame">
                <Link to="/">
                    <div className="backSpace">
                        <img className="backArrow" src={backArrow} alt="backArrow"/>
                        <p className="back">BACK</p>
                    </div>
                </Link>
                <object className="valhallaDenied" 
                type="text/html" data="https://users.metropolia.fi/~juhopuur/valhalla/" width="100%" height="100%" style={{overflow: "hidden"}}>

                </object>
            </div>
        </>
    )
}

export default ValhallaDenied