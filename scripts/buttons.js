// Define buttons
typeButton = document.querySelector('.js-select-type');
console.log(typeButton);
animalButton = document.querySelector('.js-select-animal');
locationButton = document.querySelector('.js-select-location');
useButton = document.querySelector('.js-select-use');
worldButton = document.querySelector('.js-select-world');

// Define option divs
typeOptions = document.querySelector('.js-type-options');
animalOptions = document.querySelector('.js-animal-options');
locationOptions = document.querySelector('.js-location-options');
useOptions = document.querySelector('.js-use-options');
worldOptions = document.querySelector('.js-world-options');

// Show options upon click
typeButton.addEventListener('click', function() {
  typeOptions.classList.add('is-selecting');
  }
)