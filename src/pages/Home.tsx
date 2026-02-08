import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container min-h-96 text-white px-11 py-6 mt-4">
            <h1 className="text-4xl font-bold leading-10.2">You got the travel plans, we got the travel vans.</h1>
            <p className="leading-6 my-6">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link 
                to="vans"
                className="
                    inline-block
                    text-center
                    bg-[#FF8C38]
                    w-full
                    mt-7
                    py-3
                    text-white
                    font-bold
                    rounded-lg
                    
                "
            >
                Find your van
            </Link>
        </div>
    )
};
