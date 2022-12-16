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

  const onButtonPhotoClick = () => {
    const mainPhoto = document.querySelector(".mainPhoto");
    mainPhoto.remove();
  };

  const init = () => {
    const changeTheme = document.querySelector(".js-changeTheme");
    const buttonPhoto = document.querySelector(".js-buttonPhoto");
    changeTheme.addEventListener("click", changeBackground);
    buttonPhoto.addEventListener("click", onButtonPhotoClick);

    welcome();
  };

  init();
}
