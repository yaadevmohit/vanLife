import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import "./server"
import VanDetail from "./pages/VanDetail"
export default function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between gap-3 px-4">
        <Link to="/" className="text-2xl text-black font-black">#VanLife</Link>
        <nav className="flex gap-4 py-1">
          <Link to="/about" className="text-xl ">About</Link>
          <Link to="/vans" className="text-xl ">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
