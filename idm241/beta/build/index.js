window.onload = function()
{
   console.log('loaded');
   window.onscroll = function()
   {
       stickynav();
   }
}

//the topbar itself
const topbar = document.getElementById('topbar');

//offset position of topbar
var offset = topbar.offsetTop;

//make the nav bar sticky
function stickynav() {    
    if (window.pageYOffset >= offset) {
        topbar.classList.add('sticky');
    }
    else {
        topbar.classList.remove('sticky');
    }
} 