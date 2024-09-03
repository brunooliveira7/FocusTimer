import { controls } from "./elements.js";
import * as actions from "./actions.js";

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action; //verifica se clicou nos botões
    if (typeof actions[action] != "function") { //verifica se a ação/funct existe
      return;
    }
    actions[action]();
  });
}
