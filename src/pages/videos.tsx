import * as React from "react"
import {useEffect} from "react"
import { Link } from "gatsby"
import "./Videostyle.css"

const VideoPage = () => { 
    useEffect (() =>{
    
    },[])

    return (
        <>  
            <header>
                <button><Link to="/">Go Back</Link></button>
                <h1>Juho Puurunen Portfolio</h1>
            </header>
            <h1>I'm the video page brother!</h1>
        </>
    )
}

export default VideoPage
