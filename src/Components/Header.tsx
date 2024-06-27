import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className="  flex flex-row justify-around items-center text-gray-500 font-semibold h-20 border-b-2 w-full">
            <div className="flex flex-row items-center">
                <Image alt="logo" src={"/assets/img/ifood-logo.png"} width={100} height={200} />
                <nav className="flex gap-1 ">
                    <Link href={"/"}>Início</Link>
                    <Link href={"/"}>Restaurantes</Link>
                    <Link href={"/"}>Mercados</Link>
                    <Link href={"/"}>Bebidas</Link>
                    <Link href={"/"}>Farmacias</Link>
                    <Link href={"/"}>Pets</Link>
                    <Link href={"/"}>Shopping</Link>
                </nav>
            </div>
            <div className="flex justify-center h-[50px] w-[400px] border-gray-100 border-4 rounded-lg bg-gray-100 gap-2">
                <div className="flex justify-center pl-2">
                    <Image src={'/assets/search_red.svg'} alt="simbolo de busca" height={30} width={30} />
                </div>
                <input className="w-full  bg-gray-100" type="text" placeholder="Busque por item ou loja..." ></input>
            </div>
            <div className="flex flex-row">
                <p>Kaio Franklin Dev</p>
                <div className=""><Image src={'/assets/person_red.svg'} alt="simbolo de busca" height={30} width={30} /></div>
            </div>

        </header>
    )
}