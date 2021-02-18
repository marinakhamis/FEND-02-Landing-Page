//Create Nav Items (Method 1)

/* function createNavBar() {
  const nav = document.getElementById("navbar__list");
  nav.classList = "nav";
  let navItem = createListItem("Home");
  nav.appendChild(navItem);
  navItem = createListItem("Section1");
  nav.appendChild(navItem);
  navItem = createListItem("Section2");
  nav.appendChild(navItem);
  navItem = createListItem("Section3");
  nav.appendChild(navItem);
  navItem = createListItem("Section4");
  nav.appendChild(navItem);
  return nav;
} */


// createNavBar();

//Create list items (Follows Method 1 )
/* 
function createListItem(item) {
  const li = document.createElement("li"); //Create list items
  const a = document.createElement("a"); //Create Anchor element
  a.href = "#" + item.toLowerCase(); //Setting the links
  const text = document.createTextNode(item);
  a.appendChild(text);
  li.appendChild(a);
  a.classList = 'list-item';
  return li;
}


 */


// Add Nav to the DOM (Also follows Method 1)
/* 
function addNavBar() {
  const nav = createNavBar();
  document.body.appendChild(nav);
}
onload = addNavBar();
 */


//Create Nav Items (Method 2) => My favourite one so far

var navItems = ["Home", "Section1", "Section2", "Section3", "Section4"]

navItems.forEach((element) => {
  var li = document.createElement("li");
  var anchor = document.createElement("a");
  var text = document.createTextNode(element);
  var navBar = document.getElementById("navbar__list");
  anchor.appendChild(text);
  anchor.classList = 'list-item';
  li.appendChild(anchor);
  anchor.href = "#" + element.toLowerCase(); //Setting the links
  navBar.appendChild(li);
  navBar.classList = "nav";
});


///Create Nav Items (Method 3)

/* function createNavBar() {
  for (i = 0; i < 4; i++) {
    var navBar = document.getElementById("navbar__list");
    var li = document.createElement("li");
    var anchor = document.createElement("a");
    var text = document.createTextNode("Section");
    anchor.appendChild(text);
    anchor.classList = 'list-item';
    li.appendChild(anchor);
    anchor.href = "#" + text.toLowerCase(); //Setting the links
    navBar.appendChild(li);
    navBar.classList = "nav";

  }
}
 */


// Create Nav Items (Method 4)

// Build the Nav 
/* 
function buildNavBar() {

  // Create a NavBar for each section
  sections.forEach(section => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      // We can name each section by its data-* attr or by h2 
      a.classList.add('menu__link')
      a.textContent = section.getAttribute('data-nav');
      console.log(a.textContent);
      li.appendChild(a);
      navItems.push(li);
  })
}
buildNavBar()


// Build menu
function buildMenu() {
  navItems.forEach(item => {
      navBar.append(item)
  })
}

buildMenu() 

*/

// Add and remove "my-active-section" in each section when you scroll

/* 
const navList = document.getElementById('navbar__list');
const allSections = document.querySelectorAll('section');
document.addEventListener('scroll', function () {
  allSections.forEach((section) => {
    if (window.scrollY >= section.offsetHeight) {
      section.classList.add("my-active-section");
    } else {
      section.classList.remove("my-active-section");
    }
  });
});

 */


//Let's make the scroll

let anchorLinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorLinks) {
  item.addEventListener('click', (e) => {
    let hashval = item.getAttribute('href')
    // hashval = A String, representing the anchor part of the URL,
    //  including the hash sign (#)

    let target = document.querySelector(hashval)

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start' //Defines vertical alignment.
    })
    history.pushState(null, null, hashval)
    e.preventDefault();
  })
}

// Add active class to the current Section
let header = document.getElementById("navbar__list");
let linkBtn = header.getElementsByClassName("list-item");
for (let i = 0; i < linkBtn.length; i++) {
  linkBtn[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}

//Checks if section is in view and adds active-class with moving background and color change
let containerCount = document.getElementsByClassName("landing__container")
  .length;

//If section is in view and adds active-class with moving background and color change
function addActiveClass() {
  let isInViewport = function (x) {
    let bounding = x.getBoundingClientRect();
    return (
      bounding.top <= 50 &&
      bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  for (i = 1; i < containerCount + 1; i++) {
    let sectionInFullView = document.getElementById("section" + i);
    window.addEventListener(
      "scroll",
      function (event) {
        if (isInViewport(sectionInFullView)) {
          sectionInFullView.classList.add("my-active-section");
        } else {
          sectionInFullView.classList.remove("my-active-section");
        }
      },
      false
    );
  }
}
addActiveClass();
