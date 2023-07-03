import React, { useEffect, useState } from "react";
import CardCarrinho from "../../components/CardCarrinho";

function Carrinho() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const listaProdutos = localStorage.getItem("listaProdutos");
    if (listaProdutos) {
      setProdutos(JSON.parse(listaProdutos));
    }
  }, []);

  return (
    <>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <CardCarrinho
            id={produto.id}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        </div>
      ))}
      {}
    </>
  );
}

export default Carrinho;
