var gradient = document.getElementsByClassName("gradient");

function backToTop() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}

document.getElementById("length").innerText = $(".gradient").length;

function textHide() {
    for (var e = 0; e < gradient.length; e++) "" == gradient[e].innerText ? window.location.reload() : (gradient[e].innerText = "", document.querySelector(".hideText").innerText = "Show Text")
}

function expand() {
    for (var e = 0; e < gradient.length; e++) "6rem" == gradient[e].style.height ? (gradient[e].style.height = "4rem", document.querySelector(".expand").innerText = "Expand") : (gradient[e].style.height = "6rem", document.querySelector(".expand").innerText = "Shorten")
}

$(document).ready(function() {
    $(".close").click(function() {
        $(".new").hide()
    })
});

function hoverFullscreen() {
    for (var e = 0; e < gradient.length; e++) gradient[e].classList.contains("hover") ? (gradient[e].classList.remove("hover"), document.querySelector(".hoverBtn").innerText = "Hover // Off", document.querySelector(".toTopBtn").innerText = "↑", document.querySelector(".toTopBtn").style.fontSize = "15px", document.querySelector(".toTopBtn").style.padding = "10px 15px", document.querySelector(".toTopBtn").style.border = "none", document.querySelector(".toTopBtn").style.background = "linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%)", document.querySelector(".toTopBtn").style.lineHeight = "normal", document.querySelector(".toTopBtn").setAttribute("onClick", "javascript: backToTop();")) : (gradient[e].classList.add("hover"), document.querySelector(".hoverBtn").innerText = "Hover // On", document.querySelector(".toTopBtn").innerText = "×", document.querySelector(".toTopBtn").style.fontSize = "30px", document.querySelector(".toTopBtn").style.padding = "15px 10px", document.querySelector(".toTopBtn").style.paddingBottom = "20px", document.querySelector(".toTopBtn").style.border = "1.5px solid black", document.querySelector(".toTopBtn").style.background = "transparent", document.querySelector(".toTopBtn").style.lineHeight = "0", document.querySelector(".toTopBtn").setAttribute("onClick", "javascript: Boo();"))
}

function circle() {
    for (var a = 0; a < gradient.length; a++) gradient[a].classList.contains("circle-gradient") ? gradient[a].classList.remove("circle-gradient") : gradient[a].classList.add("circle-gradient")
}

function square() {
    for (var a = 0; a < gradient.length; a++) gradient[a].classList.contains("square-gradient") ? gradient[a].classList.remove("square-gradient") : gradient[a].classList.add("square-gradient")
};

$.each($('.gradient'), function(ind) {
    $(this).attr('id', 'pd-' + parseInt(ind + 1));
 });