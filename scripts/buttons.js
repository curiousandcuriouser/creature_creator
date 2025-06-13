document.addEventListener('DOMContentLoaded', function () {

function toggleOptions(divToToggle) {
  const allOptionDivs = document.querySelectorAll('.options');

  allOptionDivs.forEach(div => {
    if (div !== divToToggle && div.classList.contains('is-selecting')) {
      div.classList.remove('is-selecting');
      }
    });

    divToToggle.classList.toggle('is-selecting');
  }

const allPlaceholders = document.querySelectorAll('input[type="button"][data-target]');

allPlaceholders.forEach(currentButton => {
    currentButton.addEventListener('click', function(event) {
      const clickedButton = event.target;
      const targetName = clickedButton.dataset.target;
      const optionsDivId = 'js-' + targetName + '-options';
      const correspondingOptionsDiv = document.getElementById(optionsDivId);

      if (correspondingOptionsDiv) {
        toggleOptions(correspondingOptionsDiv);
      } else {
        console.warn(`Error: Could not find options div with ID '${optionsDivId}'. Please check HTML ID or data-target attribute.`);
        }
    });
})});