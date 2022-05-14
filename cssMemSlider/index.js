let indexValue = 1;
showImg(indexValue)
function btm_slide(e){
    showImg(indexValue = e)
}
function showImg(e){
    let i
    const img = document.querySelectorAll("img")
    const sliders = document.querySelectorAll(".btm-sliders span")
    const text = document.querySelectorAll(".text p")
    if (e > img.length){
        indexValue = 1
    }
    if(e < 1){
        indexValue = img.length
    }
    for(i = 0; i< img.length; i++){
        img[i].style.display = "none"
    }
    for(i = 0; i< sliders.length; i++){
        sliders[i].style.background = "rgb(1, 7, 100)"
    }
    for(i = 0; i< text.length; i++){
        text[i].style.display = "none"
    }
    img[indexValue-1].style.display = "block"
    text[indexValue-1].style.display = "block"
    sliders[indexValue-1].style.background = "rgb(58, 57, 57)"
}