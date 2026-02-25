import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { type Van } from "../../types";
import { typeColors } from "../../utils"
export default function HostVanDetail() {
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
    return (
        <>
            <Link to="/host/vans" className="py-4 block self-start">
                ←  <span className="border-b">Back to all vans</span>
            </Link> 
            {vanData ?
            <div className="bg-white p-4 flex flex-col gap-3">
                <div className="flex gap-4 items-center">
                    <img 
                        src={vanData.imageUrl} 
                        className="w-34 rounded-md md:w-full  max-w-2xs" 
                        alt={`Image of ${vanData.name}`}
                    />
                    <div className="van-info flex flex-col text-left gap-2">
                        <i className={`px-4 text-xs py-1 rounded-md text-amber-200 not-italic capitalize self-start ${typeColors[vanData.type]}`}>
                            {vanData.type}
                        </i>
                        <h2 className="text-lg font-bold">{vanData.name}</h2>
                        <p><span className="font-bold">${vanData.price}</span>/day</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <ul className="w-full flex gap-3 flex-wrap">
                        <li className="text-sm text-gray-600">Details</li>
                        <li className="text-sm text-gray-600">Pricing</li>
                        <li className="text-sm text-gray-600">Photos</li>
                        <li className="text-sm text-gray-600 ml-auto">icon</li>
                    </ul>
                </div>
            </div> 
            
            :
            <h1 className="flex text-2xl justify-center items-center">Loading...</h1>
            }
        </>
  )
}
