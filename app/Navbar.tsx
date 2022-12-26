"use client"

import { categories } from "../constants";
import NavLink from "./NavLink";
import SearchBox from "./SearchBox";


export default function Navbar() {


    const isActive = (path: String) => {
        return false
    };

    return (
        <nav className="navbar">
            <div className="navbar__links">
                {categories.map((category, idx) => {
                    return <NavLink key={idx} isActive={isActive(category)} category={category} />
                })}
            </div>
            <SearchBox />            
        </nav>
    ); 
}