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


const body = document.querySelector("body") 
export default function App(){
const countryName = document.querySelectorAll(".countryName")
  const[Theme,setTheme]=useState(false)
  const[searchInput,setSearchInput]=useState(""); 

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
  body.setAttribute("class",Theme?"body-light":"body")


 


return(
  <div>
 <CountryContext.Provider value={{handleThemeSwitch,Theme,setSearchInput,search}}>
 <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<Loading />}>
  <Switch>
  
  <Route exact path="/AboutCountry/:id" component={ViewCountry}></Route>
  <Route exact path="/" component={Homepage}></Route>
  </Switch>
  </Suspense>
  </BrowserRouter>
 </CountryContext.Provider>
  </div>
)

}