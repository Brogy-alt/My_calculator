let button = document.querySelector("button");
// Output

let output = document.querySelector('#output');
function display(arg) {
    output.value += arg;
}

function displayOp(arg) {
    output.value += arg;
    allowDecimal = true
}

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener('click', ()=>{
    if (output !== ''){
        // calculate if there is a value in the screen
        output.value = eval(output.value);

        if (output.value.includes('.')) {
            allowDecimal = false
        } else allowDecimal = true
    }
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', ()=>{
    if (output !== ''){
        output.value = "";
        allowDecimal = true;
    }
})


let allowDecimal = true;

function displayDecimal(value){
    if (allowDecimal) {
        output.value += value
        allowDecimal = false
    }
}

