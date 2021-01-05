const paralaxWrap = Array.from(document.body.getElementsByClassName("paralax-wrap"));
const paralaxImg = Array.from(document.body.getElementsByClassName("paralax-img"));

const ParalaxStop = ((element) => {
    console.log("fuck");
    setTimeout(ParalaxStop, 2000);
})

paralaxWrap.forEach((element) => {
    element.onmousemove = function getElem(e, element) {
        getCurCoordsInsideRect(e, element);
    }
    element.addEventListener("mouseleave", ParalaxStop)
})

function getCurCoordsInsideRect(e) {
    let x = e.offsetX == undefined ? e.layerX : e.offsetX;
    let y = e.offsetY == undefined ? e.layerY : e.offsetY;
    console.log(x + 'x' + y);
    paralaxWrap[2].style.transform = `rotateY(${((x - 160) / 7)}deg) rotateX(${((y - 205) / 7) * -1}deg)`
    paralaxImg[2].style.transform = `translate(${((x - 200) / 5) * -1}px,${((y - 175) / 5)* -1}px)  scale(1.4)`
}