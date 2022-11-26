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

constDel = document.querySelector('#delete');
constDel.addEventListener('click', ()=>{
    
    if(output.value[output.value.length -1] == '.'){
        output.value = output.value.slice(0,-1);
        allowDecimal = true;
    }
    else{
        output.value = output.value.slice(0,-1);
    }
})


let allowDecimal = true;

function displayDecimal(value){
    if (allowDecimal) {
        output.value += value
        allowDecimal = false
    }
}

