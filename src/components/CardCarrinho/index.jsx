import React from 'react';
 import './styles.css';

function CardCarrinho({id,nome,preco,imagem}) {

  const excluir = (id) => {

    const arrayProdutos = JSON.parse(localStorage.getItem("listaProdutos"))
    const produtoIndex = arrayProdutos.findIndex(
      (produto) => produto.id === id
    )
    arrayProdutos.splice(produtoIndex,1)
    localStorage.setItem("listaProdutos",JSON.stringify(arrayProdutos))
  }; 

  return (
    <div className="card_carrinho">
    <img 
     src={imagem}
     alt={nome}
     />
    <h1>{nome}</h1>
    <h2>R${preco}</h2>
    <button>Excluir</button>
  </div>
  );
}

export default CardCarrinho;