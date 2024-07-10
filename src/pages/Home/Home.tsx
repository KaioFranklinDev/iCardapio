
import CardItem from "@/Components/CardItem";
import ModalComponent from "@/Components/ConfirmItem";
import FooterWithCart from "@/Components/FooterWithCar";
import Image from "next/image";
import { useState } from "react";
import { servidorDB } from "../../../servidorDB/servidorDB";

export default function HomePage() {
    const getRes: any = servidorDB.mcdonalds.pratos
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const [itensModal, setItensModal] = useState({
        nome_prato:"",
        descricao_prato:"",
        preco_prato:undefined,
        foto_prato:"",

    })

    

    return (
        <div className="flex flex-col items-center justify-center bg-red-700">
            <main className="flex flex-col items-center min-h-screen h-auto  overflow-x-hidden w-[414px] bg-white">
                <header className="flex items-center justify-center overflow-y-hidden max-w-[1275px] w-full h-[100px] bg-red-600">
                    <div>
                        <Image src={'/assets/img/capa-mc.avif'} height={100} width={500} alt="foto de capa restaurante" priority />
                    </div>
                </header>
                <section className="flex flex-row gap-8 mt-5">
                    <div>
                        <Image src={'/assets/img/logo-mc.avif'} width={50} height={50} alt="logo restaurante" />
                    </div>
                    <div>
                        <h1 className="font-semibold text-gray-600 text-xl">McDonald&prime;s - Teresina</h1>
                        <div className="flex flex-row gap-3">
                            <a href="#" className="text-red-500">ver mais</a>
                            <span className="text-gray-400">&diams;</span>
                            <span className="text-gray-400">Pedido mínimo R$ 10,00</span>
                        </div>
                    </div>
                </section>
                <div className="mt-4 flex justify-center h-[50px] w-[400px] border-gray-100 border-4 rounded-lg bg-gray-100 gap-2">
                    <div className="flex justify-center pl-2">
                        <Image src={'/assets/search_red.svg'} alt="simbolo de busca" height={30} width={30} />
                    </div>
                    <input className="w-full  bg-gray-100" type="text" placeholder="Busque por item ou loja..." ></input>
                </div>
                <button onClick={openModal}>acionar modal</button>
                {getRes.map((e:any, index:number) => {
                    function construtorModal(){
                        const i = {
                            nome_prato : e.nome_prato,
                            descricao_prato : e.descricao_prato,
                            preco_prato : e.preco_prato,
                            foto_prato : e.foto_prato
                        }
                        setItensModal(i)
                        openModal()
                    }
                    return (
                        <div key={index}>
                            <CardItem onClick={construtorModal} nome={e.nome_prato} descricao={e.descricao_prato} preco={e.preco_prato} foto={e.foto_prato} />

                        </div>
                    )
                })}
                <div className="flex justify-center items-center h-screen">
                    <ModalComponent nome={itensModal.nome_prato} descricao={itensModal.descricao_prato} preco={itensModal.preco_prato} foto={itensModal.foto_prato} isOpen={modalIsOpen} onRequestClose={closeModal} />
                </div>

            </main>
            <FooterWithCart />
        </div>
    )
}