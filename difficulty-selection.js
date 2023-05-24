import { Easy } from "./components/difficulty-1.js";

window.application = {
  level: null,
};

export function gameDifficulty(appEl) {
  const renderGameDifficulty = (appEl) => {
    const appHtml = `<section class="game">
        <div class="game__menu">          
            <h2 class="game__menu-heading">
                Выбери <br />
                сложность
              </h2>
            <form class="difficulty" id="difficulty-form">
                <div class="difficulty-box">
                    <input class="difficulty__type" type="radio" id="game1" name="game" value="1" checked>
                    <label for="game1">1</label>
            
                    <input class="difficulty__type" type="radio" id="game2" name="game" value="2">
                    <label for="game2">2</label>
            
                    <input class="difficulty__type" type="radio" id="game3" name="game" value="3">
                    <label for="game3">3</label>
                </div>

                <button class="game__menu-button" type="submit">Старт</button> 
            </form>
        </div>
    </section>`;
    appEl.innerHTML = appHtml;
  };
  renderGameDifficulty(appEl);

  const startButton = document.querySelector('#difficulty-form');

  //   console.log(difficultyLevels);
  //   console.log(startButton);
  startButton.addEventListener("submit", () => {
    const difficultyLevels = document.querySelectorAll(".difficulty__type");
    for (const difficultyLevel of difficultyLevels) {
      if (difficultyLevel.checked) {
        window.application.level = difficultyLevel.value;
      }
      Easy(appEl);

    }

  });
}
