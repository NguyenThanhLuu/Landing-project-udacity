# Landing Page Project
Landing Page Project is project i focus on creating more section and when you scroll to a section it will be highline. Besides, you can click to name section on navbar to scroll to section you want to see
# How can you use this app
* You can scroll web up or down to see each section of this web
* You can click name section to scroll to the corresponding section
# Table of contents
* [Landing Page Project](#landing-page-project)
* [How can you use this app](#how-can-you-use-this-app)

// Declare global variable
var navbarContainer = document.getElementById("navbarList");

// Build navbar add four li child tag into ul tag
for (let i = 0; i < 4; i++) {
    var newElement = document.createElement("li");
    newElement.className = `section${i + 1}`; 
    newElement.innerHTML = `Section ${i + 1}`;
    navbarContainer.appendChild(newElement);
}
// thu gon
var classListNavElement = document.getElementsByClassName('menu__link');
console.log(classListNavElement)
// console.log(classListNavElement);
for (let i = 0; i < classListNavElement.length; i++) {
  console.log(classListNavElement[i].classList)a
}

// Active section when click name section on navbar
document.querySelector('.section1').addEventListener('click', function() {
  document.querySelector('#section1').scrollIntoView({ behavior: "smooth" });
})
document.querySelector('.section2').addEventListener('click', function() {
  document.querySelector('#section2').scrollIntoView({ behavior: "smooth" });
})
document.querySelector('.section3').addEventListener('click', function() {
  document.querySelector('#section3').scrollIntoView({ behavior: "smooth" });
})
document.querySelector('.section4').addEventListener('click', function() {
  document.querySelector('#section4').scrollIntoView({ behavior: "smooth" });
})

// Write function to scroll to section it will be active
function makeActive() {
    const sections = document.querySelectorAll('section');
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      const sectionValueId = section.getAttribute('id');
      if (box.top <= 150 && box.bottom >= 150) {
          section.className = "active-section";
          document.getElementsByClassName(sectionValueId)[0].className = `menu__link ${sectionValueId} active`
      } else {
          section.className = "";
          document.getElementsByClassName(sectionValueId)[0].className = `menu__link ${sectionValueId}`;
      }
    }
  }

// Make sections active
document.addEventListener("scroll", function() {
    makeActive();
});

