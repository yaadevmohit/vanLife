import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { type Van } from "../../types";
import { typeColors } from "../../utils"
import SubNavBar from "../../components/SubNavBar";
import { hostVanDetailNavbar } from "../../assets/data/navbarData";
import { type ContextType } from "../../types";


export default function HostVanDetail() {
    const params = useParams<{ id: string }>()
    const [vanData, setVanData] = useState<Van | null>(null)

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => 
                    {
                     setVanData(data.vans)}
                )
    },[params.id])

    return (
        <>
            <Link to=".." relative="path" className="py-4 block self-start">
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
                <SubNavBar links={hostVanDetailNavbar.links} endElement={hostVanDetailNavbar.endElement} className="text-md"/>
                <Outlet context={{vanData} satisfies ContextType}/>
            </div> 
            
            :
            <h1 className="flex text-2xl justify-center items-center">Loading...</h1>
            }
        </>
  )
}

