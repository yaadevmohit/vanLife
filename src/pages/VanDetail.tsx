import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import type { Van } from "../types/index"

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
            <div className="flex flex-col justify-center px-4 gap-2">
                <img src={vanData.imageUrl} className="max-w-2xl mb-3"/>
                <i className="bg-orange-500 self-start px-2 rounded text-white">{vanData.type}</i>
                <h2 className="text-2xl font-black">
                    {vanData.name}
                </h2>
                <p className="text-black"><span className="font-bold">{`$${vanData.price}`}</span>/day</p>
                <p>{vanData.description}</p>
                <button className="bg-[#FF8C38] rounded-sm px-4 py-2 text-white text-xl mt-2">Rent this van</button>
            </div>)
        :
        <h2>Loading...</h2>
    )
}