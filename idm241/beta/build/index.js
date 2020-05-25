window.onload = function()
{
   window.onscroll = function()
   {
       stickynav();
//       stickyfilters();
   }
}

//the topbar itself
const topbar = document.getElementById('topbar');

//offset position of topbar
let offset = topbar.offsetTop;

//filters list
const filters = document.getElementById('filters');

let filteroffset = filters.offsetTop;

//make the nav bar sticky
function stickynav() {    
    if (window.pageYOffset >= offset) {
        topbar.classList.add('sticky');
    }
    else {
        topbar.classList.remove('sticky');
    }
}

//function stickyfilters() {
//    if (window.pageYOffset >= filteroffset) {
//        filters.classList.add('stickyfilters');
//    }
//    else {
//        filters.classList.remove('stickyfilters');
//    }
//}