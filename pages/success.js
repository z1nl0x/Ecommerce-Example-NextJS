import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";

import { runFireworks } from "../lib/utils";

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Obrigado pelo seu pedido!</h2>
        <p className="email-msg">
          Verifique sua caixa de e-mail, enviamos seu recibo por lá!
        </p>
        <p className="description">
          Se você tiver qualquer questão, envie um e-mail para:{" "}
          <a className="email" href="mailto:ecommerce@order.com">
            ecommerce@order.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Continue comprando :)
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
