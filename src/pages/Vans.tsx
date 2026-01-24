import { useEffect, useState } from "react"

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
        <div key={van.id} className="van-tile">
            <img src={van.imageUrl} />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
        </div>
    ))

    return(
        <div className="van-list-container">
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}
