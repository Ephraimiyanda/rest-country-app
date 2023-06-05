<<<<<<< HEAD
import { useContext } from "react"
import { CountryContext } from "./countryContext"
import sun from "../images/icon-sun.svg"
import moon from "../images/icon-moon.svg"
export default function Navbar(){
  const{handleThemeSwitch,Theme}=useContext(CountryContext)
    return(
        <div className="nav">
             <header className={Theme? "  light-header":''}><div>Where in the world?</div> <div className="mode"><span onClick={handleThemeSwitch}><img src={Theme?moon:sun} alt="" /> {Theme?"Dark mode":"Light mode"}</span></div></header>
        </div>
    )
=======
import { useContext } from "react"
import { CountryContext } from "./countryContext"
import sun from "../images/icon-sun.svg"
import moon from "../images/icon-moon.svg"
export default function Navbar(){
  const{handleThemeSwitch,Theme}=useContext(CountryContext)
    return(
        <div className="nav">
             <header className={Theme? "  light-header":''}><div>Where in the world?</div> <div className="mode"><span onClick={handleThemeSwitch}><img src={Theme?moon:sun} alt="" /> {Theme?"Darkmode":"Light mode"}</span></div></header>
        </div>
    )
>>>>>>> e85b46239d38648df7293fcb804617bb37c40ea9
}