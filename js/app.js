// Declare global variable
let navbarContainer = document.getElementById("navbarList");
let classListNavElement = document.getElementsByClassName('menu__link');

// Build navbar add four li child tag into ul tag
for (let i = 0; i < 4; i++) {
    let newElement = document.createElement("li");
    newElement.className = `menu__link section${i + 1}`; 
    newElement.innerHTML = `Section ${i + 1}`;
    navbarContainer.appendChild(newElement);
}

// Write function to scroll to section it will be active
function makeActive() {
    const sections = document.querySelectorAll('section');
    for (let section of sections) {
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
document.addEventListener("scroll", () => {
    makeActive();
});

// Active section when click name section on navbar
for (let i = 0; i < classListNavElement.length; i++) {            
  classListNavElement[i].addEventListener('click',() => {
    document.querySelector(`#section${i + 1}`).scrollIntoView({ behavior: "smooth" });
  })
} 