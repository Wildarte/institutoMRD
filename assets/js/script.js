const btn_mobile = document.querySelector('.btn_menu');
const menu_mobile = document.querySelector('nav.menu');
const close_menu = document.getElementById('close_menu'); 

btn_mobile.addEventListener('click', () => {

    menu_mobile.classList.toggle('open_menu_mobile');
   
});

close_menu.addEventListener('click', () => {

    menu_mobile.classList.remove('open_menu_mobile');
   
});

function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

//function to verify if element is on screen
function isOnScreen(el){
    let rect = el.getBoundingClientRect();
    return rect.top > 0 && rect.bottom < window.innerHeight;
}

let count1 = 3000;
let valor1 = 4013;

let count2 = 0;
let valor2 = 67;

let count3 = 0;
let valor3 = 13;
      
let count4 = 0;
let valor4 = 22;
addEventListener('scroll', (e) => {

    if(isOnScreen(document.getElementById('count1'))){
        
        
        setInterval(function(){

            if(count1 <= valor1){
                document.getElementById('count1').innerText = ''+count1+'';
                count1 += 1;
            }
            
        } , 20);
    }  

    if(isOnScreen(document.getElementById('count2'))){
        
        setInterval(function(){

            if(count2 <= valor2){
                document.getElementById('count2').innerText = ''+count2+'';
                count2 += 1;
            }
            
        } , 100);
    }  


    if(isOnScreen(document.getElementById('count3'))){    
      
        setInterval(function(){

            if(count3 <= valor3){
                document.getElementById('count3').innerText = ''+count3+'';
                count3 += 1;
            }
            
        } , 250);
    }  

    if(isOnScreen(document.getElementById('count4'))){    
      
        setInterval(function(){

            if(count4 <= valor4){
                document.getElementById('count4').innerText = ''+count4+'';
                count4 += 1;
            }
            
        } , 50);
    }


    
});