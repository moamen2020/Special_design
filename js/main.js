// Chack If There's Local Storage Color Options
const mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color_option")
  );

  // Remove Actove Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");

    // Add Active Class On Element With Data Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
    }
  });
}

// =================================
// =================================

// Random Background Option
let backgroundOption = true;

// variable To Control The Interval
let BackgroundInterval;

let backgroundLocalItem = localStorage.getItem("background_option");

// Check If Random Background Local Storage Is Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
  }

  // Remove Active Class From All Spans
  document.querySelectorAll(".random-backgrounds span").forEach((element) => {
    element.classList.remove("active");
  });

  if (backgroundLocalItem === "true") {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}
// =================================
// =================================

// Click on Toggle Settings Gear
document.querySelector(".toggle-settings").onclick = function () {

  // Toggle Class Fa-spin Foo Rotation on self
  // this.classList.toggle("fa-spin");

  // Toggle Class Open On Main Settings Box
  document.querySelector(".settings-box").classList.toggle("open");
};

// ==================================
// ==================================

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on All list Item
colorsLi.forEach((li) => {
  // Click on Every List Item
  li.addEventListener("click", (e) => {
    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // Set Color In Local Storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // Remove Class Class Active All Children
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");
  });
});

// =================================
// =================================

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

// Loop On all Span
randomBackEl.forEach((span) => {
  // Click On Every Span
  span.addEventListener("click", (e) => {
    // Remove Active Class From All Element
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;

      randomizeImgs();

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(BackgroundInterval);

      localStorage.setItem("background_option", false);
    }
  });
});

// =================================
// =================================

// Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

// Get Array Of Imgs
let imgArray = ["01.jpg", "02.jpg", "03.jpg"];

// Function To Randomize Imgs
function randomizeImgs() {
  if (backgroundOption === true) {
    BackgroundInterval = setInterval(() => {
      // Get Randowm Number
      let randomNumber = Math.floor(Math.random() * imgArray.length);

      // Change Background Image Url
      landingPage.style.backgroundImage =
        'url("../img/' + imgArray[randomNumber] + '")';
    }, 1000);
  }
}

randomizeImgs();

// =================================
// =================================

// Select Skills Selector
let ourSkills = document.querySelector('.skills');


window.onscroll = function () {

  // Skills Offcet Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.pageYOffset;

   if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress
    })
     
  }
}


// Create Popup With The Image

let ourGallary = document.querySelectorAll(".gallary img");

ourGallary.forEach(img => {

  img.addEventListener('click', (e) => {

    // Create Overlay Element
    let overlay = document.createElement('div');

    // Add Class To Overlay
    overlay.classList = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popus Box
    let popupBox = document.createElement('div');

    // Append Overlay To The Popup Box
    popupBox.classList = 'popup-box';

    if (img.src !== null) {
      
      // Create Heading
      let imgHeading = document.createElement('h3');

      // Create text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.appendChild(imgHeading)

    }

    // Create The Image
    let popupImage = document.createElement('img');

    // Set Image Src
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage)

    // Append The Popup Box To Body
    document.body.appendChild(popupBox)

    // Create The Close Span
    let closeButton = document.createElement('span');

    // Create The Close Button Text 
    let closeButtonText = document.createTextNode('X');

    // Append Text To Close Button
    closeButton.appendChild(closeButtonText);

    // Add Class To Close Button
    closeButton.classList = 'close-button';

    // Add Close Button To The Popup Box
    popupBox.appendChild(closeButton);

  });

})

// Close Popup
document.addEventListener('click', e => {
  
  if (e.target.classList == 'close-button') {
    
    // Remove The Current Popup
    e.target.parentNode.remove();

    // Remove Overlay
    document.querySelector('.popup-overlay').remove();

  }
});


// Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullet .bullet');

allBullets.forEach(bullet => {

  bullet.addEventListener('click', (e) => {

    document.querySelector(e.target.dataset.section).scrollIntoView({

      behavior: 'smooth'
    });

  });

});


let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullet");

let bulletLocalItem = localStorage.getItem('bullets_option');

if (bulletLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove('active');

  })

  if (bulletLocalItem === 'block') {
  
    bulletsContainer.style.display = 'block';
  
    document.querySelector('.bullets-option .yes').classList.add('active');
    
  } else {
  
    bulletsContainer.style.display = 'none';
  
    document.querySelector('.bullets-option .no').classList.add('active');
    
  }

}



bulletsSpan.forEach(span => {

  span.addEventListener('click', (e) => {

    if (span.dataset.display === 'show') {
      
      bulletsContainer.style.display = 'block';

      localStorage.setItem('bullets_option', 'block');

    } else {

      bulletsContainer.style.display = 'none';
      
      localStorage.setItem('bullets_option', 'none');

    }

    document.querySelectorAll(".bullets-option span").forEach((span) => {
  
      span.classList.remove("active");
    
    });

    // Add Active Class On Self
    e.target.classList.add('active')

  })

})


// Reset Button
document.querySelector(".reset-option").onclick = function () {

  localStorage.removeItem("color_option");
  localStorage.removeItem("background_option");
  localStorage.removeItem("bullets_option");

  // Reload Window
  window.location.reload();

}


// Toggle menu
let toggleBtn = document.querySelector('.toggle-menu');
let tLinks = document.querySelector('.links');

toggleBtn.onclick = function (e) {

  e.stopPropagation();

  // Toggle Class 'mnenu-active' on Button
  this.classList.toggle('menu-active');

  // Toggle CLass "Open" on Links
  tLinks.classList.toggle('open')

}

window.onclick = function (e)  {

  if (e.target !== toggleBtn && e.target !== tLinks) {
    
    if (tLinks.classList.contains("open")) {

      // Toggle Class 'mnenu-active' on Button
      toggleBtn.classList.toggle('menu-active');

      // Toggle CLass "Open" on Links
      tLinks.classList.toggle('open')

    }
  }
}

// Stop Prpagation on Links
tLinks.onclick = function (e) {
  e.stopPropagation();
}
