import state from "./state.js";
import * as el from "./elements.js";
import { reset } from "./actions.js";

export function countdown() {
  if (!state.isRunning) {
    return;
  }
  
  let minutes = Number(el.minutes.textContent);
  let seconds = Number(el.seconds.textContent);

  seconds--;

  if (seconds < 0) {
    seconds = 59;
    minutes--;
  }

  if (minutes < 0) {
    reset()
    return;
  }
  
  updateDisplay(minutes, seconds);

  // funct que executa uma funct depois de um determinado tempo (1000=1s) - recursão/callback - funct chama ela mesma
  setTimeout(() => countdown(), 1000);
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes; // ?? -nullish coalesing operator - verifica se o parâm. é null - se sim coloca parâm. válido no lugar do null
  seconds = seconds ?? state.seconds;

  el.minutes.textContent = String(minutes).padStart(2, "0"); // preencha o começo, 2 caract., quando tiver um caract. começa com 0
  el.seconds.textContent = String(seconds).padStart(2, "0");
}
