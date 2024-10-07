var selector = document.getElementById("selector");
selector.addEventListener("change", function(event) {
    var value = event.target.value;

    document.getElementById("actividad-trekking").style.display = "none";
    document.getElementById("actividad-natacion").style.display = "none";
    document.getElementById("actividad-ferry").style.display = "none";

    switch (value) {
        case "Trekking":
            document.getElementById("actividad-trekking").style.display = "block";
            break;
        case "Natación":
        document.getElementById("actividad-natacion").style.display = "block";
            break;
        case "Ferry":
            document.getElementById("actividad-ferry").style.display = "block";
    }
})