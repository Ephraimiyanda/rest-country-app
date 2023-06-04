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
}