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
        // console.log(a.textContent);

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
                    // console.log("check");
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
                    // console.log("check");
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
    // console.log(dem);
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

var bodymiddlearticlescard = document.querySelectorAll('.body__middle-articles--card');
var bodymiddlearticlesblur = document.querySelectorAll('.body__middle-articles--blur');
var bodymiddlearticlesblursan = document.querySelectorAll('.body__middle-articles--blur span')
for(let i=0;i<bodymiddlearticlescard.length;i++){
    bodymiddlearticlescard[i].addEventListener('mouseenter',e=>{
        bodymiddlearticlesblur[i].style.opacity = "1";
     //   console.log(bodymiddlearticlesblur[i])
    if(i === 0){
        bodymiddlearticlesblursan[0].style.opacity = 1;
        bodymiddlearticlesblursan[0].style.transform ="translateX(0)";
        bodymiddlearticlesblursan[1].style.opacity = 1;
        bodymiddlearticlesblursan[1].style.transform ="translateX(0)";
    }
    else if(i === 1){
        bodymiddlearticlesblursan[2].style.opacity = 1;
        bodymiddlearticlesblursan[2].style.transform ="translateX(0)";
        bodymiddlearticlesblursan[3].style.opacity = 1;
        bodymiddlearticlesblursan[3].style.transform ="translateX(0)";
    }
    else if(i === 2){
        bodymiddlearticlesblursan[4].style.opacity = 1;
        bodymiddlearticlesblursan[4].style.transform ="translateX(0)";
        bodymiddlearticlesblursan[5].style.opacity = 1;
        bodymiddlearticlesblursan[5].style.transform ="translateX(0)";
    }
    })
}

for(let i=0;i<bodymiddlearticlescard.length;i++){
    bodymiddlearticlescard[i].addEventListener('mouseleave',e=>{
        bodymiddlearticlesblur[i].style.opacity = "0";
     //   console.log(bodymiddlearticlesblur[i])
        bodymiddlearticlesblursan.forEach(s=>{
            s.style.opacity=0;
            s.style.transform = "translateY(10px)";
        })
    })
}
var btn = document.querySelector('.btn__responsive');
var btn1 = document.querySelectorAll('.btn__responsive span');
var nav = document.querySelector('.nav');
var body = document.querySelector('.body');
var overlay4 = document.querySelector('.overlay4');
btn.addEventListener('click',e=>{
    btn1.forEach(b1=>{
        b1.classList.toggle('open');
    })
    nav.classList.toggle('nav1');
    overlay4.classList.toggle('hide');
})

var bodyheader = document.querySelector('.body__header');
var bodymiddleservice = document.querySelector('.body__middle-service');
var bodymiddleworks = document.querySelector('.body__middle-works');
var bodymiddletestimonial = document.querySelector('.body__middle-testimonial');
var bodymiddleexperience = document.querySelector('.body__middle-experience');
var bodymiddlearticles = document.querySelector('.body__middle-articles');
var bodymiddleinfo = document.querySelector('.body__middle-info');
var listnav_bar = document.querySelectorAll('.nav__about-menu--link');
window.addEventListener('scroll',e=>{
    var scrollList = document.querySelectorAll('.list__scroll');
    let y = window.pageYOffset;
    let current = '';
    scrollList.forEach(s=>{
        if(y >= s.offsetTop - 10  && y < s.offsetTop + s.offsetHeight ){
            current = s.getAttribute('id');
        } 
        listnav_bar.forEach(l=>{
            l.classList.remove('nav__menu-active');
            if(l.classList.contains(current)){
                l.classList.add('nav__menu-active');
            }
        })
    })
})

