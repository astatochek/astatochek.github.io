for (let i = 0; i < 9; i++){
    document.getElementById(i).addEventListener("click", () => (buttonClicked(i)))
}
function buttonClicked(num){
    document.getElementById(num).disabled = true;
    console.log(1);
}