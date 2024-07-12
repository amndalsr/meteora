import { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuatidade] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  return (
    <CarrinhoContext.Provider
      value={{
        carrinho,
        setCarrinho,
        quantidade,
        setQuatidade,
        valorTotal,
        setValorTotal,
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
