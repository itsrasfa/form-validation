const btn = document.querySelector('.btn');
const currentStyle = 'width: 280px; color: red; margin-left: 8px; font-size: .95rem; font-weight: 600;';

function nameValidation(event) {
  if (event.target.value === '') {
    event.target.nextElementSibling.style = currentStyle;
    event.target.nextElementSibling.innerText = event.target.validationMessage;
  } else {
    event.target.nextElementSibling.style = 'display: none;'
  }
}
document.forms.contato.nome.addEventListener("change", nameValidation);
btn.addEventListener("click", nameValidation);

function emailValidation(event) {
  const target = event.target
  if (!target.checkValidity()) {
    target.nextElementSibling.style = currentStyle;
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    event.target.nextElementSibling.style = 'display: none;'
  }
}
document.forms.contato.email.addEventListener("change", emailValidation);

function textLimit(event) {
  if (event.target.textLength >= 130) {
    event.target.nextElementSibling.style = currentStyle;
    event.target.nextElementSibling.innerHTML = '⚠️ Máximo de caracteres atingido.';
    btn.setAttribute("disabled", "disabled");
  } else {
    event.target.nextElementSibling.style = 'display: none;'
    btn.removeAttribute("disabled", "disabled");
  }
}

document.forms.contato.mensagem.addEventListener("keydown", textLimit);

