 import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

 const Countries = () => {

 const [countries, setCountries] = useState([]);

 const [visitedCountries, setVisitedCountries] = useState([]);

 const [visitedFlags, setVisitedFlags] = useState([]);

 useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=>setCountries(data))
 },[])




 const handleVisitedCountries = country=>{
    console.log("Add this to your visited country");
  const newVisitedCountries = [...visitedCountries, country];
  setVisitedCountries(newVisitedCountries);
 }

const handleVisitedFlags = flag => {
 console.log('flag adding'); 

 const newFlags = [...visitedFlags, flag];
 setVisitedFlags(newFlags)
}


 return ( 
<div >
    <h3>Countries: {countries.length}</h3>
    {/*Visited Countries*/}
<div>
 <h4>Visited Countries: {visitedCountries.length}</h4>
 <ul>
 {visitedCountries.map(country =>
 <li key={country.cca3}>{country.name.common}</li>)}
    
 </ul>
 </div>
<div className="flag-container">
{
visitedFlags.map((flag,idx) => <img key={idx} src={flag}></img>)
}
</div>
 {/*Display Countries*/}
<div className="country-container">{countries.map(country=>
 <Country key={country.cca3}
 handleVisitedCountries={handleVisitedCountries}
handleVisitedFlags = {handleVisitedFlags}  
 country={country}>
   </Country>)
            }</div>
        </div>
    );
 };

 export default Countries;