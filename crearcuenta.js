const loginForm = document.getElementById("register-form");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("contraseña");
const errorMessage = document.getElementById("form__error");

// usuarios registrados

const users = JSON.parse(localStorage.getItem(users)) || [];

// guardar en session Storage

const saveToSessionStorage = (user) => {
  sessionStorage.setItem("activeUser", JSON.stringify(user));
};

// para validar si el campo esta vacio

const isEmpty = (input) => {
  return !input.value.trim().length;
};

//confirmacion de email entre los usuarios

const isExistingMail = (input) => {
  return users.some((users) => users.email === input.value.trim());
};

// funcion para mostrar el error al validar el form

const showError = (message) => {
  errorMessage.textContent = message;
};
//validacion de contraseña con usuario registrado
const isMatchingPass = (input) => {
  const user = getUser();
  return user.password === input.value.trim();
};

const getUser = () => {
  return user.find((user) => user.email === emailInput.value.trim());
};

//funcion que chequea todo
const isValidAccount = () => {
  let valid = false;

  if (isEmpty(emailInput)) {
    showError("por favor, complete los campors");
    return;
  }
  if (!isExistingMail(emailInput)) {
    showError("EL mail ingresado no es válido");
    return;
  }
  if (isEmpty(passInput)) {
    showError("Por favor complete los campos");
    return;
  }
  if (!isMatchingPass(passInput)) {
    showError("Los datos ungresados no son válidos");
    loginForm.request();
    return;
  }
  alert("Bienvenid@!");
  valid = true;
  errorMessage.textContent = "";
  loginForm.reset();

  return valid;
};
//Usuario
const login = (e) => {
  e.preventDefault();
  if (isValidAccount()) {
    const user = getUser();
    saveToSessionStorage(user);
    window.location.href = "./iniciodesesion.html";
  }
};

const init = () => {
  loginForm.addEventListener("submit", login);
  nameinput.addEventListener("input", () => checkTextInput(nameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  passInput.addEventListener("input", () => checkPassword(passInput));
};

init();
