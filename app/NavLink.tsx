import Link from "next/link"
import { useSearchParams } from "next/navigation";

type Props = {
    category: string,
}


export default function NavLink({ category}: Props) {

    const searchParams = useSearchParams();


    const query = searchParams.get("categories");
    return (
        <>
            <Link 
                href={`/news?categories=${category}`} 
                className="navbar__link" 
                style={ category === query ? { borderBottom: "2px solid rgba(240, 166, 29)", fontSize: "1.8rem"} : {}}
            >
                {category}
            </Link>
        </>
    );
}