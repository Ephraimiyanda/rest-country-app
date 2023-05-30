import { useContext } from "react"
import { CountryContext } from "./countryContext"

export default function Navbar(){
  const{handleThemeSwitch,Theme}=useContext(CountryContext)
    return(
        <div className="nav">
             <header className={Theme? "  light-header":''}><div>where in the world?</div> <div className="mode"><span onClick={handleThemeSwitch}> light mode</span></div></header>
        </div>
    )
}