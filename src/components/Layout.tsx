import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return(
        <div className="max-w-4xl mx-auto">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )   
}