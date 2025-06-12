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

// Button-Option map
const buttonOptionMap = {
  '.js-select-type': '.js-type-options',
  '.js-select-animal': '.js-animal-options',
  '.js-select-location': '.js-location-options',
  '.js-select-use': '.js-use-options',
  '.js-select-world': '.js-world-options',
};

// Show options upon click
('click', showOptions() {
  const categoryName = event.target.dataset.target;
  console.log("Button clicked, its target us:", categoryName)

}

)

// FUNCTIONS
// Show options for button
function showOptions(buttonOptions) {
  buttonOptions.classList.add('is-selecting');
  console.log("Showing panel:", buttonOptions.id);

  const allButtons = document.querySelectorAll('button[data-target]');

  allButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const clickedButton = event.target;
      const targetId = clickedButton.dataset.target;
      const optionsDivToFindId = targetId + 'Options';
      const optionsDiv = document.getElementById(optionsDivToFindId);
      
    })})}