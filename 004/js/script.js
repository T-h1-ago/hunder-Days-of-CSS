// alert(`I am working`);

let framework = document.querySelector(".frame");
let circles = document.querySelector(".circles")
let circleExternal = document.querySelector(".circle-external");
let circleMedium = document.querySelector(".circle-medium");
let circleInternal = document.querySelector(".circle-internal");

let array = [ framework, circles, circleExternal, circleMedium, circleInternal ];
array.forEach(el => {
    console.log(el);
});

