import { useVanData } from "../../hooks/useVanData"
export default function HostVanPhotos() {
  const {vanData} = useVanData()
  return (
    vanData ?
    <section className="flex gap-4">
      <img src={vanData.imageUrl} className="max-w-32"alt={`image of ${vanData.name}`}/>
      <img src={vanData.imageUrl} className="max-w-32"alt={`image of ${vanData.name}`}/>
    </section>
    : <h2>Loading...</h2>
  )
}
