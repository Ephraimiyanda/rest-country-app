import { useState,useEffect } from "react";
const useFetch=(url)=>{
    const [countries,setcountries]=useState([]);
    useEffect(()=>{
      
        fetch(url)
        .then(res=>{
         return res.json()
        })
        .then(data=>{
        setcountries(data)
    })
        .catch()
        },[url]);
    return{countries}
}
export default useFetch;