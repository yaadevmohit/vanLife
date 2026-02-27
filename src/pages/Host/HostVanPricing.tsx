import { useVanData } from "../../hooks/useVanData"
export default function HostVanPricing() {
  const {vanData} = useVanData()
  return (
    vanData ? 
    <p className="text-2xl"><span className="font-bold">${vanData.price}</span>/day</p>
    : <h2>Loading...</h2>
  )
}
