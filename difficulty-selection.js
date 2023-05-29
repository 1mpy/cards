import { gameMode } from "./components/createCards.js";
// import { mediumMode } from "./components/difficulty-2.js";
// import { hardMode } from "./components/difficulty-3.js";


window.application = {
  level: null,
};

export function gameDifficulty(appEl) {
  const renderGameDifficulty = (appEl) => {
    const appHtml = `<section class="game">
        <div class="game__menu">          
            <h2 class="game__menu-heading">
                Выбери <br/>
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

  const formButton = document.querySelector("#difficulty-form");
  // https://ru.stackoverflow.com/questions/845045/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-submit-%D0%B8-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F
  //   console.log(difficultyLevels);
  //   console.log(startButton);
  formButton.addEventListener("submit", () => {
    const difficultyLevels = document.querySelectorAll(".difficulty__type");
    for (const difficultyLevel of difficultyLevels) {
      if (difficultyLevel.checked) {
        window.application.level = difficultyLevel.value;
        // if (difficultyLevel.value === "1")
        gameMode(appEl);

      }

    }
  });

}

