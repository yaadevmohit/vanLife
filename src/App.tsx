import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import "./server"
import VanDetail from "./pages/VanDetail"
export default function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between gap-3 p-2">
        <Link to="/" className="hover:underline text-3xl font-black">#VANLIFE</Link>
        <nav className="flex gap-4 py-1">
          <Link to="/about" className="hover:underline text-xl font-bold">About</Link>
          <Link to="/vans" className="hover:underline text-xl font-bold">Vans</Link>
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
