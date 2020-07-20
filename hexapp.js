const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const colorName = document.getElementById("color");

btn.addEventListener("click", changeColor);

function changeColor(){
    let color = "#";
    for(let i = 0; i < 6; i++){
        let ran = Math.floor(Math.random()* hex.length);
        color += hex[ran]
    }
    document.body.style.background = color;
    colorName.innerHTML = color;
}