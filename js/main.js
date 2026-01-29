let scrollPercent = 0;

function showInfoCard() {

    let iteams = [document.getElementById("abs-1"), document.getElementById("abs-2"), document.getElementById("abs-3"), document.getElementById("abs-4")];
    // console.log(`Scroll Progress: ${scrollPercent.toFixed(0)}%`);
    // console.log(typeof Math.round(scrollPercent));


    if (scrollPercent < 10 || scrollPercent > 100) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 10 && scrollPercent < 35) {
        if (iteams[0]) iteams[0].style.display = "flex";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 35 && scrollPercent < 65) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "flex";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 65 && scrollPercent < 85) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "flex";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 85 && scrollPercent < 90) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "flex";
    }
}
function showInfoCardReverse() {

    let iteams = [document.getElementById("abs-1"), document.getElementById("abs-2"), document.getElementById("abs-3"), document.getElementById("abs-4")];
    // console.log(`Scroll Progress: ${scrollPercent.toFixed(0)}%`);
    // console.log(typeof Math.round(scrollPercent));


    if (scrollPercent < 0 || scrollPercent > 89) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 10 && scrollPercent < 35) {
        if (iteams[0]) iteams[0].style.display = "flex";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 35 && scrollPercent < 65) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "flex";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 65 && scrollPercent < 85) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "flex";
        if (iteams[3]) iteams[3].style.display = "none";
    } else if (scrollPercent > 85 && scrollPercent < 90) {
        if (iteams[0]) iteams[0].style.display = "none";
        if (iteams[1]) iteams[1].style.display = "none";
        if (iteams[2]) iteams[2].style.display = "none";
        if (iteams[3]) iteams[3].style.display = "flex";
    }
}
function startBottom() {
    this.window.scrollTo(0, document.body.scrollHeight);
}

function updateScrollProgress(direction) {

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    scrollPercent = ((scrollTop / scrollHeight) * 100);

    if (direction === "down") {
        showInfoCard();
    } else if (direction === "up") {
        showInfoCardReverse();
    }

}