/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/createCards.ts":
/*!***********************************!*\
  !*** ./components/createCards.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameMode: () => (/* binding */ gameMode)
/* harmony export */ });
/* harmony import */ var _difficulty_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../difficulty-selection */ "./difficulty-selection.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function gameMode(appEl) {
    var pairNumber;
    if (window.application.level === '1') {
        pairNumber = 3;
    }
    else if (window.application.level === '2') {
        pairNumber = 6;
    }
    else {
        pairNumber = 9;
    }
    var cardRanks = [
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
    var cardsSuits = ['spades', 'clubs', 'diamonds', 'hearts'];
    var cardsUrls = [];
    var getRundommNumber = function (number) {
        return Math.floor(Math.random() * number);
    };
    var _loop_1 = function (i) {
        var indexRank = getRundommNumber(9); // получаем случайный ранг карты
        var indexSuit = getRundommNumber(4); // получаем случайную масть карты
        // проверка на дубликаты
        var uniqueCard = false;
        while (!uniqueCard) {
            uniqueCard = !cardsUrls.find(function (elem) {
                return (elem.rank === cardRanks[indexRank] &&
                    elem.Suit === cardsSuits[indexSuit] // возвращает элемента из массива, удовлетворяющий этому условию, инач undefined
                ); // проверяем ранг и масть  элемента с полученными индексами с теми что уде есть в массиве
            });
            if (!uniqueCard) {
                indexRank = getRundommNumber(9); // еще раз получаем случайный ранг карты
                indexSuit = getRundommNumber(4);
            }
        }
        var receivedCard = {
            rank: cardRanks[indexRank],
            Suit: cardsSuits[indexSuit],
            cardId: getRundommNumber(100), // даем случаный айди карты, чтобы было удобнее соритровать
        };
        receivedCard.url = "./static/images/".concat(receivedCard.Suit, "-").concat(receivedCard.rank, ".png");
        cardsUrls.push(receivedCard);
        cardsUrls.push(__assign(__assign({}, receivedCard), { cardId: getRundommNumber(100) })); // копируем содержимое объекта receivedCard и имзеняем параметр cardId
    };
    for (var i = 0; i < pairNumber; i++) {
        _loop_1(i);
    }
    cardsUrls.sort(function (a, b) {
        if (a.cardId > b.cardId)
            return 1;
        else
            return -1;
        //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    });
    // console.log(cardsUrls);
    var cardString = "";
    cardsUrls.forEach(function (item) {
        cardString += "<div class=\"gamebox__field-card flip\" data-rank=\"".concat(item.rank, "\" data-Suit=\"").concat(item.Suit, "\">\n    <img class=\"gamebox__field-card-face\" src=\"").concat(item.url, "\" />\n    <img class=\"gamebox__field-card-back\" src=\"./static/images/card_back.svg\" />\n  </div>");
    });
    var appHtml = "    <section class=\"gamebox center\">\n    <div class=\"gamebox-heading center\">\n      <div class=\"gamebox__timer\">\n        <div class=\"gamebox__timer-units\">min</div>\n        <div class=\"gamebox__timer-units gamebox__timer-units-sek\">sek</div>\n        <label class=\"gamebox__timer-digits\" id=\"minutes\" >00</label><span class='gamebox__timer-digits'>.</span><label class=\"gamebox__timer-digits\" id=\"seconds\" >00</label>\n      </div>\n      <button class=\"gamebox__restart-button\" id=\"restart\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n    </div>\n    <div class=\"gamebox__field\">\n  ".concat(cardString, "\n  </div>\n  </section>\n<div id=\"myModal\" class=\"modal\">\n<div class=\"modal-content\">\n    <img id=\"modal-img\" />    \n    <p id=\"modal-status\"></p>\n    <p> \u0417\u0430\u0442\u0440\u0430\u0447\u0435\u043D\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F:</p>\n    <p id=\"modal-time\">.</p>\n    <button class=\"gamebox__restart-button\" id=\"restart-modal\">\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E</button>\n</div>");
    appEl.innerHTML = appHtml;
    //РЕСТАРТ
    function restart() {
        var restartButton = document.getElementById('restart');
        restartButton.addEventListener('click', function () {
            (0,_difficulty_selection__WEBPACK_IMPORTED_MODULE_0__.gameDifficulty)(appEl);
        });
    }
    restart();
    //   function winCheck (){
    //     const flippedCards = querySelectorAll ('.flip');
    //     console.log(fliped.length);
    //   }
    // Таймер
    var minutesLabel = document.getElementById('minutes');
    var secondsLabel = document.getElementById('seconds');
    var totalSeconds = 0;
    var myInterval = setInterval(timer, 1000);
    function timer() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(Math.round(totalSeconds % 60));
        minutesLabel.innerHTML = pad(Math.round(totalSeconds / 60));
        function pad(val) {
            var valString = val + '';
            if (valString.length < 2) {
                return '0' + valString;
            }
            else {
                return valString;
            }
        }
    }
    timer();
    //Стоп таймер
    function stopTimer() {
        clearInterval(myInterval);
    }
    var isItFlipped = false;
    var firstCard, secondCard;
    var blockField = false; //блокирование поля с картами в случае когда переворот карт еще не выполнен, а уже произошел клик на новой карте
    var cards = document.querySelectorAll('.gamebox__field-card');
    // console.log(cards);
    var timeoutTillStart = function () {
        blockField = true;
        setTimeout(function () {
            cards.forEach(function (element) {
                element.classList.remove('flip');
                blockField = false;
            });
        }, 5000);
    };
    // необходима блокировка карт на момент просмотра, с последующей разблокировкой
    timeoutTillStart();
    //Переворачиваем карту
    function flipCard() {
        if (blockField)
            return;
        if (this === firstCard)
            return;
        this.classList.add('flip');
        if (!isItFlipped) {
            isItFlipped = true;
            firstCard = this;
        }
        else {
            isItFlipped = false;
            secondCard = this;
            blockField = true;
            match();
        }
        // console.log('done');
    }
    function resultModal(text, url) {
        var allMinutes = document.getElementById("minutes").textContent;
        var allSeconds = document.getElementById("seconds").textContent;
        var restartModal = document.getElementById("restart-modal");
        var timeBox = document.getElementById("modal-time");
        var modal = document.getElementById("myModal");
        var status = document.getElementById("modal-status");
        var statusImage = document.getElementById("modal-img");
        modal.style.display = "block";
        status.innerText = text;
        statusImage.src = url;
        stopTimer();
        timeBox.textContent = allMinutes + '.' + allSeconds;
        restartModal.onclick = function (event) {
            if (event.target === restartModal) {
                (0,_difficulty_selection__WEBPACK_IMPORTED_MODULE_0__.gameDifficulty)(appEl);
            }
        };
    }
    // проверка на совпадение
    function match() {
        setTimeout(function () {
            // необходима задержка по выводу сообщения о победе/поражении, т.к. сравнение происходит в момент клика, а это очень быстро = bad UX/UI
            if (firstCard.dataset.rank === secondCard.dataset.rank &&
                firstCard.dataset.Suit === secondCard.dataset.Suit) {
                var flippedCards = document.querySelectorAll('.flip');
                // console.log(flippedCards);
                if (flippedCards.length === pairNumber * 2) {
                    resultModal('Вы победили', '/static/images/win.svg');
                }
                preventClick();
            }
            else {
                preventClick();
                resultModal('Вы проиграли', '/static/images/lost.svg');
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
    //   function turnBack() {
    //       blockField = true;
    //       setTimeout(() => {
    //           firstCard.classList.remove('flip');
    //           secondCard.classList.remove('flip');
    //           blockField = false;
    //           preventDoubleClick();
    //       }, 500);
    //   }
    function preventDoubleClick() {
        isItFlipped = false;
        blockField = false;
        firstCard = null;
        secondCard = null;
    }
    cards.forEach(function (card) {
        card.addEventListener('click', flipCard);
    });
}


/***/ }),

/***/ "./difficulty-selection.ts":
/*!*********************************!*\
  !*** ./difficulty-selection.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameDifficulty: () => (/* binding */ gameDifficulty)
/* harmony export */ });
/* harmony import */ var _components_createCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/createCards */ "./components/createCards.ts");

window.application = {
    level: null,
};
function gameDifficulty(appEl) {
    var renderGameDifficulty = function (appEl) {
        var appHtml = "<section class=\"game\">\n      <div class=\"game__menu\">          \n          <h2 class=\"game__menu-heading\">\n              \u0412\u044B\u0431\u0435\u0440\u0438 <br/>\n              \u0441\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C\n            </h2>\n          <form class=\"difficulty\" id=\"difficulty-form\">\n              <div class=\"difficulty-box\">\n                  <input class=\"difficulty__type\" type=\"radio\" id=\"game1\" name=\"game\" value=\"1\" checked>\n                  <label for=\"game1\">1</label>\n          \n                  <input class=\"difficulty__type\" type=\"radio\" id=\"game2\" name=\"game\" value=\"2\">\n                  <label for=\"game2\">2</label>\n          \n                  <input class=\"difficulty__type\" type=\"radio\" id=\"game3\" name=\"game\" value=\"3\">\n                  <label for=\"game3\">3</label>\n              </div>\n\n              <button class=\"game__menu-button\" type=\"submit\">\u0421\u0442\u0430\u0440\u0442</button> \n          </form>\n      </div>\n  </section>";
        appEl.innerHTML = appHtml;
    };
    renderGameDifficulty(appEl);
    var formButton = document.querySelector('#difficulty-form');
    // https://ru.stackoverflow.com/questions/845045/%D0%A1%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-submit-%D0%B8-%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D1%8F
    //   console.log(difficultyLevels);
    //   console.log(startButton);
    formButton.addEventListener('submit', function () {
        var difficultyLevels = document.querySelectorAll('.difficulty__type');
        // for (const difficultyLevel of difficultyLevels) {
        difficultyLevels.forEach(function (difficultyLevel) {
            if (difficultyLevel.checked) {
                window.application.level = difficultyLevel.value;
                // if (difficultyLevel.value === "1")
                (0,_components_createCards__WEBPACK_IMPORTED_MODULE_0__.gameMode)(appEl);
            }
        });
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
  !*** ./main.ts ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _difficulty_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./difficulty-selection */ "./difficulty-selection.ts");
// import { doc } from "prettier";

var appEl = document.getElementById('app');
//Выбор уровня сложности
(0,_difficulty_selection__WEBPACK_IMPORTED_MODULE_0__.gameDifficulty)(appEl);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map