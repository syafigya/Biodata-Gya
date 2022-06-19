let i = 1;

function action(panah) {
    document.getElementById("img-" + i).style.display = "none";

    if (panah === "kiri") {
        i--;
        if (i <=0) {
            i = 3;
        }
    }
    else if (panah === "kanan") {
        i++;
        if (i > 3) {
            i = 1;
        }
    }
    document.getElementById("img-" + i).style.display = "flex";
}