class Calculator {
  #generatedId;
  constructor(appendTo) {
    this.#generatedId = ElementFactory.randomId();
    this.appendTo = appendTo;
    this.parent = document.getElementById(appendTo);
  }

  get getId() {
    return this.#generatedId;
  }

  add(a, b) {
    return a + b;
  }

  multiply(a, b) {
    return a * b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    return a / b;
  }

  createCalculator() {
    if (!this.parent) {
      console.log('parent not found');
      return;
    }

    const generatedDiv = ElementFactory.createDiv('calc-' + this.#generatedId, 'calculator');
    generatedDiv.appendChild(ElementFactory.createInput('input-' + this.#generatedId, 'input_field', undefined, 'text'));

    for (let i = 0, calcButtons = "789C456/123*-0+="; i < calcButtons.length; i++) {
      generatedDiv.appendChild(ElementFactory.createButton(undefined, undefined, calcButtons[i]));
    }

    this.parent.appendChild(generatedDiv);

    document.addEventListener('click', (event) => {
      const calcInput = document.getElementById(`input-${this.#generatedId}`);
      
      if (event.target.tagName !== 'BUTTON') {
        return;
      }

      if (event.target.innerText === 'C') {
        calcInput.value = '';
        return;
      }

      if (event.target.innerText === '=') {
        if (!calcInput.value) {
          return;
        }
        const evalPattern = /^[0-9./*+-]+$/;
        const equation = calcInput.value.replace(/ /g, "");

        try {
          if (!evalPattern.test(equation)) {
            console.error('Wrong pattern');
            calcInput.value = '';
            calcInput.placeholder = 'Wrong pattern';
            return;
          }

          calcInput.value = eval(equation);
        } catch {
          console.error('Wrong pattern');
          calcInput.value = '';
          calcInput.placeholder = 'Wrong pattern';
          return;
        }
      }
      else {
        calcInput.value += event.target.innerText
      }
    });
  }
}



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
};

const testCalc = new Calculator('body');
testCalc.createCalculator();

console.log(testCalc.add(5,10));
console.log(testCalc.subtract(22,10));
console.log(testCalc.divide(25,5));
console.log(testCalc.multiply(12,3));
console.log(testCalc.getId);