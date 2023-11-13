"use strict"
// 1 davaleba
let newpElement = document.createElement("p");

document.getElementById("wraper").appendChild(newpElement);

let newhElement = document.createElement("h2");
newhElement.textContent = "image title";
// newhElement.style.backgroundColor = "yellow";

document.getElementById("text1").appendChild(newhElement);
// 2

let newTextElement = document.createElement("p");
newTextElement.textContent = "hello";
newTextElement.classList.add = ("newtext");

document.getElementById("newtext").appendChild(newTextElement);


// document.querySelectorAll(".container").forEach((item) => {
//     let fotoNew = document.createElement("img");
//     fotoNew.setAttribute("href", "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fph0.qna.center%2Fstorage%2Fphotos%2Fdtnthgthtvty%2F1167802.jpg&lr=131&pos=7&rpt=simage&text=autumn");
//     item.appendChild(fotoNew);
// })