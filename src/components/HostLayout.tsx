import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
    const linkStyle = {
        active: "underline text-md font-bold",
        inActive: "hover:underline text-md"
    }
    return(
        <div className="p-4">
            <nav className="flex gap-12">
                <NavLink 
                    className={({isActive}) => isActive ? linkStyle.active : linkStyle.inActive} 
                    to="/host"
                    end
                >
                    Dashboard
                </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? linkStyle.active : linkStyle.inActive}  
                    to="/host/income"
                >
                    Income
                </NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? linkStyle.active : linkStyle.inActive} 
                    to="/host/reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}