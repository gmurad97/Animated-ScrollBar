var lnrGradientDegree = 0;

function scrlAnimation() {
    lnrGradientDegree++;
    document.body.style.setProperty("--scrlbar", ("linear-gradient(" + lnrGradientDegree + "deg, #576574, #102F2E"));
    if (lnrGradientDegree <= 360) {
        requestAnimationFrame(scrlAnimation);
    }
    else {
        lnrGradientDegree = 0;
        scrlAnimation();
    }
}

window.onload = function () {
    scrlAnimation();
}