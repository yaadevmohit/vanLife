import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import type { Van } from "../types/index"
import { typeColors } from "../utils"

export default function VanDetail() {
    const params = useParams<{ id: string }>()
    const [vanData, setVanData] = useState<Van | null>(null)
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => 
                    {console.log(data)
                    setVanData(data.vans)}
                )
    },[params.id])
    return(
       vanData ? 
        (        
            <div className="flex flex-col px-4 gap-4 max-w-6xl">
                <Link to="/vans" className="mb-4 self-start">
                ←  <span className="border-b">Back to all vans</span>
                 </Link>
                <img 
                    src={vanData.imageUrl} 
                    className="w-full mb-3 rounded-xl max-w-2xl"
                />
                <i className={`px-4 py-1 rounded-md text-white not-italic self-start ${typeColors[vanData.type]}`}>
                    {vanData.type}
                </i>
                <h2 className="text-3xl font-black">
                    {vanData.name}
                </h2>
                <p className="text-black text-lg"><span className="font-bold">{`$${vanData.price}`}</span>/day</p>
                <p>{vanData.description}</p>
                <button 
                    className="bg-[#FF8C38]
                             rounded-sm px-4 py-2 
                             text-white text-xl 
                             mt-2 self-stretch 
                             max-w-140"
                >
                    Rent this van
                </button>
            </div>)
        :
        <h2 className="flex text-4xl justify-center items-center">Loading...</h2>
    )
}