import Country from './country'
import { useContext, useState } from 'react'
import { CountryContext } from './countryContext'
export default function Homepage(){
  const{Theme,setSearchInput,searchInput,search}=useContext(CountryContext);
  const[showRegions,setShowRegion]=useState(false);
    return (
        <div className="app">
            <div className="searchDiv">
         
          <input className={Theme?"light-search":"search"}  type="text" placeholder=" search for a country" value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}} onKeyUp={search}></input>
          <div className='regions'>
            <p className='select-region' onClick={()=>{setShowRegion(!showRegions)}}>Select region <span>▽</span></p>
          <ul className={showRegions?"ul show-region":"ul " }>
            <li className="regions">Africa</li>
            <li className="regions">Americas</li>
            <li className="regions">Asia</li>
            <li className="regions">Europe</li>
            <li className="regions">Oceania</li>
           </ul>
          </div>
          </div>
      
       
         <div className="container">
        <Country />
         </div>
           </div>
    )
}