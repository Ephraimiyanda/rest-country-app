import { useState,useEffect, useDebugValue } from "react";
const useBorderFetch=(url)=>{
    const [country,setcountry]=useState([]);

    useEffect(()=>{
      
        fetch(url)
        .then(res=>{
         return res.json()
        })
        .then(bo=>{
        setcountry((prevNames) => [...prevNames, ...borderData])
        })
        .catch()
        },[url]);
    return{country}
}
export default useBorderFetch;
countries.borders.forEach((border) => {
    fetch(`http://localhost:3000/country?alpha3Code=${border}`)
    .then(data=>{
     return data.json() 
    })
       .then((borderData) => {
         setBorderNames();
       })
       .catch((error) => console.log(error));
   });