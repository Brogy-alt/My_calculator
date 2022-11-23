let button = document.querySelector("button");
// Output

let output = document.querySelector('#output');
function display(arg) {
    output.value += arg;
}

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener('click', ()=>{
    if (output !== ''){
        // calculate if the is a value in the screen
        output.value = eval(output.value);
    }
})

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener('click', ()=>{
    if (output !== ''){
        // calculate if the is a value in the screen
        output.value = "";
    }
})

