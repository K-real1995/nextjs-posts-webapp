import React from "react";
import Link from "next/link";

const Header: () => React.JSX.Element = () => {
    return (
        <header>
            <strong>IT page</strong>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </nav>
        </header>
    )
}

export default Header;
