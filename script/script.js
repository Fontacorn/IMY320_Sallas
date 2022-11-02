// particlesJS("particles-js", {
//     "particles": {
//         "number": {
//             "value": 80,
//             "density": {
//                 "enable": true,
//                 "value_area": 800
//             }
//         },
//         "color": {
//             "value": "#ffffff"
//         },
//         "shape": {
//             "type": "circle",
//             "stroke": {
//                 "width": 0,
//                 "color": "#000000"
//             },
//             "polygon": {
//                 "nb_sides": 5
//             },
//             "image": {
//                 "src": "img/github.svg",
//                 "width": 100,
//                 "height": 100
//             }
//         },
//         "opacity": {
//             "value": 0.5,
//             "random": false,
//             "anim": {
//                 "enable": false,
//                 "speed": 1,
//                 "opacity_min": 0.1,
//                 "sync": false
//             }
//         },
//         "size": {
//             "value": 3,
//             "random": true,
//             "anim": {
//                 "enable": false,
//                 "speed": 40,
//                 "size_min": 0.1,
//                 "sync": false
//             }
//         },
//         "line_linked": {
//             "enable": false,
//             "distance": 150,
//             "color": "#ffffff",
//             "opacity": 0.4,
//             "width": 1
//         },
//         "move": {
//             "enable": true,
//             "speed": 6,
//             "direction": "none",
//             "random": false,
//             "straight": false,
//             "out_mode": "out",
//             "bounce": false,
//             "attract": {
//                 "enable": false,
//                 "rotateX": 600,
//                 "rotateY": 1200
//             }
//         }
//     },
//     "interactivity": {
//         "detect_on": "canvas",
//         "events": {
//             "onhover": {
//                 "enable": true,
//                 "mode": "repulse"
//             },
//             "onclick": {
//                 "enable": true,
//                 "mode": "push"
//             },
//             "resize": true
//         },
//         "modes": {
//             "grab": {
//                 "distance": 400,
//                 "line_linked": {
//                     "opacity": 1
//                 }
//             },
//             "bubble": {
//                 "distance": 400,
//                 "size": 40,
//                 "duration": 2,
//                 "opacity": 8,
//                 "speed": 3
//             },
//             "repulse": {
//                 "distance": 200,
//                 "duration": 0.4
//             },
//             "push": {
//                 "particles_nb": 4
//             },
//             "remove": {
//                 "particles_nb": 2
//             }
//         }
//     },
//     "retina_detect": true
// });
// var count_particles, stats, update;
// stats = new Stats;
// stats.setMode(0);
// stats.domElement.style.position = 'absolute';
// stats.domElement.style.left = '0px';
// stats.domElement.style.top = '0px';
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector('.js-count-particles');
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);;


let mouse = new Mouse({

    mouse : 'cirle',
    // To change the type of mouse
    // Accepts 3 options : defult / cirle / point
    // default option : cirle
    
    color: '#ffff',
    // To change the color of the mouse
    // default option : #ffda79
    
    mouseHover : true,
    // Adds a hover effect to the element on which the mouse is on
    // Accepts 3 options : false / border / background
    // default option : false
    
    mousePointer: true,
    // To show or hide the mouse from the page
    // Accepts 2 options : false / true
    // default option : false
    
    el: 'a , button ,span',
    // The items you want to hover effect
    // accept any item
    // Should be placed ; etween the elements
    // default option : a
    
    el_hover: true,
    // Activate or disable hover effect on items
    // Accepts 2 options : false / true
    // default option : true
    
    mouse_clicked: true,
    // To activate or disable the effect of clicking on the page
    // Accepts 2 options : false / true
    // default option : true
    
    clrChanged : true,
    // Change the color of the mouse automatically
    // Accepts 2 options : false / true
    // default option : false
    
  });
  mouse.mouse();

//   ***********
// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.tagline', { delay: 500 });
// ScrollReveal().reveal('.punchline', { delay: 2000 });



const element = document.querySelector("#container");

// element.addEventListener('wheel', (event) => {
//   event.preventDefault();

//   element.scrollBy({
//     left: event.deltaY < 0 ? -30 : 30,
    
//   });
// });

ScrollReveal().reveal('.img1');
ScrollReveal().reveal('.img2',  { delay: 200 });
ScrollReveal().reveal('.img3',  { delay: 250 });
ScrollReveal().reveal('.img4',  { delay: 300 });

ScrollReveal().reveal('.underline');

// ScrollReveal().reveal('.img2', '.img4', { delay: 500 });
// ScrollReveal().reveal('.img3', { delay: 2000 });






// locomotive
// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector(".smooth-scroll"),
//   smooth: true,
//   mobile: {
//      smooth: true
//  },
//  tablet: {
//      smooth: true
//  }
// });

// ScrollReveal().reveal('.pseudo-item-1');
// ScrollReveal().reveal('.pseudo-item-2',  { delay: 200 });
// ScrollReveal().reveal('.pseudo-item-5',  { delay: 250 });

// ScrollReveal().reveal('.pseudo-item-1');
ScrollReveal().reveal('.pseudo-item-2',  { delay: 200 });
ScrollReveal().reveal('.pseudo-item-3',  { delay: 250 });
ScrollReveal().reveal('.pseudo-item-4',  { delay: 300 });
// ScrollReveal().reveal('.pseudo-item-5',  { delay: 300 });

$("#deployform").click(function () {
  $(this).addClass("open");
});

$(".cancel").click(function (e) {
  $(this).parent().removeClass("open");
  e.stopPropagation();
});
