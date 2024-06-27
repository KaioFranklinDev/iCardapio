import Image from "next/image";
interface CartProps{
    fnc:any
}

export default function Cart(props:CartProps){
    return(
        <div className="flex flex-col justify-center items-center">
            <div className=" flex flex-row items-center justify-start pb-4 font-semibold text-gray-600 gap-4">
                <Image src={'/assets/img/logo-mc.avif'} width={50} height={50} alt="foto restaurante"/>
                <p>Mcdonalds Teresina TRD</p>
            </div>
            <div className=" h-[1px] w-4/5 bg-gray-300"/>
            <div className="w-full">
                <p className="pl-8">Seus itens</p>
                <div className="flex flex-row justify-between p-4">
                    <div>
                        <p className="font-semibold">1x Açaí 300ml</p>
                        <p className="text-gray-500 p-1">1x Jujuba</p>
                        <p className="text-gray-500 p-1">1x Paçoca</p>
                        <p className="text-gray-500 p-1">1x Granola</p>
                    </div>
                    <div className="font-semibold">R$ 19.84</div>
                    
                </div>
                <div className="flex flex-row justify-between p-4">
                    <div>
                        <p className="font-semibold">1x Açaí 300ml</p>
                        <p className="text-gray-500 p-1">1x Jujuba</p>
                        <p className="text-gray-500 p-1">1x Paçoca</p>
                        <p className="text-gray-500 p-1">1x Granola</p>
                    </div>
                    <div className="font-semibold">R$ 19.84</div>
                    
                </div>
                <div className="flex flex-row justify-between p-4">
                    <div>
                        <p className="font-semibold">1x Açaí 300ml</p>
                        <p className="text-gray-500 p-1">1x Jujuba</p>
                        <p className="text-gray-500 p-1">1x Paçoca</p>
                        <p className="text-gray-500 p-1">1x Granola</p>
                    </div>
                    <div className="font-semibold">R$ 19.84</div>
                    
                </div>
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-4">
                <div className="h-[1px] w-4/5 bg-gray-300"/>
                <button className="text-red-600 font-semibold" onClick={props.fnc}>Adicionar mais itens</button>
                <div className="h-[1px] w-4/5 bg-gray-300"/>
            </div>
        </div>
    )
}