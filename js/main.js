const id = document.getElementById("id");
const advice = document.getElementById("advice");
const icon = document.querySelector(".icon");

icon.addEventListener("click", e=> {
    cargarApi();
})

cargarApi();

function cargarApi() {
    fetch('https://api.adviceslip.com/advice')
    .then(response=>response.json())
    .then(data => {
        advice.innerHTML = data.slip.advice;
        id.innerHTML = data.slip.id;
    })
} 