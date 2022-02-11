let mouse = document.querySelector('.cursor');
let mouse2 = document.querySelector('.cursor2');
window.addEventListener("mousemove" , (e)=>{
    mousemagic();

    function mousemagic() {
        mouse.style.top = e.pageY + "px";
        mouse.style.left = e.pageX + "px";
        mouse2.style.top = e.pageY + "px";
        mouse2.style.left = e.pageX + "px";
    }
});
//nav
const list = document.querySelectorAll('.list');
const ani =document.querySelector('.ani');

function active(){
    list.forEach((i)=>
    i.classList.remove('active'));
    this.classList.add('active');
    
    }
    list.forEach((i)=>
        i.addEventListener("click" , active ));     
