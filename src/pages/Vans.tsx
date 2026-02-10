import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import type { Van } from "../types/index"
import { typeColors } from "../utils"


export default function Vans() {
    const [vans, setVans] = useState<Van[] | null>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/vans")
            const data: { vans: Van[] } = await response.json();
            setVans(data.vans)
        }
        fetchData()
    },[])

    const vanElements = vans && vans.map((van: Van) => (
        <div key={van.id}>
            <Link 
                to={`/vans/${van.id}`}
                aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
                className="flex flex-col gap-3"
            >
            <img 
                src={van.imageUrl} 
                className="w-full rounded-md" 
                alt={`Image of ${van.name}`}
            />
            <div className="van-info">
                <h2 className="text-xl">{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`px-4 py-1 rounded-md text-amber-200 not-italic capitalize self-start ${typeColors[van.type]}`}>
                {van.type}
            </i>
            </Link>
        </div>
    ))

    return(
        <div className="px-4 max-w-6xl flex items-center justify-center flex-col p-2">
            <h1 
                className="text-2xl py-1 font-bold">
                Explore our van options
            </h1>
            {vanElements 
                ? 
            (<div 
                className="
                    grid 
                    grid-cols-2 
                    gap-8 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    items-center
                    mt-4
                    "
                >
                {vanElements}
            </div>)
            : 
            <span className="text-2xl">Vans are showing up...</span>
            }
        </div>
    )
}
