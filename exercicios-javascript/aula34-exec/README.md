# Documentação do Exercício - Formulário de Cadastro

## Descrição
Este projeto consiste em um formulário de cadastro que coleta informações pessoais (nome, sobrenome, peso e altura) e as armazena em um array, exibindo os resultados na página e no console.

## Estrutura do Projeto

### Componentes

#### 1. HTML (index.html)
- Formulário responsivo com campos para dados pessoais
- Classes específicas para estilização
- Estrutura semântica com labels e inputs
- Div dedicada para exibição dos resultados

#### 2. CSS (styles.css)
- Design moderno e minimalista
- Paleta de cores neutras
- Variáveis CSS para fácil manutenção
- Layout responsivo
- Animações suaves
- Estilos específicos para:
  - Formulário
  - Inputs
  - Botões
  - Área de resultados

#### 3. JavaScript (js/index.js)
##### Funcionalidades Principais
- Captura de dados do formulário
- Prevenção do comportamento padrão de submit
- Armazenamento em array
- Exibição dos resultados na página
- Limpeza automática do formulário
- Log no console

##### Estrutura do Código
```javascript
function meuEscopo() {
    // Seleção de elementos
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    // Função de manipulação do formulário
    function recebeEventoForm(evento) {
        // Lógica de captura e armazenamento
    }

    // Event Listener
    form.addEventListener('submit', recebeEventoForm);
}
```

## Como Usar

1. **Preenchimento do Formulário**
   - Nome (texto)
   - Sobrenome (texto)
   - Peso (número com decimais)
   - Altura (número com decimais)

2. **Envio**
   - Clique no botão "Enviar" ou pressione Enter

3. **Visualização dos Resultados**
   - Os dados aparecem abaixo do formulário
   - O console mostra o array atualizado

## Validações
- Campos marcados como required
- Peso aceita step de 0.1
- Altura aceita step de 0.01

## Estrutura de Dados
```javascript
const pessoa = {
    nome: string,
    sobrenome: string,
    peso: number,
    altura: number
}
```

## Estilização
### Cores
```css
:root {
    --primary-color: #2c3a47;
    --secondary-color: #576574;
    --background-color: #f5f6fa;
    --input-border: #dcdde1;
    --text-color: #353b48;
}
```

### Responsividade
- Layout adaptativo para diferentes tamanhos de tela
- Breakpoint principal em 480px

## Melhorias Possíveis
1. Adicionar validação de dados mais robusta
2. Implementar sistema de armazenamento local
3. Adicionar função de edição/exclusão
4. Calcular IMC automaticamente
5. Exportar dados em diferentes formatos

## Requisitos Técnicos
- Navegador moderno com suporte a ES6+
- JavaScript habilitado
- Suporte a CSS3

## Considerações de Desenvolvimento
- Código organizado em escopos
- Uso de variáveis CSS para manutenibilidade
- Nomenclatura clara e consistente
- Comentários explicativos em pontos importantes
- Separação de responsabilidades (HTML, CSS, JS)

## Autor
[Seu Nome]

## Versão
1.0.0