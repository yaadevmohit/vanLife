import { NavLink } from "react-router-dom"
import { linkStyle } from "../utils"
import { type ReactNode } from "react"

interface Link {
    name: string
    to: string
    end?: boolean
}

interface SubNavBarProps {
    links: Link[]
    gap?: string
    endElement?: ReactNode
    className?: string
}

export default function SubNavBar({ links, gap = "12", endElement, className = "" }: SubNavBarProps) {

  return (
    <nav className={`flex gap-${gap} ${className}`}>
        {links.map((link) => (
            <NavLink 
                key={link.name}
                className={({isActive}) => isActive ? linkStyle.active : linkStyle.inActive} 
                to={link.to}
                end={link.end ? true : false}
            >
                {link.name}
            </NavLink>
        ))}
        {endElement && <div className="ml-auto">{endElement}</div>}
    </nav>
  )
}
