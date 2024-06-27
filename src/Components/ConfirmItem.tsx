import Image from 'next/image';
import React from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#__next'); // Necessário para acessibilidade

type ModalComponentProps = {
  isOpen: boolean;
  onRequestClose: () => void;
  nome:string
  preco:number
  descricao:string
  foto:string

};

function ModalComponent({ isOpen, onRequestClose, nome, preco, descricao, foto}: ModalComponentProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex justify-center items-center"
      className="bg-white rounded-lg p-6 w-[400px]"
    > <Image src={foto} height={300} width={300} alt='foto do produto'/>
      <h2 className="text-xl mb-4">Adicionar</h2>
      <div>
        <div className='font-semibold text-gray-500'>{nome}</div>
        <div>{descricao}</div>
      </div>
      <button onClick={onRequestClose} className="bg-black text-white px-4 py-2 rounded">
        cancelar
      </button>
      <button className='bg-red-500 text-white px-4 py-2 rounded'>
        Adicinar R${preco.toFixed(2)}
      </button>
    </Modal>
  );
}

export default ModalComponent;
