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
            <div>
                <div className="flex">
                    <img 
                        src={vanData.imageUrl} 
                        className="w-14 rounded-md md:w-full  max-w-2xs" 
                        alt={`Image of ${vanData.name}`}
                    />
                    <div className="van-info">
                        <i className={`px-4 py-1 rounded-md text-amber-200 not-italic capitalize self-start ${typeColors[vanData.type]}`}>
                            {vanData.type}
                        </i>
                        <h2 className="text-sm font-bold">{vanData.name}</h2>
                        <p>${vanData.price}<span>/day</span></p>
                    </div>
                </div>
            </div> 
            
            :
            <h1 className="flex text-2xl justify-center items-center">Loading...</h1>
            }
        </>
  )
}
