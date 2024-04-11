function increaseCounter() {
    let count = Number(localStorage.getItem("count")) || 0;
    count += 1;
    localStorage.setItem("count", count);
    document.getElementById("score").innerHTML = count;
}
function decreaseCounter() {
    let count = Number(localStorage.getItem("count")) || 0;
    count -= 1;
    localStorage.setItem("count", count);
    document.getElementById("score").innerHTML = count;
}
function clearCounter() {
    localStorage.clear();
    document.getElementById("score").innerHTML = "0";
}