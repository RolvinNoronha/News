import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <div className="header">
                <Bars3Icon className="header__icon" />
                <Link className="header__link" href="/" prefetch={false}>
                    <h1>The News App</h1>
                </Link>
                <div className="header__buttons">
                    <button className="header__buttons-subscribe">Subscribe Now</button>
                </div>
            </div>
        </header>
    );
}