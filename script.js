const theSun = document.querySelector(".sun");
const mercury = document.querySelector(".mercury");
const venus = document.querySelector(".venus");
const earth = document.querySelector(".earth");
const mars = document.querySelector(".mars");
const jupiter = document.querySelector(".jupiter");
const saturn = document.querySelector(".saturn");
const uranus = document.querySelector(".uranus");
const neptune = document.querySelector(".neptune");

function redirection () {
    theSun.addEventListener("click", function(){
        location.href = "sun.html";
    });
    mercury.addEventListener("click", function(){
        location.href = "mercury.html";
    });
    venus.addEventListener("click", function(){
        location.href = "venus.html";
    });
    earth.addEventListener("click", function(){
        location.href = "earth.html";
    });
    mars.addEventListener("click", function(){
        location.href = "mars.html";
    });
    jupiter.addEventListener("click", function(){
        location.href = "jupiter.html";
    });
    saturn.addEventListener("click", function(){
        location.href = "saturn.html";
    });
    uranus.addEventListener("click", function(){
        location.href = "uranus.html";
    });
    neptune.addEventListener("click", function(){
        location.href = "neptune.html";
    });

}

function init () {
    redirection();
}

init();