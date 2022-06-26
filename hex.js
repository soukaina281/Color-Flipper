const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let color = document.querySelector(".color");
let btn = document.querySelector(".btn")

btn.addEventListener("click", function(){
    let newColor = "#";
    for(let i = 0; i < 6; i++){
        newColor += hex[getRandomNumber()];
    }
    color.textContent = newColor;
    // color.style.color = newColor;
    document.body.style.backgroundColor = newColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}