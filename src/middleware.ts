import { NextRequest, NextResponse } from "next/server"
export default function middleware(request:NextRequest){
    const token = request.cookies.get("auth_token")?.value
    const singInURL = new URL('/publico', request.url)
    const privateURL = new URL('/private', request.url)
    console.log("middle executado")
    if(!token){
        if(request.nextUrl.pathname === "/publico"){
            return NextResponse.next()
        }
        return NextResponse.redirect(singInURL)
    }
    if(request.nextUrl.pathname === "/publico"){
        return NextResponse.redirect(privateURL)
    }

}
export const config = {
    matcher:['/publico','/private/:path*']
}