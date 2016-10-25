/*
 script.js
 22-10-2016

 Change and save the side choosed by the user on Local Storage.
*/
(function () {
    "use strict";

    var choosedSide = "";
    var html = document.getElementById("html");
    var side = document.getElementsByClassName("side");
    var loadSide = localStorage.getItem("loadSide");

    html.className = loadSide ? loadSide : "";

    Object.keys(side).forEach(function (key) {
        side[key].addEventListener("click", function () {
            html.className = side[key].getAttribute("choosed-side");

            localStorage.setItem("loadSide", html.className);
        });
    });

}());