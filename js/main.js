let inputs = document.querySelectorAll(".input");
let operators = document.querySelectorAll(".operator");
let show = document.querySelector(".show");
let result = document.querySelector(".result");
let clearBtn = document.querySelector(".clear");
let deletBtn = document.querySelector(".delete");

inputs.forEach(input => {
    
    input.addEventListener("click", function (e) {

        show.value = show.value == 0 ? "" : show.value;
        show.value = show.value + Number(e.target.innerText);
        
    });
    
});

operators.forEach(operator => {
    
    operator.addEventListener("click", function (o) {

        show.value = show.value == 0 ? 0 : show.value + o.target.innerText;
        
    });

});

result.addEventListener("click", function () {
    
    show.value = show.value == "" ? 0 : eval(show.value);
    show.value = show.value == "Infinity" ? 0 : show.value;

});

clearBtn.addEventListener("click", function () {
    
    show.value = "0";

});

deletBtn.addEventListener("click", function () {
    
    show.value = show.value.slice(0, -1);
    show.value = show.value == "" ? 0 : show.value;

});