import { NavLink, Link } from "react-router-dom";

export default function Header() {

    const linkStyle = {
        active: "underline text-lg font-semibold",
        inActive: "hover:underline text-lg font-semibold"
    }

    return(
        <header className="w-full flex justify-between m-auto items-center gap-3 p-2">
            <Link to="/" className="hover:underline text-2xl font-black self-start">#VANLIFE</Link>
            <nav className="flex gap-8 py-1">
                <NavLink to="/host" className={({isActive}) => isActive ? linkStyle.active : linkStyle.inActive}>Host</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? linkStyle.active : linkStyle.inActive}>About</NavLink>
                <NavLink to="/vans" className={({isActive}) => isActive ? linkStyle.active : linkStyle.inActive}>Vans</NavLink>
            </nav>
      </header>
    )
}