import { Outlet } from "react-router-dom";
import { hostNavbar } from "../assets/data/navbarData";
import SubNavBar from "./SubNavBar";
export default function HostLayout() {
    return(
        <div className="p-4">     
            <SubNavBar links={hostNavbar.links} /> 
           <Outlet />
        </div>
    )
}