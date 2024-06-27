interface CardItemProps {
    nome:string,
    preco:number,
    foto:string,
    descricao:string,
    onClick:any
}
import Image from "next/image";
import Link from "next/link";

export default function CardItem(props:CardItemProps){
    return(
        <Link href={"/"} onClick={props.onClick} >
            <div className="flex flex-col items-center mt-4 m-5">
                <div className="flex flex-row">
                    <div>
                        <p className="font-semibold text-gray-600">{props.nome}</p>
                        <p className="h-[100px] w-[300px]  text-wrap overflow-hidden">{props.descricao}</p>
                        <p className="font-semibold text-gray-600">Apartir de R$ {props.preco.toFixed(2)}</p>
                    </div>
                    <div>
                    <Image src={props.foto} height={100} width={100} alt="item do cardapio" /> 
                    </div>
                </div>
                <div className="w-4/5 h-[1px] bg-slate-100"   />
            </div>
        </Link>

    )
}