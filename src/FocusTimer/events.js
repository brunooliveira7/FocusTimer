import state from "./state.js";
import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as el from "./elements.js";
import { updateDisplay } from "./timer.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; //verifica se clicou nos botões
    //verifica se a ação/funct existe
    if (typeof actions[action] != "function") {
      return;
    }
    actions[action]();
  });
}

//no foco limpa os minutos
export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = "";
  });
  //expressão regular
  el.minutes.onkeypress = (event) => /\d/.test(event.key); //vai fazer um teste para aceitar só números digitados (\d - só numb). evente.key - a tecla que está apertando

  //blur - não estar no foco. Quando digitar > 60 não aceitar, fica como 60
  el.minutes.addEventListener("blur", (event) => {
    let time = event.currentTarget.textContent; //pegando o tex do min
    time = time > 60 ? 60 : time; // : é o não no ternário. time é > 60? sim = 60.

    state.minutes = time; //para atualizar
    state.seconds = 0; //não pode atualizar o segundos

    updateDisplay();
    el.minutes.removeAttribute("contenteditable");
  });
}
