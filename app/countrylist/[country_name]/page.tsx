import Navbar from "@/components/Navbar";
import React from "react";


export default function country_name({params}:{params:{country_name:string,population:number|string,capital_city:string}}){
    const countries ={
        pakistan : {
            name:"Pakistan",
            population:251269164,
            capital:"Islamabad"
        },
        America:{
            name:"America",
            population:345911652,
            capital:"Washington DC"
        },
        Australia:{
            name:"Australia",
            population:26713205,
            capital:"Canberra"
        },
        NewZealand:{
            name:"NewZealand",
            population:223787,
            capital:"Wellington"
        },
       Italy:{
            name:" Italy",
            population: 59342867,
            capital:"Rome"
        }
    }
       if (params.country_name == "America") {
        params.country_name = countries.America.name ;
        params.population = countries.America.population ;
        params.capital_city = countries.America.capital;
    }
    else if (params.country_name == "Australia") {
        params.country_name = countries.Australia.name ;
        params.population = countries.Australia.population ;
        params.capital_city = countries.Australia.capital;
    }
    else if (params.country_name == "pakistan") {
        params.country_name = countries.pakistan.name ;
        params.population = countries.pakistan.population ;
        params.capital_city = countries.pakistan.capital;
    }
    else if (params.country_name == "NewZealand") {
        params.country_name = countries.NewZealand.name ;
        params.population = countries.NewZealand.population ;
        params.capital_city = countries.NewZealand.capital;
    }
    else if (params.country_name == "Italy") {
        params.country_name = countries.Italy.name ;
        params.population = countries.Italy.population ;
        params.capital_city = countries.Italy.capital;
    }
    else{
        params.population="Sorry we do not have data of this country" ;
        params.capital_city="Sorry we do not have data of this country" ;
       }
    
    
    return(
        <>
        <Navbar/>
        <ul className=" w-1/2 pl-10 ml-20 mt-20 text-3xl leading-loose bg-yellow-200 ">
        <p>Country name : {params.country_name}</p>
        <p>Population : <span style={{color:"blue"}}>{params.population} </span> </p>
        <p>Capital city : <span style={{color:"blue"}}>{params.capital_city}</span> </p>
        </ul>
        </>
    )
}