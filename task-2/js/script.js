let turn = 0;
let gameOver = false;
let winner = "none";
let score = [0, 0];
let combinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
for (let i = 0; i < 9; i++){
    document.getElementById(i).addEventListener("click", () => (buttonClicked(i)));
}
document.getElementById("reset").addEventListener("click", () => (resetGame()));
/**
 * Делает выбранную ячейку выбранной (disabled) 
 * @param {int} num - индекс ячейки (0-8)
 */
function buttonClicked(num){
    document.getElementById(num).disabled = true;
    nextTurn();
}
/**
 * Меняет стиль всех ячеек с x-button на o-button или наоборот
 */
function nextTurn(){
    checkResults();
    if (gameOver == true)
        return;
    turn++;
    isComputerTurn = (turn % 2 == 1);
    for (let i = 0; i < 9; i++){
        if (!document.getElementById(i).disabled){
            if (isComputerTurn){
                document.getElementById(i).classList.remove("x-button");
                document.getElementById(i).classList.add("o-button")
            }
            else{
                document.getElementById(i).classList.remove("o-button");
                document.getElementById(i).classList.add("x-button")
            }
        }
    }
    if (isComputerTurn)
        makeComputerTurn();
}
/**
 * Компьютер выбирает ячейку для своего хода и передает ход игроку
 */
function makeComputerTurn(){
    let possibleMoves = [];
    for (let i = 0; i < 9; i++){
        if (!document.getElementById(i).disabled){
            possibleMoves.push(i)
        }
    }
    if (possibleMoves.length == 0){
        checkResults()
        return;
    }
    let chosenMove = getRandomElement(possibleMoves);
    buttonClicked(chosenMove);
}
/**
 * Завершение игры и вывод победителя
 * @param {int} num - индекс тройки в массиве combinations
 */
function endGame(num){
    gameOver = true;
    document.getElementById(combinations[num][0]).style.backgroundColor = "#78290f";
    document.getElementById(combinations[num][1]).style.backgroundColor = "#78290f";
    document.getElementById(combinations[num][2]).style.backgroundColor = "#78290f";
    if (winner == "Player") score[0]++;
    if (winner == "Computer") score[1]++;
    document.getElementById("score").innerText = `${score[0]} : ${score[1]}`;
    for (let i = 0; i < 9; i++){
        if (!document.getElementById(i).disabled){
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
}
/**
 * Проверка на наличие победителя, если такой найдется - вызовет endGame()
 */
function checkResults(){
    for (let i = 0; i < combinations.length; i++){
        let result = checkCombination(combinations[i]);
        if (result == 1){
            winner = "Player";
            endGame(i);
            return;
        }
        if (result == 2){
            winner = "Computer";
            endGame(i);
            return;
        }
    }
}
/**
 * Проверяет, являются ли ячейки из тройки одновременно отключенными и одного класса
 * @param {Array} list - тройка индексов
 * @return {int} 0: не все отключены, 1: отключены и класса x-button, 2: отключены и класса o-button
 */
function checkCombination(list){
    if (document.getElementById(list[0]).disabled && 
        document.getElementById(list[1]).disabled &&
        document.getElementById(list[2]).disabled &&
        document.getElementById(list[0]).className == document.getElementById(list[1]).className &&
        document.getElementById(list[1]).className == document.getElementById(list[2]).className){
        if (document.getElementById(list[0]).className == "x-button")
            return 1;
        return 2;
    }
    return 0
}
/**
 * Обновляет поле и все параметры
 */
function resetGame(){
    for (let i = 0; i < 9; i++){
        document.getElementById(i).disabled = false;
        document.getElementById(i).classList.remove("x-button");
        document.getElementById(i).classList.remove("o-button");
        document.getElementById(i).classList.add("x-button");
        document.getElementById(i).style.backgroundColor = "#15616d";
    }
    winner = "none";
    turn = 0;
    gameOver = false;
}