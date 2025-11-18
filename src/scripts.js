document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("[data-tab-button]");
  const questions = document.querySelectorAll("[data-faq-question]");

  const ativaBotao = (botaoAtivo) => {
    const botoes = document.querySelectorAll("[data-tab-button]");
    botoes.forEach((botao) => {
      botao.classList.remove("shows__tabs__button--is-active");
    });
    botaoAtivo.classList.add("shows__tabs__button--is-active");
  };

  const escondeAbas = () => {
    const abas = document.querySelectorAll("[data-tab-id]");
    abas.forEach((aba) => {
      aba.classList.remove("shows__list--is-active");
    });
  };

  const abreOuFechaResposta = (elemento) => {
    const classe = "faq__questions__item--is-open";
    const elementoPai = elemento.currentTarget.parentNode;

    elementoPai.classList.toggle(classe);
  };
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const abaAlvo = event.target.dataset.tabButton;
      const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
      escondeAbas();
      aba.classList.add("shows__list--is-active");
      ativaBotao(event.target);
    });
  });

  questions.forEach((question) => {
    question.addEventListener("click", abreOuFechaResposta);
  });
});
