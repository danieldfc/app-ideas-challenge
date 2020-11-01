const divResultado = document.querySelector('div.result');
const buttonElement = document.querySelector('button');

function convertBinaryToDecimal(binary) {
  if (binary.length == 0) {
    alert('Você não digitou parâmetro para converter!')
    return;
  };

  const verifyOcurenceInvalid = binary.search(/\d[2-9]/);

  if (verifyOcurenceInvalid == 0) {
    alert('Você digitou parâmetros invalidos! Digite parâmetros 0 ou 1!');
    return;
  }

  return parseInt(binary, 2);
}

buttonElement.addEventListener('click', () => {
  divResultado.setAttribute('class', 'result no-visibility');

  const inputBinary = document.querySelector('input#binary');
  const convertedToDecimal = convertBinaryToDecimal(inputBinary.value);

  if (convertedToDecimal) {
    const divResultado = document.querySelector('div.result')
    divResultado.setAttribute('class', 'result visibility');
    divResultado.querySelector('input').value = convertedToDecimal;
  }
});

