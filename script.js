meuStorage = localStorage;

document.addEventListener('DOMContentLoaded', function() {

    const carrinhoItens = document.getElementById('carrinho-itens');

    const carrinhoTotal = document.getElementById('carrinho-total');

    const btnFinalizar = document.getElementById('finalizar-pedido');

    let itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    let total = 0;



    function atualizarCarrinho() {

        carrinhoItens.innerHTML = '';

        total = 0;

        itensCarrinho.forEach(item => {

            const divItem = document.createElement('div');

            divItem.classList.add('carrinho-item');

            divItem.innerHTML = `

                <span>${item.nome} - R$${item.preco}</span>

                <button class="btn-remover" data-nome="${item.nome}">Remover</button>

            `;

            carrinhoItens.appendChild(divItem);

            total += item.preco;

        });

        carrinhoTotal.innerText = `Total: R$${total.toFixed(2)}`;

        localStorage.setItem('carrinho', JSON.stringify(itensCarrinho));

    }



    document.querySelectorAll('.btn-add').forEach(button => {

        button.addEventListener('click', function(e) {

            e.preventDefault();

            const produto = e.target.closest('.produto');

            const nome = produto.querySelector('h3').innerText;

            const preco = parseFloat(produto.querySelector('p span').innerText.replace('R$', '').replace(',', '.'));

            const itemCarrinho = { nome, preco };

            itensCarrinho.push(itemCarrinho);

            atualizarCarrinho();

        });

    });



    carrinhoItens.addEventListener('click', function(e) {

        if (e.target.classList.contains('btn-remover')) {

            const nome = e.target.dataset.nome;

            itensCarrinho = itensCarrinho.filter(item => item.nome !== nome);

            atualizarCarrinho();

        }

    });



    btnFinalizar.addEventListener('click', function() {

        if (itensCarrinho.length === 0) {

            alert('Seu carrinho está vazio!');

        } else {

            // Redirecionar para a página de pagamento

            window.location.href = 'pague.html';

        }

    });



    // Atualizar o carrinho ao carregar a página

    atualizarCarrinho();
});
