function clickBtn() {
    let x = document.body;
    let y = document.getElementById("btn");
    let z = document.getElementById("circle");

    if (x.style.background === "white") {
        x.style.background = "black";
        y.style.background = "white";
        z.style.background = "black";
        z.style.left = "45px";
    } else {
        x.style.background = "white";
        y.style.background = "black";
        z.style.background = "white";
        z.style.left = "5px";
    }
}
