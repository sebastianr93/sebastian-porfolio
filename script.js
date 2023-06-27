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

// Contact Mail Service

(function() {
  emailjs.init('R-CMe5LnzHkwbZseZ'); // EmailJS Public Key

  const form = document.querySelector('#contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Form fields
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    // Form data
    const data = {
      service_id: 'sebastianr93-porfolio', // Service ID
      template_id: 'template-porfolio-sr93', // Template ID
      user_id: 'R-CMe5LnzHkwbZseZ', // Public Key
      template_params: {
        name: name,
        email: email,
        message: message
      }
    };

    // Form sending
    emailjs.send('sebastianr93-porfolio', 'template-porfolio-sr93', data)
      .then(function(response) {
        console.log('You successfully sent a raven. I will reply you as soon as possible.', response);
        // Success alert
        alert('You successfully sent a raven. I will reply you as soon as possible.');
        form.reset();
      }, function(error) {
        console.error('The raven flew in the wrong direction. Please try again.', error);
        // Error alert
        alert('The raven flew in the wrong direction. Please try again.');
      });
  });
})();

