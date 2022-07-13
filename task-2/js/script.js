let turn = 0; // номер хода
let gameOver = false; // маркер завершения игры
let winner = "none"; // победитель, когда определен - "Player" или "Computer"
let score = [0, 0]; // счет в формате Player : Computer
let combinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]; // комбинации победных троек
for (let i = 0; i < 9; i++) {
    document.getElementById(i).addEventListener("click", () => (buttonClicked(i)));
};
document.getElementById("reset").addEventListener("click", () => (resetGame()));
/**
 * Делает выбранную ячейку выбранной (disabled) и вызывает nextTurn()
 * @param {int} num - индекс ячейки (0-8)
 */
function buttonClicked(num) {
    document.getElementById(num).disabled = true;
    nextTurn();
};
/**
 * Проверка, занята ли ячейка x-ом или o-м
 * @param {int} num - индекс 0-8
 * @param {String} code - "x-button" или "o-button"
 * @return {Boolean} True/False
 */
 function checkIfSet(num, code) {
    return document.getElementById(num).disabled && document.getElementById(num).className == code;
};
/**
* Проверка, не занята ли ячейка
* @param {int} num - индекс 0-8
* @return {Boolean} True/False
*/
function checkIfEmpty(num) {
    return !document.getElementById(num).disabled;
};
/**
 * Меняет стиль всех ячеек с x-button на o-button или наоборот; если номер хода нечетный - вызывает makeComputerTurn()
 */
function nextTurn() {
    checkResults();
    if (gameOver == true)
        return;
    turn++;
    isComputerTurn = (turn % 2 == 1);
    for (let i = 0; i < 9; i++) {
        if (!document.getElementById(i).disabled) {
            if (isComputerTurn) {
                document.getElementById(i).classList.remove("x-button");
                document.getElementById(i).classList.add("o-button");
            }
            else {
                document.getElementById(i).classList.remove("o-button");
                document.getElementById(i).classList.add("x-button");
            }
        }
    }
    if (isComputerTurn)
        makeComputerTurn();
};
/**
 * Компьютер выбирает ячейку для своего хода и передает ход игроку
 */
function makeComputerTurn() {
    let possibleMoves = [];
    for (let i = 0; i < 9; i++) {
        if (!document.getElementById(i).disabled) {
            possibleMoves.push(i)
        }
    }
    if (possibleMoves.length == 0) {
        checkResults()
        return;
    }
    let chosenMove = makeMoveDecision();
    buttonClicked(chosenMove);
};
/**
 * Завершение игры и изменение счета
 * @param {int} num - индекс тройки в массиве combinations
 */
function endGame(num) {
    gameOver = true;
    document.getElementById(combinations[num][0]).style.backgroundColor = "#78290f";
    document.getElementById(combinations[num][1]).style.backgroundColor = "#78290f";
    document.getElementById(combinations[num][2]).style.backgroundColor = "#78290f";
    if (winner == "Player") score[0]++;
    if (winner == "Computer") score[1]++;
    document.getElementById("score").innerText = `${score[0]} : ${score[1]}`;
    for (let i = 0; i < 9; i++) {
        if (!checkIfEmpty(i)) {
            document.getElementById(i).classList.remove("o-button");
            document.getElementById(i).classList.remove("x-button");
            document.getElementById(i).disabled = true;
        }
    }
}
/**
 * Получение случайного элемента массива
 * @param {Array} list - массив
 * @return {any} произвольный элемент массива
 */
function getRandomElement(list) {
    return list[Math.floor((Math.random() * list.length))];
};
/**
 * Проверка на наличие победителя, если такой найдется - вызовет endGame()
 */
function checkResults() {
    for (let i = 0; i < combinations.length; i++) {
        let result = checkCombination(combinations[i]);
        if (result == 1) {
            winner = "Player";
            endGame(i);
            return;
        }
        if (result == 2) {
            winner = "Computer";
            endGame(i);
            return;
        }
    }
};
/**
 * Проверяет, являются ли ячейки из тройки одновременно отключенными и одного класса
 * @param {Array} list - тройка индексов
 * @return {int} 0: не все отключены, 1: отключены и класса x-button, 2: отключены и класса o-button
 */
function checkCombination(list) {
    if (document.getElementById(list[0]).disabled &&
        document.getElementById(list[1]).disabled &&
        document.getElementById(list[2]).disabled &&
        document.getElementById(list[0]).className == document.getElementById(list[1]).className &&
        document.getElementById(list[1]).className == document.getElementById(list[2]).className) {
        if (document.getElementById(list[0]).className == "x-button")
            return 1;
        return 2;
    }
    return 0
};
/**
 * Обновляет поле и все параметры
 */
function resetGame() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).disabled = false;
        document.getElementById(i).classList.remove("x-button");
        document.getElementById(i).classList.remove("o-button");
        document.getElementById(i).classList.add("x-button");
        document.getElementById(i).style.backgroundColor = "#15616d";
    }
    if (winner == "none") {
        score[1]++;
        document.getElementById("score").innerText = `${score[0]} : ${score[1]}`;
    }
    winner = "none";
    turn = 0;
    gameOver = false;
};
/**
 * Компьютер принимет решение, куда поставить o
 * @return {int} ячейка, в которую надо поставить o
 */
function makeMoveDecision() {
    let winMove = checkEveryPair("o-button");
    if (winMove != -1) {
        return winMove;
    }
    let notLoseMove = checkEveryPair("x-button");
    if (notLoseMove != -1) {
        return notLoseMove;
    }
    if (turn == 1) {
        if (checkIfSet(4, "x-button")) {
            return getRandomElement([0, 2, 6, 8]);
        }
        if (checkIfSet(1, "x-button")) {
            return getRandomElement([0, 2]);
        }
        if (checkIfSet(3, "x-button")) {
            return getRandomElement([0, 6]);
        }
        if (checkIfSet(7, "x-button")) {
            return getRandomElement([6, 8]);
        }
        if (checkIfSet(5, "x-button")) {
            return getRandomElement([2, 8]);
        }
        return 4;
    }
    if (turn == 3) {
        if (checkIfSet(0, "x-button") && checkIfSet(8, "x-button")) {
            return getRandomElement([3, 5]);
        }
        if (checkIfSet(2, "x-button") && checkIfSet(6, "x-button")) {
            return getRandomElement([3, 5]);
        }
    }
    let possibleMoves = [];
    for (let i = 0; i < 9; i++) {
        if (checkIfEmpty(i)) {
            possibleMoves.push(i)
        }
    }
    console.log(possibleMoves);
    return getRandomElement(possibleMoves);
};
/**
 * Проверка каждой пары на то, требуется ли ее дополнить до тройки
 * @param {String} code - "x-button" или "o-button"
 * @return {Boolean} индекс ячейки или -1, если такая отсутствует
 */
function checkEveryPair(code) {
    for (let i = 0; i < combinations.length; i++) {
        let triplet = combinations[i];
        if (checkIfSet(triplet[0], code) && checkIfSet(triplet[1], code) && checkIfEmpty(triplet[2])) {
            return triplet[2];
        }
        if (checkIfSet(triplet[0], code) && checkIfEmpty(triplet[1]) && checkIfSet(triplet[2], code)) {
            return triplet[1];
        }
        if (checkIfEmpty(triplet[0]) && checkIfSet(triplet[1], code) && checkIfSet(triplet[2], code)) {
            return triplet[0];
        }
    }
    return -1;
};
