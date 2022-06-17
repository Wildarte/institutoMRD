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