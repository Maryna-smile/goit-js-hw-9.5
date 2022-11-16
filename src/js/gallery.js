

// 2) Реалізувати перемикання теми сторінки за допомогою класів dark-theme та light-theme,
// які додаються до body. При оновленні сторінки тема повинна зберігатися

import { data } from "./data.js";
import makeGallery from "../templates/gallery.hbs";
import onInputChange from "./onInputChange.js"

const list = document.querySelector(".gallery");
const inputCheckbox = document.querySelector(".checkbox");
const body = document.querySelector("body");

const gallery = makeGallery(data);
list.innerHTML = gallery;


// function onInputChange() {
//   if (inputCheckbox.checked) {
//     body.classList.replace("light-theme", "dark-theme");
//     localStorage.setItem('theme', "dark-theme");
//   } else {
//     body.classList.replace("dark-theme", "light-theme");
//     localStorage.setItem('theme', "light-theme");
//   }
// }

inputCheckbox.addEventListener("change", onInputChange);

function checkTheme() {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark-theme") {
    inputCheckbox.checked = true;
    body.classList.replace("light-theme", "dark-theme");
  }
};

checkTheme();