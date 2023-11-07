function animateFlowers() {
    "use strict";
    var elements,
        i;

    elements = document.getElementsByClassName("flower-stems");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.height = "50%";
    }

    elements = document.getElementsByClassName("flower-inverted-stems");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.height = "25%";
    }

    elements = document.getElementsByClassName("flower-inner-circles");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.height = "38%";
        elements[i].style.width = "38%";
        elements[i].style.marginLeft = "0";
        elements[i].style.marginBottom = "0";
        elements[i].style.borderWidth = "2px";
    }

    elements = document.getElementsByClassName("flower-outer-circles");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.height = "100%";
        elements[i].style.width = "100%";
        elements[i].style.marginLeft = "-18.75%";
        elements[i].style.marginBottom = "-18.75%";
        elements[i].style.borderWidth = "2px";
    }

    elements = document.getElementsByClassName("flower-left-leaves");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.height = "5%";
        elements[i].style.width = "20%";
        elements[i].style.opacity = "0.8";
    }

    elements = document.getElementsByClassName("flower-right-leaves");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.height = "5%";
        elements[i].style.width = "20%";
        elements[i].style.opacity = "0.8";
    }

    elements = document.getElementsByClassName("flower-heads");
    for (i = 0; i < elements.length; i++) {
        elements[i].style.transform = "translateY(-125%)";
    }

}

function animationSunflower() {
    "use strict";
    document.getElementById("sunflower-stem").style.height = "75%";
    document.getElementById("sunflower-head").style.transform = "translateY(-225%)";
}


setTimeout(function initializeSunflower() {
    "use strict";
    var elements,
        i;
    elements = document.getElementsByClassName("sunflower-petals");
    for (i = 0; i < elements.length; i++) {
        elements[i].className += " sunflower-petals-initialized";
    }

    document.getElementById("sunflower-outer-circle").className += " sunflower-outer-circle-initialized";

}, 2500);

function animateFlower1() {
    "use strict";
    document.getElementById("flower-1-stem").style.height = "33%";
    document.getElementById("flower-1-head").style.transform = "translateY(-100%)";
    document.getElementById("flower-1-inverted-stem").style.height = "25%";
}

function animateFlower2() {
    "use strict";
    document.getElementById("flower-2-stem").style.height = "45%";
    document.getElementById("flower-2-head").style.transform = "translateY(-250%)";
    document.getElementById("flower-2-inverted-stem").style.height = "20%";
}

function animateFlower3() {
    "use strict";
    document.getElementById("flower-3-stem").style.height = "40%";
    document.getElementById("flower-3-head").style.transform = "translateY(-195%)";
    document.getElementById("flower-2-inverted-stem").style.height = "30%";
}

function animateFlower4() {
    "use strict";
    document.getElementById("flower-4-stem").style.height = "42%";
    document.getElementById("flower-4-head").style.transform = "translateY(-220%)";
    document.getElementById("flower-2-inverted-stem").style.height = "40%";
}

setTimeout(function() {
    "use strict";
    animateFlowers();
    animateFlower1();
    animateFlower2();
    animateFlower3();
    animationSunflower();
    animateFlower4();
}, 500);
//🎉

let text;
let person = prompt("Please enter your name: ");
if (person == null || person == "") {

} else {
    text = "Hello " + person + "! How are you today?";
}
prompt("how are you my love " + person);


alert("I hope you like it my love " + person);