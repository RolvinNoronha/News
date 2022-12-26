"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchBox() {

    const [input, setInput] = useState("");
    const router = useRouter();
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!input) return;

        router.push(`/search?keyword=${input}`);
    }

    return (
        <form onSubmit={handleSubmit} className="navbar__search">
            <input
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Search Keywords.." 
                className="navbar__search-input" />

            <button
                disabled={!input} 
                type="submit" 
                className="navbar__search-btn"
            >Search</button>
        </form>
    );
}