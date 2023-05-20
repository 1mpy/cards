const difficultyLevels = document.querySelectorAll(".difficulty__type");
const startButton = document.querySelector(".game__menu-button");
// console.log(difficultyLevels);
// console.log(startButton);
startButton.addEventListener("click", () => {
  for (const difficultyLevel of difficultyLevels) {
    if (difficultyLevel.checked) {
      localStorage.setItem('game', difficultyLevel.value);
      document.body.innerHTML = `<h1>Выбран уровень сложности ${difficultyLevel.value}</h2>`;
    } 
  }
});