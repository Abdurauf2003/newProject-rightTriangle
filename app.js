function getResult() {
    var a = parseInt(document.getElementById("leg-a").value);
    var b = parseInt(document.getElementById("leg-b").value);
    var c = parseInt(document.getElementById("hyp-c").value);
    if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
        var s = (a * b) / 2;
        var p = a + b + c;
    } else {
        alert("The sum of any two sides should be more than the third side!");
    }
    document.getElementById("res-s").innerText = s;
    document.getElementById("res-p").innerText = p;
}