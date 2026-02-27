import { useVanData } from "../../hooks/useVanData"

export default function HostVanInfo() {
  const { vanData } = useVanData()
  return (
    vanData ?
    <section className="flex flex-col gap-4">
      <p><span className="font-bold">Name: </span>{vanData.name}</p>
      <p><span className="font-bold">Category: </span>{vanData.type}</p>
      <p><span className="font-bold">Description: </span>{vanData.description}</p>
      <p><span className="font-bold">Visibility: </span>public</p>
    </section>
    : <h2>Loading...</h2>
  )
}
