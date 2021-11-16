var listHoveringLogo = document.getElementsByClassName('descImageLogo');

for (const i of listHoveringLogo) {
    i.addEventListener('mouseover',()=>{
        i.style.filter='invert(0%)';
    });
    i.addEventListener('mouseleave',()=>{
        i.style.filter='invert(50%)';
    });
    i.style.transition='filter 0.7s';
}