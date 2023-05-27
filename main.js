window.addEventListener("load", function() {
  const preloader = document.getElementById("preloader");
  preloader.style.display = "none";
  const menuBox = document.getElementById("menu-box");
  const menu = document.getElementById("menu");
  
  const navItems = document.querySelectorAll("#menu-box p");
  
  const tl = gsap.timeline({ paused: true });
  
  tl.to(menuBox, { duration: 0.8, x: 0, ease: "power2.out", duration: 1 })
    .to(navItems, { duration: 0.5, x: 0, ease: "power2.out", duration: 1 }, 0.1);
  
  menu.addEventListener("click", () => {
    if (window.innerWidth < 480) {
      menuBox.classList.toggle("hide");
      if (menuBox.classList.contains("hide")) {
        tl.reverse();
      } else {
        tl.restart();
      }
    }
  });  



});


const menu = document.querySelector('#menu');
const menuBox = document.querySelector('#menu-box');

gsap.registerPlugin(ScrollTrigger)
gsap.from('.name', {
  x: 500,
  delay:1,
  opacity:0,
  duration: 2
});


gsap.from('.surname', {
  x: -400,
  delay:1,
  opacity:0,
  duration: 2
});
gsap.from('h3', {
  y: -400,
  duration: 1
});
gsap.to("#page0",{
  scrollTrigger:{
    trigger:"#page0",
    start:"top top",
    end:"bottom bottom",
    pin:true,
    scroller:"body"
  }
});
gsap.to("#page1",{
  scrollTrigger:{
    trigger:"#page1",
    start:"top top",
    end:"bottom bottom",
    pin:true,
    scroller:"body"
  }
});
gsap.to("#page2",{
  scrollTrigger:{
    trigger:"#page2",
    start:"top top",
    end:"bottom bottom",
    pin:true,
    scroller:"body"
  }
});

gsap.set("#scroldwn",{y:590})
gsap.to("#scroldwn",{
  scrollTrigger:{
    trigger:"#scroldwn",
    scrub:true,
    scroller:"body"
  },
  rotationX: 90,
  transformOrigin: "50% 50%",
  ease: "power2.inOut",
  opacity:0
  
})
gsap.to("#nametxt",{
  scrollTrigger:{
    trigger:"#nametxt",
    scrub:true,
    scroller:"body"
  },
  scale:0.7,
  ease: "power2.inOut",
  opacity:1,
  transformOrigin:"50% 50%"
})



const tl = gsap.timeline();

tl.from("#cont", {
  scrollTrigger: {
    trigger: "#cont",
    start: "-25% 50%",
    end: "50% 50%",
    scrub:true,
    
  },
  ease:"power2",
  opacity: 0,
  duration: 2,
})
.from("#splits>p",{  scrollTrigger: {
  trigger: "#cont",
  start: "-25% 50%",
  end: "50% 50%"
  
  
},delay:0.5,onComplete: function () {
  const text = document.querySelector(".typewriter");
  const typewriter = new Typewriter(text, {
    delay: 3,
  });
  typewriter
    .typeString(
      "Hello, my name is Sai Charan, I am currently a student of engineering. I am a diligent and industrious individual, with a strong aptitude for practical knowledge and a proven track record of leadership. My dedication to hard work and my unwavering commitment to excellence are matched only by my strong character and ability to lead with integrity . . . . . In addition to my academic responsibilities, I am an active member of the Department of Student Affairs (DSA), a college-level student organisation with over 600 members. I oversee DSA's Social Media team of 54 people, and we have successfully executed various social media campaigns and events.\n\n"
    )
    .typeString(
      "Aside from my academic and extracurricular successes, I am passionate about learning new technologies and artistic endeavours such as editing and painting. I appreciate learning about new tools and applications, and,I'm always up for new challenges and projects. In my spare time, I enjoy watching web series and engaging in hobbies.I hit the gym on a frequent schedule."
    )
    .start();
  text.style.visibility = "visible";},delay:1.5})

// Scroll to page1 on click
const cont = document.querySelector("#cont");


if (window.innerWidth < 480) {
  gsap.set("#title",{y:400})
  gsap.set("#splits > p",{y:90})
  gsap.set("#splits > img",{scale:1.5,x:150,y:20,zIndex:-1})
  gsap.set("#scroldwn",{y:510})
  gsap.from("#cont",{
    scrollTrigger:{
      scroller:"body",
      trigger:"#cont"
    },
    scale:1.1,
    ease:"power2.inout",
    duration:1
    })
}
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  initialSlide:4,
  autoplay:{
    delay:2000,
  }
});
gsap.from("#card",{scrollTrigger:{trigger:"#card",scroller:"body",scrub:true,start:"top bottom",end:"30% 80%"},opacity:0,transformOrigin:"50% 50%",  ease: Power2.easeInOut})
gsap.from(".line",{scrollTrigger:{trigger:".line",scroller:"body",scrub:true},width:0,ease:"power2"})
gsap.from("#title-skill",{scrollTrigger:{trigger:"#title-skill",scroller:"body",scrub:true,start:"top 30%",end:"bottom 10%"},opacity:0,x:1,  ease: Power2.easeInOut})

gsap.to("#bg-video",{scrollTrigger:{
  trigger:"#bg-video",
  scroller:"body",
  end:"100% bottom",
  start:"90% 70%",
  scrub:true,
},
  filter:"blur(100px)",
  animationDuration:10,
  ease: Power2.easeInOut
})





// Get the thumbs elements
const thumbs = document.querySelectorAll('#phrow #thumbs');

// Set the first thumb as active by default
thumbs[0].classList.add('active');

// Get the mainph elements
const mainImage = document.getElementById('main-image');
const mainProjectTitle = document.getElementById('project-title');
const mainProjectDescription = document.getElementById('project-description');

// Display the details of the first thumb
displayThumbDetails(thumbs[0]);

// Loop through each thumb element
thumbs.forEach((thumb) => {
  // Add click event listener to each thumb
  thumb.addEventListener('click', () => {
    // Remove the active class from all thumbs
    thumbs.forEach((thumb) => thumb.classList.remove('active'));

    // Add the active class to the clicked thumb
    thumb.classList.add('active');

    // Display the details of the clicked thumb
    displayThumbDetails(thumb);
  });
});

// Function to display thumb details in the mainph section
function displayThumbDetails(thumb) {
  // Get the image source and project details from the clicked thumb
  const imageSrc = thumb.querySelector('.thumimg').getAttribute('src');
  const projectTitle = thumb.querySelector('h2').textContent;
  const projectDescription = thumb.querySelector('p').textContent;

  // Apply flip animation to the mainImage using GSAP
  gsap.to(mainImage, {
    duration: 0.4,
    ease: 'power2.inOut',
    onComplete: () => {
      // Update the mainImage with the new source
      mainImage.setAttribute('src', imageSrc);

      // Reverse the flip animation for the mainImage using GSAP
      gsap.fromTo(
        mainImage,
        { opacity:0,x:-100 },
        { opacity:1, duration: 0.4, ease: 'power2.inOut' }
      );

      // Apply flip animation to the abtproject section using GSAP
      gsap.fromTo(
        '#abtproject',
        { y:10, opacity: 1 },
        { y:0, opacity: 0, duration: 0.3, ease: 'power2.inOut', delay: 0.1, onComplete: () => {
            // Update the mainProjectTitle and mainProjectDescription
            mainProjectTitle.textContent = projectTitle;
            mainProjectDescription.textContent = projectDescription;
            
            // Reverse the flip animation for the abtproject section using GSAP
            gsap.fromTo(
              '#abtproject',
              { y:-10, opacity: 0 },
              { y:0, opacity: 1, duration: 0.3, ease: 'power2.inOut' }
            );
          }
        }
      );
    }
  });
}
