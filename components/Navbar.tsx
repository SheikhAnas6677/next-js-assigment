import Link from "next/link";

export default function Navbar(){
    return(
        <ul className="flex justify-center gap-10 bg-red-200 text-4xl">
            <h1>
                <Link href="/">Home</Link>
            </h1>
            <h1>
                <Link href="/about">About</Link>
            </h1>
            <h1>
                <Link href="/countrylist">CountryList</Link>
            </h1>
        </ul>
    )
}