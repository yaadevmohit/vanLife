import { useEffect, useState } from "react"
import {Link} from "react-router-dom"

interface Van {
    id: string
    name: string
    price: number
    description: string
    imageUrl: string
    type: "simple" | "rugged" | "luxury"
}

export default function Vans() {
    const [vans, setVans] = useState<Van[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/vans")
            const data: { vans: Van[] } = await response.json();
            setVans(data.vans)
        }
        fetchData()
    },[])

    const vanElements = vans.map((van: Van) => (
        <div key={van.id} >
            <Link 
                to={`/vans/${van.id}`}
                aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
            >
            <img src={van.imageUrl} className="w-full rounded-md" alt={`Image of ${van.name}`}/>
            <div className="van-info">
                <h2 className="text-2xl">{van.name}</h2>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    return(
        <div className="px-6">
            <h1 className="text-3xl font-bold">Explore our van options</h1>
            <div 
                className="
                    grid 
                    grid-cols-2 
                    gap-8 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    items-center
                    mt-14
                    "
                >
                {vanElements}
            </div>
        </div>
    )
}
