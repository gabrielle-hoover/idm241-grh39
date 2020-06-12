//INITAL EVENT LISTENER

window.onload = function()
{
    filters.style.display ='none';
    filterIcon.addEventListener("click", togglenav, false);
    window.onscroll = function()
    {
       stickynav();
       stickyfilters();
    }
}

//VARIABLES

//the topbar itself
const topbar = document.getElementById('topbar');

//offset position of topbar
let offset = topbar.offsetTop;

//filters list
const filters = document.getElementById('filters');

//filter icon on mobile
var filterIcon = document.getElementById("filtericon");

//FUNCTIONS

//make the nav bar sticky
function stickynav() {    
    if (window.pageYOffset >= offset) {
        topbar.classList.add('sticky');
    }
    else {
        topbar.classList.remove('sticky');
    }
}

//make the filters div sticky
function stickyfilters() {
    if (window.pageYOffset >= offset) {
        filters.classList.add('stickyfilters');
    }
    else {
        filters.classList.remove('stickyfilters');
    }
}

//toggle mobile menu visibility with filter icon
function togglenav(){
   if (filters.style.display === 'none') {
       filters.style.display='block';
   }
   else {
       filters.style.display='none';
   }
}