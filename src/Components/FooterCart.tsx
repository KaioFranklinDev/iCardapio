import Image from "next/image";
import Link from "next/link";

export default function FooterCart() {
    return (

        <footer onClick={()=>(alert('casa'))} className="flex flex-row justify-around items-center w-[414px] h-[70px] bg-red-600 fixed bottom-0 text-white">
            <div><Image src={'/assets/bag.svg'} height={26} width={26} alt="simbolo carrinho" /></div>
            <div>Ver sacola</div>
            <div>R$ 47.90</div>
        </footer>

    )
}