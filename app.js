const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colorName = document.getElementById("color")

btn.addEventListener("click", colorChange);

function colorChange(){
    let num = Math.floor(Math.random()* colors.length);
    console.log(colors[num])
    document.body.style.background = colors[num];
    colorName.innerHTML = colors[num];
};