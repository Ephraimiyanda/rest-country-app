import { useParams } from "react-router-dom";
import useFetch from "./countryFetch";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CountryContext } from "./countryContext";

export default function ViewCountry() {
  const { id } = useParams();
  const { countries } = useFetch(`http://localhost:3000/country/`+id);
  const [borderNames, setBorderNames] = useState([]);
  const {Theme}=useContext(CountryContext)
  useEffect(() => {
    setBorderNames([]);
    if ( countries.borders && countries.borders.length > 0) {
      countries.borders.forEach((border) => {
       fetch(`http://localhost:3000/country?alpha3Code=${border}`)
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

  const handleLinkClick = () => {
    setBorderNames([]); 
  };

  return (
    <div className="viewCountry">
      {countries && (
        <div key={countries.numericCode}>
          <div className="backdiv">
            <div className={Theme?"back light-back-btn":"back-btn"}>
              <button className={Theme?"back light-back":"back"}><span>←</span><Link to="/">Back</Link></button>
            </div>
          </div>

          <div className="country-description">
            <img className="flag" src={countries.flag} alt=""></img>
            <div className="details">
              <div className="about-country">
                <h1 className="countryName">{countries.name}</h1>
                <br></br>
                <div className="description">
                  <span>Native Name:</span>
                  <p className="nativeName">{countries.nativeName}</p>
                </div>
                <div className="description">
                  <span>Population:</span>
                  <p className="population">{countries.population}</p>
                </div>
                <div className="description">
                  <span> Region: </span>
                  <p className="region">{countries.region}</p>
                </div>
                <div className="description">
                  <span>Sub Region: </span>
                  <p className="Sub region">{countries.subregion}</p>
                </div>
                <div className="description">
                  <span> Capital:</span>
                  <p className="capital">
                    {countries.capital ? countries.capital : "No capital available"}
                  </p>
                </div>
              
            </div>
            <div>
              <div className="secondary-description">
                <div className="description">
                  <span> Top Level Domain:</span>
                  <p className="topLevelDomain">{countries.topLevelDomain}</p>
                </div>
                <div className="description">
                  <span> Languages:</span>
                  <p className="languages">
                    {countries.languages
                      ? countries.languages.map((language) => language.name).join(", ")
                      : "No languages available"}
                  </p>
                </div>
                <div className="description">
                  <span> Currencies:</span>
                  <p className="languages">
                    {countries.currencies
                      ? countries.currencies.map((currency) => currency.name).join(", ")
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
           countries.borders? borderNames && borderNames.map((border,index)=><Link key={index} to={`/AboutCountry/${border.id}/`} onClick={handleLinkClick}><button key={index}  className={Theme?"border-c1 light-border-c1":"border-c1"}>{border.name}</button></Link>):<p className="languages">No border countries available </p>
             }
              </div>
        </div>
      </div>
          )}                
</div>
  )
}
