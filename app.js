// const promise = new Promise(function (resolve, reject) {
//   let isClean = false;

//   if (isClean) {
//     resolve("Clean");
//   } else {
//     reject("Not Clean");
//   }
// });

// promise
//   .then(function (fromResolve) {
//     console.log("Done");
//   })
//   .catch(function (fromReject) {
//     console.log("Not Done");
//   });

const sr = ScrollReveal();
sr.reveal(".banner-title", {
  origin: "right",
  distance: "50px",
  duration: 2000,
  scale: 0.5,
  reset: true,
});

sr.reveal(".banner-desc", {
  origin: "right",
  distance: "50px",
  delay: 500,
  duration: 2000,
  scale: 0.7,
  reset: true,
});

sr.reveal(".banner-btn", {
  origin: "right",
  distance: "50px",
  delay: 1000,
  duration: 2000,
  scale: 0.5,
  reset: true,
});

sr.reveal(".about-img", {
  origin: "right",
  distance: "50px",
  delay: 500,
  duration: 500,
  scale: 0.5,
  reset: true,
});

sr.reveal(".about-desc", {
  origin: "right",
  distance: "50px",
  delay: 600,
  duration: 500,
  scale: 0.5,
  reset: true,
});

sr.reveal(".skill-box", {
  origin: "left",
  distance: "50px",
  delay: 100,
  duration: 500,
  scale: 0.5,
  reset: true,
  interval: 100,
});

sr.reveal(".contact-box", {
  origin: "right",
  distance: "50px",
  delay: 100,
  duration: 500,
  scale: 0.5,
  reset: true,
  interval: 150,
});

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("nav-bar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("dark-nav");
    console.log("Page down");
  } else if (window.pageYOffset === 0) {
    navbar.classList.remove("dark-nav");
    console.log("Page Top");
  }

});

function openMenu() {
  var menu = document.querySelector('.nav'); 
  if(menu.className === 'nav' || menu.className === 'nav dark-nav') {
    menu.classList.add('open-nav');
    console.log("Changed");
  } else {
    menu.classList.remove('open-nav');
    console.log("Removed");
  }
}

function closeMenu() {
  var menuItem = document.querySelector('.nav');
  menuItem.classList.remove('open-nav');
}