import Country from './country'
import { useContext, useState } from 'react'
import { CountryContext } from './countryContext'
export default function Homepage(){
  const{Theme,setSearchInput,searchInput,search,filterCountries}=useContext(CountryContext);
  const[showRegions,setShowRegion]=useState(false);
    return (
        <div className="app">
            <div className="searchDiv">
         
          <input className={Theme?"light-search":"search"}  type="text" placeholder=" search for a country" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} onKeyUp={search}></input>
          <div>
            <p className={Theme?'select-region light-select-region':"select-region"} onClick={()=>{setShowRegion(!showRegions)}}>Select region <span>▽</span></p>
          <ul className={ Theme ? (showRegions?"ul show-region light-ul":"light-ul ul") :(showRegions ? "ul show-region" : "ul")}>
            <li className="regions" onClick={()=>{filterCountries("Africa")}}>Africa</li>
            <li className="regions" onClick={()=>{filterCountries("Asia")}}>Asia</li>
            <li className="regions" onClick={()=>{filterCountries("Europe")}}>Europe</li>
            <li className="regions" onClick={()=>{filterCountries("Oceania")}}>Oceania</li> 
           </ul>
          </div>
          </div>
      
       
         <div className="container">
        <Country />
         </div>
           </div>
    )
}