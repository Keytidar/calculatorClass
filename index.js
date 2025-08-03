class Calculator{
  constructor(appendTo) {
    this.generatedId = ElementFactory.randomId();
    this.appendTo = appendTo;
    this.parent = document.getElementById(appendTo);
  }
  createCalculator() {
    if (!this.parent) {
      console.log('parent not found')
      return;
    }
    const generatedDiv = ElementFactory.createDiv('calc-'+this.generatedId, 'calculator');
    generatedDiv.appendChild(ElementFactory.createInput('input-'+this.generatedId,'input_field', undefined, 'text'));
    for (let i = 0, calcButtons = "789C456/123*-0+="; i<calcButtons.length; i++) {

      generatedDiv.appendChild(ElementFactory.createButton(undefined, undefined, calcButtons[i]))
    }
    this.parent.appendChild(generatedDiv);
  };
};


const ElementFactory = {
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
}

const testCalc = new Calculator('body');

testCalc.createCalculator();