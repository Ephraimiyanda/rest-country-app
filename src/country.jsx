import { Link } from 'react-router-dom';
import useFetch from './countryFetch'
import { useContext } from 'react';
import { CountryContext } from './countryContext';

export default function Country(){
    const {countries}=useFetch(`http://localhost:3000/country`);
  const{Theme}=useContext(CountryContext);
    return(
    
        <div className='container'>
       {countries.map((country)=>(
        
    <div key={country.id} className={Theme? " element light-element":'element '}>
      <Link to={`/AboutCountry/${country.id}/`}>
      <img className="img" src={country.flags.png} alt="" width="260px"></img>
    <div className="countryDetails">
    <h1 className="countryName">{country.name}</h1><br></br>
    <div className="description"> <span>population:</span> <p className="population">{country.population}</p></div>
    <div className="description"><span> region: </span><p className="region">{country.region}</p></div>
    <div className="description"><span> capital:</span> <p className="capital">{country.capital ? country.capital : "No capital available"}</p></div>
  </div>
  </Link>
 </div>

))}  

        </div>
    
  
     )
}