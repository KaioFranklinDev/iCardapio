"use client"
import Cookie from "js-cookie"
import { useRouter } from "next/router"
export default function EditCardapio() {
    const router = useRouter()
    function handleLogin() {
        Cookie.set("auth_token", "kainhoIIIIInsoadchusahdpasdkaojsidhuadwada")
        router.push("/private")
    }
    return (
        <div className="h-screen w-screen bg-gray-950 text-white flex flex-col justify-center items-center gap-4">
            Voce pode acessar sem Auth
            <div>
                <button onClick={handleLogin} className="p-2 h-auto w-auto bg-green-500 text-white" >Login</button>
            </div>
        </div>
    )
}