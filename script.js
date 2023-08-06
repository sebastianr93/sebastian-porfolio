// Sound effects

// About Sfx

function playButtonSound() {
  var sound = document.getElementById('button-sound');
  sound.currentTime = 0;
  sound.play();
}

// Raven Sfx

  function playRavenSound() {
    var raven = document.getElementById('raven-sound');
    raven.currentTime = 0;
    raven.play();
  }

// "Menu" Responsive Dropdown

const burgerIcon = document.querySelector('.burger-icon');
const dropdownMenu = document.querySelector('.menu');

function toggleDropdownMenu() {
  const computedStyle = window.getComputedStyle(dropdownMenu);
  const display = computedStyle.getPropertyValue('display');

  if (display === 'none') {
    dropdownMenu.style.display = 'block';
  } else {
    dropdownMenu.style.display = 'none';
  }
}

burgerIcon.addEventListener('click', toggleDropdownMenu);

// "About" Dropdown

const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const contentWrapper = document.querySelector('.content-wrapper');
const heroParagraph = document.querySelector('.hero p');

dropdownBtn.addEventListener('click', function() {
  dropdownContent.classList.toggle('show');
  contentWrapper.classList.toggle('show');

  if (dropdownContent.classList.contains('show')) {
    const dropdownHeight = dropdownContent.offsetHeight;
    contentWrapper.style.marginTop = `100px`;
    heroParagraph.style.marginTop = `100px`;
  } else {
    contentWrapper.style.marginTop = '20px';
    heroParagraph.style.marginTop = '0';
  }
});

// Content Sliders

$(document).ready(function() {
  $('.slider-qa').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="media/images/previous.png" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="media/images/next.png" alt="Next"></button>'
  });
});

$(document).ready(function() {
  $('.slider-programming').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="media/images/previous.png" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="media/images/next.png" alt="Next"></button>'
  });
  
  $('.slider-certificates').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="media/images/previous.png" alt="Previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="media/images/next.png" alt="Next"></button>'
  });
});

