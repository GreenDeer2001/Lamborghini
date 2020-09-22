const carSlider = document.querySelector(".car-slider");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const btnOpen = document.querySelector(".open");
const navSlider = document.querySelector(".nav-slider");

let actualPosition= -20;
const imageWidth = 20;



left.addEventListener("click", ()=>{

    carSlider.style.transition ="all 0.3s linear";
    carSlider.style.transform =`translateX(${actualPosition + imageWidth}%)`;
    actualPosition += imageWidth;

    moveHelper();
})


right.addEventListener("click", ()=>{
    carSlider.style.transition ="all 0.3s linear";
    carSlider.style.transform =`translateX(${actualPosition - imageWidth}%)`;
    actualPosition -= imageWidth;

    moveHelper();
})

function moveHelper(){
            if(actualPosition === 0){actualPosition = -60;}
            else if(actualPosition === -80){actualPosition = -20;};
      
            setTimeout(() => {
            carSlider.style.transition ="none";
            carSlider.style.transform =`translateX(${actualPosition}%)`;
        },300);      
    }

    btnOpen.addEventListener('click', () => {
        navSlider.classList.toggle("show-slider");
    })

