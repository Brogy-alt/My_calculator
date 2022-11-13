let button = document.querySelector("button")

button.addEventListener("click", numb);

function numb(event) {
    let window = document.querySelector(".window")
    window.innerHTML = button.value

}

