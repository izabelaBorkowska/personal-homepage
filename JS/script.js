{
  const welcome = () => {
    console.log("Welcome on my site :) ");
  };

  const changeBackground = (changeTheme) => {
    const body = document.querySelector(".body");

    body.classList.toggle("dark");
    changeTheme.innerText = body.classList.contains("dark")
      ? "Włącz jasny motyw"
      : "Włącz ciemny motyw";
  };

  const init = () => {
    const changeTheme = document.querySelector(".js-changeTheme");
    changeTheme.addEventListener("click", changeBackground);

    welcome();
  };

  init();

  const buttonPhoto = document.querySelector(".js-buttonPhoto");

  buttonPhoto.addEventListener("click", () => {
    const mainPhoto = document.querySelector(".mainPhoto");
    mainPhoto.remove();
  });
}
