import Image from 'next/image';
import React, { useState } from 'react';
import Cart from './Cart';

const FooterWithCart = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="relative">
      <div
        className="fixed bottom-0 w-[414px] transition-transform duration-500 bg-gray-800 text-white"
        style={{
          left: '50%',
          transform: `translate(-50%, ${isCartVisible ? '0' : 'calc(100% - 70px)'})`
        }}
      >
        <footer onClick={toggleCart} className="flex flex-row justify-around items-center w-[414px] h-[70px] bg-red-600 text-white">
          <div><Image src={'/assets/bag.svg'} height={26} width={26} alt="simbolo carrinho" /></div>
          <div>Ver sacola</div>
          <div>R$ 107.90</div>
        </footer> 
        <div className="h-[calc(100vh-70px)] bg-white text-black p-4">
          <Cart fnc={toggleCart}/>
        </div>
      </div>
    </div>
  );


};

export default FooterWithCart;
