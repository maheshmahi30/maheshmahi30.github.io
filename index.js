let dropdownbtn = document.getElementById("dropdownbtn");
let dropdown = document.getElementById("dropdown");


let rightarrow = document.getElementById("rightarrow");
let leftarrow = document.getElementById("leftarrow");

let carousel = document.querySelector(".carousel");

//let carousel = document.getElementById("carousel");

dropdownbtn.addEventListener("click", () =>{
    dropdown.classList.toggle("d-none");
});


const slides = [...carousel.children];
console.log(slides.length);
let slidew = slides[0].getBoundingClientRect().width;
console.log(slidew);




function positionSlide(slides){
    for (let index =0;index < slides.length; index++){
        slides[index].style.left = slidew * index + "px";
    }
}
positionSlide(slides);


rightarrow.addEventListener("click", () =>{
    const curSlide = carousel.querySelector(".active");
    const nextSlide = curSlide.nextElementSibling;
    moveToSlide(carousel, curSlide,nextSlide);
    hideButton(nextSlide,slides);
});

leftarrow.addEventListener("click", () =>{
    const curSlide = carousel.querySelector(".active");
    const prevSlide = curSlide.previousElementSibling;
    moveToSlide(carousel, curSlide,prevSlide);
    hideButton(prevSlide,slides);
});

function moveToSlide(carousel,curSlide,targetSlide){
    const position = targetSlide.style.left;
    carousel.style.transform = `translateX(-${position})`;
    targetActive(curSlide,targetSlide);
}

function targetActive(curSlide,target){
    curSlide.classList.remove("active");
    target.classList.add("active");
}

function hideButton(targetSlide,slides){
    
    if(targetSlide === slides[0]){
        leftarrow.classList.add("d-none");
        rightarrow.classList.remove("d-none");
    }
    else if(targetSlide === slides[slides.length - 5]){
        leftarrow.classList.remove("d-none");
        rightarrow.classList.add("d-none");
    }
    else{
        
        leftarrow.classList.remove("d-none");
        rightarrow.classList.remove("d-none");
    }
}
/*
function findindex(item,items){
    for (let index = 0; index < items.length; index ++){
        if(item === item[index]){
            return index;
        }
    }
}
*/



