var overlay = document.querySelector('.overlay');
var overlay1 = document.querySelector('.overlay1');
var overlay2 = document.querySelector('.overlay2');
var overlay3 = document.querySelector('.overlay3');

setTimeout(() => {
    overlay.style.right= "100%";
    overlay.style.opacity= "0";
    overlay1.style.right= "100%";
    overlay1.style.opacity= "0";
    overlay2.style.right= "100%";
    overlay2.style.opacity= "0";
    overlay3.style.right= "100%";
    overlay3.style.opacity= "0";
}, 500);

var iconHead = document.querySelectorAll('.body__header-icon img');
document.addEventListener('mousemove',e=>{
    iconHead.forEach(a =>{
        a.style.transform = "translateX(10px)";
        var data = a.getAttribute('data-speed');
        // var x = a.client
        var x = (e.clientX * data) / 100;
        var y = (e.clientY * data) / 100;
        a.style.transform = "translateX("+ x +"px) translateY("+ y +"px)";

    })
})


var lenght = document.querySelectorAll('.body__header-name--text path');
var i = 1;
lenght.forEach(a=>{
        a.style.strokeDasharray = ''+a.getTotalLength()+'px';
        a.style.strokeDashoffset = ''+a.getTotalLength()+'px';
})

var aniHead = document.querySelector('.body__header-bottom--ani');
var botHead = document.querySelector('.body__header-bottom');
var checkAni = 0;

var headerWidth = document.querySelector('.body__header-bottom');
window.addEventListener('scroll', e=>{
    let scroll = parseInt(scrollY);
    if(scroll > 1){
        headerWidth.style.opacity = "0";
    }
    else {
        headerWidth.style.opacity = "1";
    }
})
var bodymiddleworkslink = document.querySelectorAll('.body__middle-works--link');
var bodymiddleworkscard = document.querySelectorAll('.body__middle-works--card')
bodymiddleworkslink.forEach(a=>{
    a.addEventListener('click',e=>{
        console.log(a.textContent);
        e.preventDefault();
        if(document.querySelector('.body__middle-works--link--active') !== null){
            bodymiddleworkslink.forEach(b=>{
                b.classList.remove('body__middle-works--link--active');
            })
            a.classList.add('body__middle-works--link--active');
        }
        bodymiddleworkscard.forEach(p=>{
            if(p.getAttribute("data-name").toUpperCase() === a.textContent){
                if(document.querySelectorAll('.show')!== null){
                    console.log("check");
                    bodymiddleworkscard.forEach(t=>{
                        p.classList.add("hide");
                        p.classList.remove("show");
                    })
                }
                setTimeout(() => {
                    p.classList.remove("hide");
                    p.classList.add("show");
                }, 1);
            }
            else if(a.textContent === "ALL") {
                if(document.querySelectorAll('.show')!== null){
                    console.log("check");
                    bodymiddleworkscard.forEach(t=>{
                        p.classList.add("hide");
                        p.classList.remove("show");
                    })
                }
                setTimeout(() => {
                    p.classList.remove("hide");
                    p.classList.add("show");
                }, 1);
            }
            else {
                p.classList.remove("show");
                p.classList.add("hide");
            }
        })
    })
})

var btnLeft = document.querySelector('.body__middle-testimonial--btn.left');
var btnRight = document.querySelector('.body__middle-testimonial--btn.right');
var slider = document.querySelectorAll('.body__middle-testimonial--slider');

// console.log(slider);
btnLeft.style.opacity = 0.5;


var dem = 0;
btnLeft.addEventListener('click',e=>{
let widthSlider = slider[0].getBoundingClientRect();
    console.log(dem);
    e.preventDefault();
    if(dem>0 && dem<slider.length){
        dem--;   
        slider.forEach(s=>{
            s.style.transform = 'translateX(-'+widthSlider.width*dem+'px)';
        })
    }
    if(dem===0){
        btnLeft.style.opacity = 0.5;
    }
    if(dem<slider.length){
        btnRight.style.opacity = 1;  
    }
})
btnRight.addEventListener('click',e=>{
let widthSlider = slider[0].getBoundingClientRect();
    e.preventDefault();
    // console.log(dem);
    if(dem < slider.length-1){
        dem++;
        btnLeft.style.opacity = 1; 
        btnRight.style.opacity = 1;  
        slider.forEach(s=>{
            s.style.transform = 'translateX(-'+widthSlider.width*dem+'px)'
        })
    }
    else if(dem === slider.length-1){
        dem = slider.length-1;
    }
    if(dem === slider.length-1){
        btnRight.style.opacity = 0.5;
    }
})