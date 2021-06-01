// JavaScript source code
var mybutton = document.querySelector("button");
mybutton.addEventListener("click", function (event) {


    var element = document.getElementsByTagName("div");
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

    // Let us stop the propagation of events

    event.stopPropagation();
});
addEventListener("click", function (event) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    document.body.appendChild(dot);
});
addEventListener("mouseup", function (event) {
    if (event.button == 1) {
        var gdot = document.createElement("div");
        gdot.className = "greenDot";
        gdot.style.left = (event.pageX - 4) + "px";
        gdot.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(gdot);
    }
});