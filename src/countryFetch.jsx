import { useContext } from "react";
import { useState,useEffect } from "react";
import { CountryContext } from "./countryContext";
const useFetch=(url)=>{
    const{loading,setloading,countries,setcountries,setInitialData}=useContext(CountryContext);
    
  
    useEffect(()=>{
        setloading(true)
        setTimeout(()=>{
        fetch(url)
        .then(res=>{
         return res.json()
        })
        .then(data=>{
        setcountries(data)
        setInitialData(data)
        setloading(false)
    })

    .catch()
    },1500)
        },[url]);
  
    return{countries,loading}
}
export default useFetch;