import Link from "next/link"

type Props = {
    category: String,
    isActive: boolean,
}


export default function NavLink({ category, isActive}: Props) {

    return (
        <>
            <Link 
                href={`/news?categories=${category}`} 
                className="navbar__link" 
                style={ isActive ? { borderBottom: "2px solid rgba(240, 166, 29)", fontSize: "1.8rem"} : {}}
            >
                {category}
            </Link>
        </>
    );
}