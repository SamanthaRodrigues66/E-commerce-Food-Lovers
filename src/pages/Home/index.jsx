import { useState, useEffect } from "react";
import Produtos from "../../components/Produtos/index.jsx"
import Card from "../../components/Card/index.jsx";

function Home() {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    const array = Produtos()
    setProdutos(array)
  }, [])

  return (
    <div>
        {produtos.map(produto => (
          <Card
          id={produto.id}
          nome={produto.nome}
          avaliacao={produto.avaliacao}
          preco={produto.preco}
          imagem={produto.imagem}
          />
        ))}
    </div>
  );
}

export default Home;
