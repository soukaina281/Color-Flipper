const colors = ["black", "white", "red", "green", "blue", "purple", "yellow", "maroon", "orange"];

let color = document.querySelector(".color");
let btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    let newColor = colors[getRandomNumber()];
    color.textContent = newColor;
    // color.style.color = newColor;
    document.body.style.backgroundColor = newColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}