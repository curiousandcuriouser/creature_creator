document.addEventListener('DOMContentLoaded', function () {
  function toggleOptions(divToToggle, activePlaceholder) {
      const allOptionDivs = document.querySelectorAll('.options');
      const allPlaceholders = document.querySelectorAll('input[type="button"][data-target]');

      allOptionDivs.forEach(div => {
          if (div !== divToToggle && div.classList.contains('is-selecting')) {
              div.classList.remove('is-selecting');
          }
      });

      allPlaceholders.forEach(input => {
          if (input !== activePlaceholder && input.classList.contains('is-active-selector')) {
              input.classList.remove('is-active-selector');
          }
      });

      divToToggle.classList.toggle('is-selecting');

      if (divToToggle.classList.contains('is-selecting')) {
          activePlaceholder.classList.add('is-active-selector');
      } else {
          activePlaceholder.classList.remove('is-active-selector');
      }
  }

  const allPlaceholders = document.querySelectorAll('input[type="button"][data-target]');

  allPlaceholders.forEach(currentButton => {
      currentButton.addEventListener('click', function(event) {
          const clickedButton = event.target;
          const targetName = clickedButton.dataset.target;
          const optionsDivId = 'js-' + targetName + '-options';
          const correspondingOptionsDiv = document.getElementById(optionsDivId);

          if (correspondingOptionsDiv) {
              toggleOptions(correspondingOptionsDiv, clickedButton);
          } else {
              console.warn(`Error: Could not find options div with ID '${optionsDivId}'. Please check HTML ID or data-target attribute.`);
          }
      });
  });

  const allOptionButtons = document.querySelectorAll('.options button');

  allOptionButtons.forEach(optionButton => {
      optionButton.addEventListener('click', function(event) {
          const clickedOptionButton = event.target;
          const selectedText = clickedOptionButton.textContent;
          const activePlaceholder = document.querySelector('.input.is-active-selector');

          if (activePlaceholder) {
              activePlaceholder.value = selectedText;
              const parentOptionsDiv = clickedOptionButton.closest('.options');

              if (parentOptionsDiv) {
                  parentOptionsDiv.classList.remove('is-selecting');
              }

              activePlaceholder.classList.remove('is-active-selector');
          } else {
              console.warn('No active input button found. Something might be wrong with tracking the active selector.');
          }
      });
  });

  });
