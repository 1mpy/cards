/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/createCards.js":
/*!***********************************!*\
  !*** ./components/createCards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameMode: () => (/* binding */ gameMode)
/* harmony export */ });
/* harmony import */ var _difficulty_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../difficulty-selection.js */ "./difficulty-selection.js");


function gameMode(appEl) {
  let pairNumber = null;

  if (window.application.level === '1') {
      pairNumber = 3;
  } else if (window.application.level === '2') {
      pairNumber = 6;
  } else {
      pairNumber = 9;
  }

  const cardRanks = [
      'ace',
      'king',
      'queen',
      'jack',
      'ten',
      'nine',
      'eight',
      'seven',
      'six',
  ];
  const cardsSuits = ['spades', 'clubs', 'diamonds', 'hearts'];
  const cardsUrls = [];

  const getRundommNumber = (number) => {
      return Math.floor(Math.random() * number);
  };

  for (let i = 0; i < pairNumber; i++) {
      let indexRank = getRundommNumber(9); // получаем случайный ранг карты
      let indexSuit = getRundommNumber(4); // получаем случайную масть карты

      // проверка на дубликаты

      let uniqueCard = false;
      while (!uniqueCard) {
          uniqueCard = !cardsUrls.find((elem) => {
              return (
                  elem.rank === cardRanks[indexRank] &&
                  elem.Suit === cardsSuits[indexSuit] // возвращает элемента из массива, удовлетворяющий этому условию, инач undefined
              ); // проверяем ранг и масть  элемента с полученными индексами с теми что уде есть в массиве
          });
          if (!uniqueCard) {
              indexRank = getRundommNumber(9); // еще раз получаем случайный ранг карты
              indexSuit = getRundommNumber(4);
          }
      }

      let receivedCard = {
          rank: cardRanks[indexRank],
          Suit: cardsSuits[indexSuit],
          cardId: getRundommNumber(100), // даем случаный айди карты, чтобы было удобнее соритровать
      };

      receivedCard.url = `./static/images/${receivedCard.Suit}-${receivedCard.rank}.png`;
      cardsUrls.push(receivedCard);
      cardsUrls.push({ ...receivedCard, cardId: getRundommNumber(100) }); // копируем содержимое объекта receivedCard и имзеняем параметр cardId
  }

  cardsUrls.sort((a, b) => {
      if (a.cardId > b.cardId) return 1;
      else return -1;
      //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  });

  // console.log(cardsUrls);

  let cardString = ``;

  cardsUrls.forEach((item) => {
      cardString += `<div class="gamebox__field-card flip" data-rank="${item.rank}" data-Suit="${item.Suit}">
    <img class="gamebox__field-card-face" src="${item.url}" />
    <img class="gamebox__field-card-back" src="./static/images/card_back.svg" />
  </div>`;
  });

  const appHtml = `    <section class="gamebox center">
    <div class="gamebox-heading center">
      <div class="gamebox__timer">
        <div class="gamebox__timer-units">min</div>
        <div class="gamebox__timer-units gamebox__timer-units-sek">sek</div>
        <label class="gamebox__timer-digits" id="minutes" data-min="">00</label><span class='gamebox__timer-digits'>.</span><label class="gamebox__timer-digits" id="seconds" data-sec="">00</label>
      </div>
      <button class="gamebox__restart-button" id="restart">Начать заново</button>
    </div>
    <div class="gamebox__field">
  ${cardString}
  </div>
  </section>
<div id="myModal" class="modal">
<div class="modal-content">
    <img class="front-face"  src=""/>    
    <p>Вы проиграли!</p>
    <p> Затраченное время:</p>
    <p id = "modal-time">.</p>
    <button class="gamebox__restart-button" id="restart">Начать заново</button>

</div>`;

  appEl.innerHTML = appHtml;

//РЕСТАРТ

  function restart() {
      const restartButton = document.getElementById('restart');
      restartButton.addEventListener('click', () => {
          (0,_difficulty_selection_js__WEBPACK_IMPORTED_MODULE_0__.gameDifficulty)(appEl);
      });
  }

  restart();

//   function winCheck (){
//     const flippedCards = querySelectorAll ('.flip');

//     console.log(fliped.length);
//   }


  // Таймер

  const minutesLabel = document.getElementById('minutes');
  const secondsLabel = document.getElementById('seconds');
  let totalSeconds = 0;
  const myInterval = setInterval(timer, 1000);

  function timer() {
          ++totalSeconds;
          secondsLabel.innerHTML = pad(totalSeconds % 60);
          minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
          function pad(val) {
            var valString = val + '';
            if (valString.length < 2) {
                return '0' + valString;
            } else {
                return valString;
            }
        }
  }

  timer();

//   function getTime() {
    const allMinutes = document.getElementById("minutes").innerHTML;
    const allSeconds = document.getElementById("seconds").innerHTML;
    console.log(allMinutes);
    console.log(allSeconds);
//     // const indexM = oneComment.dataset.reply;
//     let timerElement = document.getElementById('modal-time')
//     timerElement.textContent = getTime(time)

//   }


  //Стоп таймер

  function stopTimer () {
      clearInterval(myInterval);
  }

  let isItFlipped = false;
  let firstCard, secondCard;
  let blockField = false; //блокирование поля с картами в случае когда переворот карт еще не выполнен, а уже произошел клик на новой карте
  const cards = document.querySelectorAll('.gamebox__field-card');

  // console.log(cards);

  const timeoutTillStart = () => {
      blockField = true;
      setTimeout(() => {
          cards.forEach((element) => {
              element.classList.remove('flip');
              blockField = false;
          });
      }, 5000);
  };
  // необходима блокировка карт на момент просмотра, с последующей разблокировкой
  timeoutTillStart();

    //Переворачиваем карту
  function flipCard() {
      if (blockField) return;
      if (this === firstCard) return;

      this.classList.add('flip');

      if (!isItFlipped) {
          isItFlipped = true;
          firstCard = this;
      } else {
          isItFlipped = false;
          secondCard = this;
          // console.log(firstCard.dataset.rank);
          // console.log(secondCard.dataset.rank);

          match();
      }
      // console.log('done');
  }

  // console.log("click");
  // console.log(this);
  // console.log({ isItFlipped, firstCard });

  // проверка на совпадение

  function match() {
      setTimeout(() => {
          // необходима задержка по выводу сообщения о победе/поражении, т.к. сравнение происходит в момент клика, а это очень быстро = bad UX/UI
          if (
              firstCard.dataset.rank === secondCard.dataset.rank &&
              firstCard.dataset.Suit === secondCard.dataset.Suit
          ) {
              preventClick();
            //   alert('Вы выйграли');
          } else {
            //   alert('Вы проиграли');
            const modal = document.getElementById("myModal");
            modal.style.display = "block";
            stopTimer();
            // getTime();
            window.onclick = function(event) {
            if (event.target === modal) {              
                (0,_difficulty_selection_js__WEBPACK_IMPORTED_MODULE_0__.gameDifficulty)(appEl);
            }
            };
            //   turnBack();
          }
      }, 500);
  }

  // запрет на повторный клик по карте

  function preventClick() {
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      preventDoubleClick();
  }

  // переворачивание карт обратно

  function turnBack() {
      blockField = true;
      setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
          blockField = false;
          preventDoubleClick();
      }, 500);
  }

  function preventDoubleClick() {
      isItFlipped = false;
      blockField = false;
      firstCard = null;
      secondCard = null;
  }

  cards.forEach((card) => {
      card.addEventListener('click', flipCard);
  });

}




/***/ }),

/***/ "./difficulty-selection.js":
/*!*********************************!*\
  !*** ./difficulty-selection.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameDifficulty: () => (/* binding */ gameDifficulty)
/* harmony export */ });
/* harmony import */ var _components_createCards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/createCards.js */ "./components/createCards.js");



window.application = {
  level: null,
};

function gameDifficulty(appEl) {
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
        (0,_components_createCards_js__WEBPACK_IMPORTED_MODULE_0__.gameMode)(appEl);

      }

    }
  });

}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _difficulty_selection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./difficulty-selection.js */ "./difficulty-selection.js");
// import { doc } from "prettier";


const appEl = document.getElementById('app');

//Выбор уровня сложности
(0,_difficulty_selection_js__WEBPACK_IMPORTED_MODULE_0__.gameDifficulty)(appEl);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map