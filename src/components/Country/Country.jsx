 import { useState } from 'react';
import './Country.css'

 const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);
    
    const handleVisit = () => {
        setVisited(!visited)
        //setVisited(!visited)
    }

    const passWithParams = () =>{
        handleVisitedCountries(country);
    }


    return (
        <div className={`country ${visited?"visited":"nonVisited"}`}>
     <h3>Name: {name?.common}</h3> 
     <img src={flags.png} alt="" />
     <p>Population: {population}</p>
     <p>Area: {area}</p>
     <p><small>Code: {cca3}</small></p>
     <button onClick={passWithParams}>Mark as visit</button>
     <br /> <br />
     <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Visited Flag</button>
     <button onClick={handleVisit}>{!visited? "Going" : "Visited"}</button>
     {visited ? "I have visited this country": "Yet to visit"} 
        </div>
    );
};

export default Country;