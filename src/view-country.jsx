import { useParams } from "react-router-dom";
import useFetch from "./countryFetch";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CountryContext } from "./countryContext";

export default function ViewCountry() {
  const { name } = useParams();
  const {Theme}=useContext(CountryContext)
  const { countries,loading } = useFetch(`https://restcountries.com/v3.1/name/${name}`);
  const [borderNames, setBorderNames] = useState([]);
 

  useEffect(() => {
    setBorderNames([]);
    if (countries[0] && countries[0].borders) {
      countries[0].borders.forEach((border) => {
       fetch(`https://restcountries.com/v3.1/alpha/${border}`)
       .then(data=>{
        return data.json() 
       })
          .then((borderData) => {
            setBorderNames((prevNames) => [...prevNames, ...borderData]);
          })
          .catch((error) => console.log(error));
      });
    }
  }, [countries]);
if(loading){
  return <div className="loading-div"><div className={Theme?"loading light-loading-div":"loading"}></div><p>Loading country details</p></div>
}



  return (
    <div className="viewCountry">
      {countries[0] && (
        <div key={countries[0].numericCode}>
          <div className="backdiv">
            <div className={Theme?"back light-back-btn":"back-btn"}>
              <button className={Theme?"back light-back":"back"}><span>←</span><Link to="/">Back</Link></button>
            </div>
          </div>

          <div className="country-description">
            <img className="flag" src={countries[0].flags.png} alt=""></img>
            <div className="details">
              <div className="about-country">
                <h1 className="countryName">{countries[0].name.common}</h1>
                <br></br>
                <div className="description">
                  <span>Native Name:</span>
                  <p className="nativeName">{countries[0].name.common}</p>
                </div>
                <div className="description">
                  <span>Population:</span>
                  <p className="population">{countries[0].population}</p>
                </div>
                <div className="description">
                  <span> Region: </span>
                  <p className="region">{countries[0].region}</p>
                </div>
                <div className="description">
                  <span>Sub Region: </span>
                  <p className="Sub region">{countries[0].subregion}</p>
                </div>
                <div className="description">
                  <span> Capital:</span>
                  <p className="capital">
                    {countries[0].capital ? countries[0].capital : "No capital available"}
                  </p>
                </div>
              
            </div>
            <div>
              <div className="secondary-description">
                <div className="description">
                  <span> Top Level Domain:</span>
                  <p className="topLevelDomain">{countries[0].tld[0]}</p>
                </div>
                <div className="description">
                  <span> Languages:</span>
                  <p className="languages">
                    {countries[0].languages
                      ? Object.keys(countries[0].languages).map((code) =>  countries[0].languages[code]).join(", ")
                      : "No languages available"}
                  </p>
                </div>
                <div className="description">
                  <span> Currencies:</span>
                  <p className="languages">
                    {countries[0].currencies
                     ? Object.keys(countries[0].currencies).map((code) =>  countries[0].currencies[code].name).join(", ")
                     : "No currencies available"}
                  </p>
                </div>
              </div> 
            </div>
          </div>
          </div>
          <div className="border-countries">
            <span>Border countries:</span>
            <div className="theBorders">
            {
           countries[0].borders? borderNames && borderNames.map((border,index)=><Link key={index} to={`/AboutCountry/${border.name.common}/`} ><button key={index}  className={Theme?"border-c1 light-border-c1":"border-c1"}>{border.name.common}</button></Link>):<p className="languages">No border countries available </p>
             }
              </div> 
        </div>
      </div>
          )}                
</div>
  )
}
