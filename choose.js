let btn = document.querySelector(".clickbtn");
let tryAgain = document.querySelector(".againbtn");
let span = document.querySelector(".container span");

btn.addEventListener("click", function(){
    let color = document.querySelector("input").value;
    let pattern = /[0-9A-Fa-f]/;
    let colorArray = color.split("");
    console.log(typeof colorArray[1]);
    let valide;
    if(color.length < 6){
        alert("lenght must be 6");
    }
    else{
        for(let i = 0; i < 6; i++){
            if(pattern.test(colorArray[i])){
                valide = true;
            }
            else {
                valide = false;
                break;
            }
        }
        if(valide){
            span.textContent = "#" + color;
            // span.style.color = "#" + color;
            document.body.style.backgroundColor = "#" + color;
        }
        else{
            alert("invalid format (hex color contains numbers and letters A-F)")
        }
    }
    
    
});
tryAgain.addEventListener("click", function(){
    span.textContent = "#"
    let input = document.createElement("input");
    input.setAttribute("type","type");
    input.setAttribute("maxlength","6");
    input.setAttribute("minlength","6");
    span.append(input);
});