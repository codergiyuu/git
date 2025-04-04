const menu = document.getElementById("menu-btn");
const menuBox = document.getElementById("menu");
const close = document.getElementById("close");
const tryagain = document.getElementById("tryagain");
const errorBox = document.getElementById("error");

menu.addEventListener("click", () => {
  menuBox.style.right = "0px";
});

close.addEventListener("click", () => {
  menuBox.style.right = "-245px";
});

//INPUT HANDLERS

login.addEventListener("click", () => {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  let newElement = document.createElement("h3");
  const login = document.getElementById("login");

  if (email.value === "") {
    event.preventDefault(); // Prevent form submission
    const errorInner = document.getElementById("errorInner");
    errorBox.classList.add("active");
    newElement.innerHTML = "<h1>HHDASD</h1>";
    email.value = "";
    errorInner.append(newElement);
  }
});

tryagain.addEventListener("click", () => {
  errorBox.classList.remove("active");
});
