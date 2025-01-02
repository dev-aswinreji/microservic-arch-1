import { useEffect, useState } from "react"

export default function Home() {
    const [home, setHome] = useState()
    useEffect(() => {
        fetch("http://localhost:4001/home")
            .then((res) => res.json())
            .then(data => setHome(data.message))
    }, [home])

    return (
        <>
            <div className="text-center font-bold py-11">
                {home}
            </div>
        </>
    )
}