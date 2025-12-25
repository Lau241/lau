//map each button id to its corresponding font class
const fontMap = {
  'refined': 'aovd-refined',
  'english': 'aovd-english',
  'english-oblique': 'aovd-english-oblique',
  'refined-oblique': 'aovd-oblique',
  'refined-bold': 'aovd-bold',
  'refined-thin': 'aovd-thin'
};

//select all font option buttons
const fontButtons = document.querySelectorAll('.font-setting .option');
const textarea = document.getElementById('textarea-selector');

//store currently applied font class
let currentFontClass = 'aovd-refined'; // matches initial textarea class

fontButtons.forEach(button => {
  button.addEventListener('click', () => {
    //switch the "font-selected" class
    const prevSelected = button.parentElement.querySelector('.font-selected');
    if (prevSelected) prevSelected.classList.remove('font-selected');
    button.classList.add('font-selected');

    //remove previous font class from textarea
    if (currentFontClass) textarea.classList.remove(currentFontClass);

    //add the new font class based on clicked button
    const newFontClass = fontMap[button.id];
    if (newFontClass) {
      textarea.classList.add(newFontClass);
      currentFontClass = newFontClass;
    }
  });
});

//same concept
const colorMap = {
  'c-1': 'c-black',
  'c-2': 'c-brown',
  'c-3': 'c-yellow',
  'c-4': 'c-green',
  'c-5': 'c-blue',
  'c-6': 'c-red'
};

const colorButtons = document.querySelectorAll('.c-font-setting .c-option');
let currentColorClass = 'c-black';

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    const prevSelected = button.parentElement.querySelector('.c-selected');
    if (prevSelected) prevSelected.classList.remove('c-selected');
    button.classList.add('c-selected');

    if (currentColorClass) textarea.classList.remove(currentColorClass);

    const newColorClass = colorMap[button.id];
    if (newColorClass) {
      textarea.classList.add(newColorClass);
      currentColorClass = newColorClass;
    }
  });
});

//same concept
const sizeMap = {
  'small': 'demiType',
  'medium': 'largerType',
  'large': 'customLarge'
};

const sizeButtons = document.querySelectorAll('.font-setting .s-option');
let currentSizeClass = 'demiType'; // matches initial textarea class

sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const prevSelected = button.parentElement.querySelector('.font-size-selected');
    if (prevSelected) prevSelected.classList.remove('font-size-selected');
    button.classList.add('font-size-selected');

    if (currentSizeClass) textarea.classList.remove(currentSizeClass);

    const newSizeClass = sizeMap[button.id];
    if (newSizeClass) {
      textarea.classList.add(newSizeClass);
      currentSizeClass = newSizeClass;
    }
  });
});
