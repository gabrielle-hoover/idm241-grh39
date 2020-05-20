const buttons = document.getElementsByClassName("toggle"); 
const lists = document.getElementsByClassName("list");
    
for(let i=0; i<buttons.length; i++){
buttons[i].addEventListener('click', function() {
    rotate(i);
    toggle(i);
})};
    
function toggle(i) {
    if(lists[i].classList.contains("hide")) {
        lists[i].classList.remove("hide");
    }
    else {
        lists[i].classList.add("hide");
    }
}
    
function rotate(i) {
    if(buttons[i].classList.contains('rotated')) {
            buttons[i].classList.remove('rotated');
    }
    else {
        buttons[i].classList.add('rotated');
    }
}