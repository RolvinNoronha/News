"use client"

import { categories } from "../constants";
import NavLink from "./NavLink";
import SearchBox from "./SearchBox";


export default function Navbar() {

    

    return (
        <nav className="navbar">
            <div className="navbar__links">
                {categories.map((category, idx) => {
                    return <NavLink key={idx} category={category} />
                })}
            </div>
            <SearchBox />            
        </nav>
    ); 
}