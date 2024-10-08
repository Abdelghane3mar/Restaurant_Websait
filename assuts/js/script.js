document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('#navbar');
  const navImg = document.querySelector(".nav-logo img");
  const navLinks = document.querySelectorAll('.nav-list a');
  const sections = document.querySelectorAll('section');
  const listToggle = document.getElementById('listToggle');

  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.classList.add('scrolled');
      navImg.src ="assuts/images/restaurant-2-dark.png";
      listToggle.style.color='#000'
  } else {
      navbar.classList.remove('scrolled');
      navImg.src ="assuts/images/restaurant-2-light.png";
  }

window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
      }
  });

  navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        navLinks.forEach(item => item.classList.remove('active'));

          link.classList.add('active');
      }
  });
});

});
  
});



let listToggle = document.getElementById("listToggle");
let list = document.getElementById("list");

listToggle.addEventListener("click" , function(){
    if(list.classList.contains("d-none")){
        list.classList.add("d-block");
        list.classList.remove("d-none");
    }
    else{
        list.classList.add("d-none");
        list.classList.remove("d-block");
    }
});


let slideIndex = 0;
let isAnimating = false;

showSlides(slideIndex);

function plusSlides(n) {
  if (!isAnimating) {
    showSlides(slideIndex += n);
  }
}


function showSlides(n) {
  let slidesWrapper = document.querySelector(".items-wrapper");
  let slides = document.getElementsByClassName("item");
  
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  let translateXValue = -slideIndex * 100;
  slidesWrapper.style.transform = `translateX(${translateXValue}%)`;
  isAnimating = true;
  setTimeout(() => {
    isAnimating = false;
  }, 800);
}
/*///////////////////////////////////// */
document.querySelectorAll('.nav-list a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); 

      const targetId = this.getAttribute('href'); 
      const targetSection = document.querySelector(targetId); 
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  });
});
/*////////////////////////////////////// */
document.addEventListener('DOMContentLoaded', function () {
  const panelToggle = document.getElementById('theme-panel-toggle');
  const panel = document.getElementById('custom-demo-panel');
  const panelContent = document.querySelector('.demo-panel-content');
  const loader = document.createElement('div');
  const toggleIcon = document.querySelector('#demo-thumbnail i');
  loader.classList.add('loader'); 
  panel.appendChild(loader); 
  panelToggle.addEventListener('click', function () {
      panel.classList.toggle('panel-open');
      if (panel.classList.contains('panel-open')) {
        loader.style.display = 'block';
              setTimeout(function () {
              panelContent.style.opacity = 1;
              panelContent.style.maxHeight = '1000px';
              loader.style.display = 'none'; 
          }, 500);
      } else {
          panelContent.style.opacity = 0;
          panelContent.style.maxHeight = '0';
      };
      if (panel.classList.contains('panel-open')){
        toggleIcon.classList.remove('fa-gear');
        toggleIcon.classList.add('fa-xmark');
        toggleIcon.style.color = "red";

    } else {
      toggleIcon.classList.remove('fa-xmark');
      toggleIcon.classList.add('fa-gear');
      toggleIcon.style.color = "#333";

    }
    
  });
});
const demoButtons = document.querySelectorAll('.demo-panel-btn');
demoButtons.forEach(function (button) {
    button.addEventListener('mouseover', function () {
        button.style.transform = 'translateY(-5px)';
        button.style.transition = 'all 0.3s ease';
        button.style.backgroundColor = 'rgb(68, 68, 68)';
    });
    button.addEventListener('mouseout', function () {
        button.style.transform = 'translateY(0)';
        button.style.backgroundColor = '#c1ab84';

    });
});
document.addEventListener('DOMContentLoaded', function () {
  const colorItems = document.querySelectorAll('.panel-accent-color li');
  
  colorItems.forEach(function (item) {
      item.addEventListener('click', function () {
          const selectedColor = this.getAttribute('data-color');
          const bgElements = document.querySelectorAll('.bg-element');
          bgElements.forEach(function (element) {
          element.style.backgroundColor = selectedColor ;
          });
                      
          const colorElements = document.querySelectorAll('.color-element');
          colorElements.forEach(function (element) {
          element.style.color = selectedColor; 

          });
          
      });
  });
});

////////////// Scroll Top////////////////
let span = document.querySelector(".up");
window.onscroll = function(){
    if (this.scrollY >= 1000 ) {
        span.classList.add("show");
    }
    else{
        span.classList.remove("show");
    }
}
span.onclick = function(){
  window.scrollTo({
      top: 0 , behavior:"smooth" ,
  })
}
////////////// Scroll Top////////////////




