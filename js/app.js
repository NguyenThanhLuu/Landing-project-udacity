/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
var navbarContainer = document.getElementById("navbarList");
for (let i = 0; i < 4; i++) {
    var newElement = document.createElement("li");
    newElement.className = `section${i + 1}`; 
    newElement.innerHTML = `Section ${i + 1}`;
    navbarContainer.appendChild(newElement);
}
// console.log('this testss', document.getElementById("navbarList"));


document.querySelector('.section1').addEventListener('click', function() {
  document.querySelector('#section1').scrollIntoView();
})

document.querySelector('.section2').addEventListener('click', function() {
  document.querySelector('#section2').scrollIntoView();
})

document.querySelector('.section3').addEventListener('click', function() {
  document.querySelector('#section3').scrollIntoView();
})

document.querySelector('.section4').addEventListener('click', function() {
  document.querySelector('#section4').scrollIntoView();
})

var elementList = navbarContainer.getElementsByClassName("menu__link");
console.log(elementList);

for (let i = 0; i < elementList.length; i++) {
    elementList[i].addEventListener("click", function() {


        // if (this.className.split(' ')[1] == 'active') {
        //     return;
        // } else {
        //     this.className += " active";
        // }
        // var elHasActiveClass = navbarContainer.getElementsByClassName("active");

        // if (elHasActiveClass.length > 1) {
        //     if (this !== elHasActiveClass[0]) {
        //         elHasActiveClass[0].className = elHasActiveClass[0].className.replace(" active", "")
        //     } else {
        //         elHasActiveClass[1].className = elHasActiveClass[0].className.replace(" active", "")
        //     }
        // }
    })
}
console.log(document.getElementsByTagName('h1'))

function makeActive() {
    const sections = document.querySelectorAll('section');
    console.log('this sections:', sections)
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      const sectionValueId = section.getAttribute('id');
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 150 && box.bottom >= 150) {
          section.className = "active-section";
        //   console.log('hehehe', document.getElementsByClassName(sectionValueId));
          document.getElementsByClassName(sectionValueId)[0].className = `menu__link ${sectionValueId} active`
          console.log('sdfsdf', document.getElementsByClassName(sectionValueId))
      } else {
          section.className = "";
          document.getElementsByClassName(sectionValueId)[0].className = `menu__link ${sectionValueId}`;
        // Remove active state from other section and corresponding Nav link.
      }
    }
  }

  // Make sections active
document.addEventListener("scroll", function() {
    makeActive();
  });

// document.addEventListener('scroll', checkScroll);
// checkScroll();

