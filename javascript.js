const navigation = document.getElementById('navbar__list');
// sections global var
const sections = document.querySelectorAll('section');
let number = sections.length;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {

  let navUI = '';
  // looping over all sections
  sections.forEach(section => {

      const sectionID = section.id;
      const sectionDataNav = section.dataset.nav;

      navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;

  });
  // append all elements to the navigation
  navigation.innerHTML = navUI;


};



function isInViewport (elem, offset=0) {
  const bounding = elem.getBoundingClientRect();
  return (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset);
}

function toggleActiveClass(){
for(section of sections){
if (isInViewport(section))
{
 

if(!section.classList.contains('your-active-class')){
section.classList.add('your-active-class');


}


}else{section.classList.remove('your-active-class');
}


}



}

//Get the button
var mybutton = document.getElementById("Top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





navBuilder();
document.addEventListener('scroll',toggleActiveClass);



