import { useEffect, useState } from "react"
import type { Van } from "../../types/index"
import { Link } from "react-router-dom";
export default function HostVans() {
    const [vans, setVans] = useState<Van[] | null>(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("/api/host/vans")
            const data: { vans: Van[] } = await response.json();
            setVans(data.vans)
        }
        fetchData()
    },[])

    const vanElements = vans && vans.map((van: Van) => (
        <div key={van.id}>
            <Link 
                to={`/host/vans/${van.id}`}
                aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
                className="flex flex-row gap-3 md:flex-col bg-white p-4 rounded justify-baseline items-center"
            >
                <img 
                    src={van.imageUrl} 
                    className="w-14 rounded-md md:w-full  max-w-2xs" 
                    alt={`Image of ${van.name}`}
                />
                <div className="van-info">
                    <h2 className="text-sm font-bold">{van.name}</h2>
                    <p>${van.price}<span>/day</span></p>
                </div>
            </Link>
        </div>
    ))

    return(
        <div className="pt-8">
            <h1 className="text-2xl font-bold">Your listend vans</h1>
                            {vanElements 
                ? 
            (<div 
                className="flex flex-col gap-4 py-4"
                >
                {vanElements}
            </div>)
            : 
            <span className="text-2xl">Vans are showing up...</span>
            }
        </div>
    )
}