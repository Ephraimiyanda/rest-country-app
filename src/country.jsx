import { Link } from 'react-router-dom';
import useFetch from './countryFetch'
import { useContext ,useEffect} from 'react';
import { CountryContext } from './countryContext';

export default function Country(){
    const {countries,loading}=useFetch(`https://restcountries.com/v3.1/all/ `);
  const{Theme}=useContext(CountryContext);

  if(loading){
    return <div className="loading-div"><div className={Theme?"loading light-loading-div":"loading"}></div><p>Loading country details</p></div>
  }
    return(
    
        <div className='container'>
       {countries.map((country)=>(
        
    <div key={country.name.common} className={Theme? " element light-element":'element '}>
      <Link to={`/AboutCountry/${country.name.common}/`} key={country.alpha3Code}>
      <img className="img" src={country.flags.png} alt="" width="260px"></img>
    <div className="countryDetails">
    <h1 className="countryName">{country.name.common}</h1><br></br>
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