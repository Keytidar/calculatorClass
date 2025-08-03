const calculator = {
  createCalculator(appendTo) {
    const generatedId = this.randomId()
    const parent = document.getElementById(appendTo);
    if (!parent) {
      console.log('parent not found')
      return;
    }
    const generatedDiv = this.createDiv('calc-'+generatedId, 'calculator');
    generatedDiv.appendChild(this.createInput('input-'+generatedId,'input_field', undefined, 'text'));
    for (let i = 0, calcButtons = "789C456/123*-0+="; i<calcButtons.length; i++) {

      generatedDiv.appendChild(this.createButton(undefined, undefined, calcButtons[i]))
    }
    parent.appendChild(generatedDiv);
  },

  createDiv(divId, divClass) {
    const div = document.createElement('div');

    if (divId) div.id = divId;
    if (divClass) div.classList.add(divClass);

    return div;
  },

  createButton(buttonId, buttonClass, buttonContent) {
    const button = document.createElement('button');

    if (buttonId) button.id = buttonId;
    if (buttonClass) button.classList.add(buttonClass);
    if (buttonContent) button.textContent = buttonContent;

    return button;
  },

  createInput(inputId, inputClass, inputValue, inputType) {
    const input = document.createElement('input');

    if (inputId) input.id = inputId;
    if (inputClass) input.classList.add(inputClass);
    if (inputValue) input.value = inputValue;

    input.type = inputType;

    return input;
  },

  randomId(prefix) {
    const random = Math.random().toString(36).slice(2, 10);
    if (prefix) return prefix + '-' + random;
    return random;
  }
};

calculator.createCalculator('body');