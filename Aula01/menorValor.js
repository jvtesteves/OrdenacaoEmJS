const livros = require('./listaLivros');

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = 0;
    
    for (let atual = 0; atual < livros.length; atual++) {
        if (livros[atual].preco < livros[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

module.exports = menorValor;