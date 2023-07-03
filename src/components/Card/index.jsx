import './styles.css';

function Card( {id,nome,avaliacao,preco,imagem}) {
    const adicionar = () => {

      const novoProduto = {
        id: id,
        nome:nome,
        avaliacao:avaliacao,
        preco:preco,
        imagem:imagem,
      };
      const listaProdutos = localStorage.getItem("listaProdutos");
      let novaListaProdutos = listaProdutos ? JSON.parse(listaProdutos) :[];
      novaListaProdutos.push(novoProduto);
      localStorage.setItem("listaProdutos", JSON.stringify(novaListaProdutos));
    }
    
    return (
        <div class="card" key={id}>
       <img src={imagem} alt={nome} />
       <h1>{nome}</h1>
       <p>{avaliacao}⭐</p>
       <h2> R$ {preco}</h2>
       <button onClick={adicionar}>Adicionar ao carrinho</button>
   </div>
    );
}

export default Card;