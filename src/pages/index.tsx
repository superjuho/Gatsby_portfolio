import * as React from "react"
import {useEffect} from "react"
import { Link } from "gatsby"
import "./styles.css"
import { gsap, SteppedEase } from "../../node_modules/gsap/index.js"
import TextPlugin from 'gsap/TextPlugin'
import Linkedin from "../images/Linkedin.png"
import GitHub from "../images/githubLogo.png"
import codeLogo from "../images/codeLogo.png"
import Creativecloud from "../images/Creativecloud.png"
import CsharpLogo from "../images/CsharpLogo.png"
import CSSLogo from "../images/CSSlogo.png"
import HTML5Logo from "../images/HTML5Logo.png"
import javascriptLogo from "../images/javascripL.png"
import GSAPLogo from "../images/GSAPLogo.png"
import NodeCGLogo from "../images/NodeCGLogo.png"
import NodejsLogo from "../images/NodejsLogo.png"
import reactLogo from "../images/reactLogo.png"
import SassLogo from "../images/SassLogo.png"
import TypeScritLogo from "../images/TypeScritLogo.png"
import SQL_Logo from "../images/SQL_Logo.png"
import UnityLogo from "../images/UnityLogo.png"
import UnRealLogo from "../images/UnrealLogo.png"
import IllustratorLogo from "../images/IllustratorLogo.png"
import AdobePremiereLogo from "../images/AdobePremiereLogo.png"
import AdobeXDLogo from "../images/AdobeXDLogo.png"
import AfterEffectsLogo from "../images/AfterEffectsLogo.png"
import PhotoshopLogo from "../images/PhotoshopLogo.png"


gsap.registerPlugin(TextPlugin)


let CodeShown: boolean = false
let AdobeShown: boolean = false

const tl = gsap.timeline()



const getAge = (dateString) => {
  const today = new Date()
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear()
  const m = today.getMonth() - birthDate.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
  }
  return age
}

const viewSize = window.matchMedia("(max-width: 1024px)")
const profileText = `I am a ${getAge("1993/08/31")} years old Media Technology engineering student at Metropolia University of Applied Sciences.
\n
My interests are games, video productions, photography, web design, programming in general and arts & cooking.
I plan to graduate in June 2022, and hopefully get a job that exploits my hobbies. 
\n
This is my portfolio; hope you enjoy your stay.`

const aboutDropDown = () => {
  if(viewSize.matches) {
    const aboutDrop = document.querySelector(".aboutDrop")
    tl.from([aboutDrop], 1, {height: 0, opacity: 0 })
    tl.to([aboutDrop], 1, {height: "300px", opacity: 1 })
  }
}

const aboutDropUp = () => {
  if(viewSize.matches) {
    const aboutDrop = document.querySelector(".aboutDrop")
    tl.from([aboutDrop], 1, {height: "300px", opacity: 1 })
    tl.to([aboutDrop], 1, {height: 0, opacity: 0 })
  }
}

const codesShow = () => {
  if(!CodeShown && !viewSize.matches) {
    CodeShown = true
    const codes = document.querySelector(".codes")
    tl.to([codes], 1, {width: "70%"})
  } else if (!CodeShown && viewSize.matches) {
    CodeShown = true
    const codes = document.querySelector(".codes")
    const adobes = document.querySelector(".adobes")
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 0})
    tl.to([adobes], .5, {left: "200px"})
    tl.to([codes], 1, {height: "70%", width: "50%"})
  }
}

const hideCodes = () => {
  if(CodeShown && !viewSize.matches) {
    CodeShown = false
    const codes = document.querySelector(".codes")
    tl.to([codes], 1, {width: "70px"})
  } else if (CodeShown && viewSize.matches) {
    CodeShown = false
    const codes = document.querySelector(".codes")
    const adobes = document.querySelector(".adobes")
    tl.to([codes], 1, {height: "70px", width: "70px"})
    tl.to([adobes], .5, {left: "100px"})
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 1})
  }
}

const adobeShow = () => {
  if(!AdobeShown && !viewSize.matches) {
    AdobeShown = true
    const adobes = document.querySelector(".adobes")
    tl.to([adobes], 1, {width: "50%"})
  } else if(!AdobeShown && viewSize.matches) {
    AdobeShown = true
    const adobes = document.querySelector(".adobes")
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 0})
    tl.to([adobes], 1, {height: "50%"})
  }
} 

const hideAdobe = () => {
  if(AdobeShown && !viewSize.matches) {
    AdobeShown = false
    const adobes = document.querySelector(".adobes")
    tl.to([adobes], 1, {width: "100px"})
  } else if(AdobeShown && viewSize.matches) {
    AdobeShown = false
    const adobes = document.querySelector(".adobes")
    tl.to([adobes], 1, {height: "70px"})
    const profileElement = document.querySelector(".profile")
    const aboutElement = document.querySelector(".sideDiv") 
    tl.to([profileElement, aboutElement], 1, {opacity: 1})
  }
}

const profile = () => {
  const cursor = document.getElementById('cursor');
  gsap.fromTo([cursor], {autoAlpha: 0, x:-10}, {autoAlpha: 1, duration: 1, repeat: -1, ease: SteppedEase.config(12)});
  gsap.to("#text", {text: profileText, duration: 8, delay: 2, ease: "none"})
}


const IndexPage = () => {
  useEffect (() =>{
    profile()
  },[])

  return (
    <>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&display=swap')
    </style>
    <title>Juho Puurunen</title>
    <header>
          <h2 className="title">Juho Puurunen Portfolio</h2>
    </header>
    <div className="profile">
      <span id="text">
      </span>
      <span id="cursor">|</span>
      
      <br/>
    </div>
        <div className="sideDiv">
          <h3 className="about" onMouseEnter={() => aboutDropDown()} onMouseLeave={() => aboutDropUp()}>About</h3>
          <div className="aboutDrop">
            <a className="text">Curriculum Vitae</a>
            <p className="text">juho.puurune@gmail.com</p>
            <p className="text">juho.puurunen@metropolia.fi</p>
            <p className="text">0400 771526</p>
            <a href="https://www.linkedin.com/in/juho-puurunen-133648194/">
              <img className="LinkedinLogo" src={Linkedin} alt="Linkedin"/>
            </a>
            <br/>
            <a href="http://www.github.com/superjuho">
            <img className="GithubLogo" src={GitHub} alt="Github"/>
            </a>
          </div>
        </div>
        <div className="codes" onMouseEnter={() => codesShow()} onMouseLeave={() => hideCodes()}>
            <img className="codeLogo" src={codeLogo} alt="CodeLogo"/>
            <img className="logo" src={SassLogo} alt="CSSLogo"/>
            <img className="logo" src={CSSLogo} alt="CSSLogo"/>
            <img className="logo" src={HTML5Logo} alt="HTML5Logo"/>
            <img className="logo" src={javascriptLogo} alt="javascriptLogo"/>
            <img className="logo" src={TypeScritLogo} alt="TypeScriptLogo"/>
            <img className="logo" src={reactLogo} alt="RactLogo"/>
            <img className="logo" src={SQL_Logo} alt="SQL_Logo"/>
            <img className="logo" src={NodeCGLogo} alt="NodeCGLogo"/>
            <img className="logo" src={NodejsLogo} alt="NodejsLogo"/>
            <img className="logo" src={GSAPLogo} alt="GSAPLogo"/>
            <Link to="/valhalladenied">
              <img className="logo" src={CsharpLogo} alt="GSAPLogo"/>
            </Link>
            <Link to="/valhalladenied">
              <img className="logo" src={UnityLogo} alt="UnityLogo"/>
            </Link>
            <img className="logo" src={UnRealLogo} alt="UnRealLogo"/>
        </div>
          <div className="adobes" onMouseEnter={() => adobeShow()} onMouseLeave={() => hideAdobe()}>
            <img className="CreativeCloudLogo" src={Creativecloud} alt="CreativeCloudLogo"/>
            <Link to="/photography">
              <img className="adobelogo" src={PhotoshopLogo} alt="PhotoshopLogo"/>
            </Link>
            <img className="adobelogo" src={IllustratorLogo} alt="IlluLogo"/>
            <img className="adobelogo" src={AdobeXDLogo} alt="XDLogo"/>
            <Link to="/videos">
              <img className="adobelogo" src={AdobePremiereLogo} alt="PremiereLogo"/>
            </Link>
            <img className="adobelogo" src={AfterEffectsLogo} alt="AfterEffectsLogo"/>
          </div>
    </>
    
  )
}


export default IndexPage
