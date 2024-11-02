function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();
        
        // Captura os campos
        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        // Cria objeto com os dados
        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        };

        // Adiciona ao array e mostra no console
        pessoas.push(pessoa);
        console.log('Pessoa adicionada:', pessoa);
        console.log('Array completo de pessoas:', pessoas);

        // Atualiza a exibição dos resultados
        resultado.innerHTML += `
            <div class="pessoa-card">
                <p><strong>Nome:</strong> ${pessoa.nome}</p>
                <p><strong>Sobrenome:</strong> ${pessoa.sobrenome}</p>
                <p><strong>Peso:</strong> ${pessoa.peso} kg</p>
                <p><strong>Altura:</strong> ${pessoa.altura} m</p>
                <hr>
            </div>
        `;

        // Limpa o formulário
        form.reset();
        nome.focus();
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
