document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeAbas();
            aba.classList.add('shows__list--is-active');
            ativaBotao(event.target);
        });
    });
});

function escondeAbas() {
    const abas = document.querySelectorAll('[data-tab-id]');
    abas.forEach(function (aba) {
        aba.classList.remove('shows__list--is-active');
    });
}

function ativaBotao(botaoAtivo) {
    const botoes = document.querySelectorAll('[data-tab-button]');
    botoes.forEach(function (botao) {
        botao.classList.remove('shows__tabs__button--is-active');
    });
    botaoAtivo.classList.add('shows__tabs__button--is-active');
}