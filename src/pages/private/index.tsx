"use client"
import Cookie from "js-cookie"
import { useRouter } from "next/router"
export default function EditCardapio() {
    const router = useRouter()
    function handleLogOut() {
        Cookie.remove("auth_token")
        router.push("/publico")
    }
    return (
        <div className="h-screen w-screen bg-gray-950 text-white flex flex-col justify-center items-center gap-4">
            Voce só pode acessar com Auth
            <div>
                <button onClick={handleLogOut} className="p-2 h-auto w-auto bg-red-500 text-white" >Logout</button>
            </div>
        </div>
    )
}