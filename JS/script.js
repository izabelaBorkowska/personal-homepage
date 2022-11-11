console.log("Witaj na mojej stronie!-Zmiana wiadomosci");

// JS -zmiana motywu

let changeTheme = document.querySelector(".js-changeTheme");
let body = document.querySelector(".body");
 
changeTheme.addEventListener("click", () => {
body.classList.toggle("dark");

changeTheme.innerText = body.classList.contains("dark") ? "Włącz jasny motyw" : "Włącz ciemny motyw"
});

//JS poprzednia - moja wersja na dole 

//  if (body.classList.contains("dark")) {
 //  changeTheme.innerText = "Włącz jasny motyw";
 //} else {
  //  changeTheme.innerText = "Włącz ciemny motyw";
//}

// JS -usuniecie zdjecia

let buttonPhoto = document.querySelector(".js-buttonPhoto");

buttonPhoto.addEventListener("click", () => {
  let mainPhoto = document.querySelector(".mainPhoto");
  mainPhoto.remove();
});
