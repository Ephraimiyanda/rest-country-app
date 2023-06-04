import React, { useState,useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Homepage from './homepage'
import ViewCountry from './view-country'
import Navbar from './Navbar'
import Loading from './loading'
import { Suspense } from 'react'
import { CountryContext } from './countryContext'



export default function App(){
const body = document.querySelector("body") ;
const countryName = document.querySelectorAll(".countryName");
const [Theme,setTheme]=useState(false);
const [searchInput,setSearchInput]=useState(""); 
const [linkName,setLinkName]=useState("");
const [loading,setloading]=useState(true);
const [countries,setcountries]=useState([]);
const [initialData,setInitialData]=useState([]);

  function filterCountries(reg){
      const filteredRegion = initialData.filter((e) => e.region === reg);
      setcountries(filteredRegion);
  }  
 
  function search(){ 
       Array.from(countryName).forEach(function (country){
           if(country.innerText.toLowerCase().indexOf(searchInput.toLowerCase()) != -1){    
            country.parentElement.parentElement.parentElement.setAttribute("class",Theme? " element light-element":'element ')
           }else{
            country.parentElement.parentElement.parentElement.setAttribute("class","no-display")
           }
       })    
      }
  const handleThemeSwitch=()=>{
    setTheme(!Theme)
  }


body.setAttribute("class",Theme?"body-light":"body");
return(
  <div>
 <CountryContext.Provider value={{handleThemeSwitch,Theme,setSearchInput,search,linkName,setLinkName,loading,setloading,filterCountries,countries,setcountries,setInitialData,initialData}}>
 <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<Loading />}>
  <Switch>
  
  <Route exact path="/AboutCountry/:name" component={ViewCountry}></Route>
  <Route exact path="/" component={Homepage}></Route>
  </Switch>
  </Suspense>
  </BrowserRouter>
 </CountryContext.Provider>
  </div>
)

}