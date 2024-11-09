document.addEventListener('DOMContentLoaded', function() {
    const itensPagamento = document.getElementById('itens-pagamento');
    const totalPagamento = document.getElementById('total-pagamento');
    const itensCarrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = 0;

    itensCarrinho.forEach(item => {
        const divItem = document.createElement('div');
        divItem.classList.add('carrinho-item');
        divItem.innerText = `${item.nome} - R$${item.preco.toFixed(2)}`;
        itensPagamento.appendChild(divItem);
        total += item.preco;
    });

    totalPagamento.innerText = `Total: R$${total.toFixed(2)}`;

    document.getElementById('form-pagamento').addEventListener('submit', function(e) {
        e.preventDefault();
        // Processar pagamento aqui
        alert('Pagamento realizado com sucesso!');
        localStorage.removeItem('carrinho');
    