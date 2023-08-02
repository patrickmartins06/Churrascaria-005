let slide = document.querySelectorAll('.slide');
var current = 0;

function cls(){
    for(let i = 0; i < slide.length; i++){
        slide[i].style.display = 'none';
    }
}

function next(){
    cls();
    if(current === slide.length-1) current = -1;
    current++
    slide[current].style.display = 'block';
    
    var x = 0.8;
    var intX = setInterval(function(){
        x+=0.1;
        
        if(x >= 1){
            clearInterval(intX)
            x = 0.8;
        }
    }, 100);

}


function prev(){
    cls();
    if(current === 0) current = slide.length;
    current--;
    slide[current].style.display = 'block';
    slide[current].style.opacity = 0.8;
    var x = 0.8;
    var intX = setInterval(function(){
        x+=0.1;
        slide[current].style.opacity = x;
        if(x >= 1){
            clearInterval(intX)
            x = 0.8;
        }
    }, 100);

}

function start(){
    cls();
    slide[current].style.display = 'block';
}
start();

/* Segundo slide */

let slide2 = document.querySelectorAll('.slide2');
var current2 = 0;

function cls2(){
    for(let i = 0; i < slide2.length; i++){
        slide2[i].style.display = 'none';
    }
}

function next2(){
    cls2();
    if(current2 === slide2.length-1) current2 = -1;
    current2++
    slide2[current2].style.display = 'block';
    
    var x22 = 0.8;
    var intX22 = setInterval(function(){
        x22+=0.1;
        
        if(x2 >= 1){
            clearInterval(intX2)
            x2 = 0.8;
        }
    }, 100);

}


function prev2(){
    cls2();
    if(current2 === 0) current2 = slide2.length;
    current2--;
    slide2[current2].style.display = 'block';
    slide2[current2].style.opacity = 0.8;
    var x2 = 0.8;
    var intX2 = setInterval(function(){
        x2+=0.1;
        slide2[current2].style.opacity = x2;
        if(x2 >= 1){
            clearInterval(intX2)
            x2 = 0.8;
        }
    }, 100);

}

function start2(){
    cls2();
    slide2[current2].style.display = 'block';
}
start2();






