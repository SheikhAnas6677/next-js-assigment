import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";

export default function Countrypage(){
return (
    <>
    <Navbar/>
    <ul className="ml-20 text-2xl mt-10 leading-loose">
        <h1>
            <Link href="/countrylist/pakistan">Pakistan</Link>
        </h1>
        <h1>
          <Link href="/countrylist/America">America</Link>
        </h1>
        <h1>
        <Link href="/countrylist/Australia"> Australia</Link>
        </h1>
        <h1>
        <Link href="/countrylist/NewZealand"> New Zealand</Link>
        </h1>
        <h1>
        <Link href="/countrylist/Italy"> Italy</Link>
        </h1>
    </ul>
    
    </>
)
}