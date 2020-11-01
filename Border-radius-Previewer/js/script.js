const boxElement = document.querySelector('.box');

const topLeftDivElement = document.querySelector('#top-left');
const topRightDivElement = document.querySelector('#top-right');
const bottomRightDivElement = document.querySelector('#bottom-right');
const bottomLeftDivElement = document.querySelector('#bottom-left');

function borderRadiusTopLeft() {
  boxElement.style.borderTopLeftRadius = `${topLeftDivElement.value}px`;
}

function borderRadiusTopRight() {
  boxElement.style.borderTopRightRadius = `${topRightDivElement.value}px`;
}

function borderRadiusBottomRight() {
  boxElement.style.borderBottomRightRadius = `${bottomRightDivElement.value}px`;
}

function borderRadiusBottomLeft() {
  boxElement.style.borderBottomLeftRadius = `${bottomLeftDivElement.value}px`;
}
