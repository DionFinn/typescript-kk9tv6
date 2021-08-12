
import './style.css';
import { Cookie } from './models/Cookie';

let cookies: Cookie[] = [];


const cookieSelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('cookieSelector')
);

function init() {
  
  cookies.push(new Cookie('Chocolate'));
  cookies.push(new Cookie('Vanilla'));

  let count = 0;
  for (let c of cookies) {
    let newOption: HTMLOptionElement = document.createElement('option');
    newOption.innerHTML = c.name;
    newOption.value = count.toString();

    count++;
    cookieSelect.add(newOption);
  }

  updateDisplay();
}

function drawCookies() {
  let cookiesDiv: HTMLElement = document.getElementById('cookiesDiv');

  cookiesDiv.innerHTML = "";
  

  for(let cookie of cookies) {
    let newCookieDiv: HTMLElement = document.createElement('div');
    newCookieDiv.className = 'cookie';
    newCookieDiv.style.backgroundColor = cookie.colour;
    newCookieDiv.innerHTML = cookie.chocolateChipNum.toString();

    cookiesDiv.append(newCookieDiv);
  }

}


const buttondiv: HTMLElement = document.getElementById('buttonDiv');
const changeColourBtn: HTMLButtonElement = <HTMLButtonElement>(
  document.getElementById('changeColour-btn')
);
changeColourBtn.addEventListener('click', () => changeColour());

function changeColour() {

  let selectedCookie: Cookie;
  selectedCookie = cookies[cookieSelect.selectedIndex];


  let cookieColourInp: HTMLInputElement = <HTMLInputElement>(
    document.getElementById('cookieColour-inp')
  );
  selectedCookie.colour = cookieColourInp.value;
  updateDisplay();
}

const addChocolateChipBtn: HTMLElement = document.getElementById(
  'addChocolateChip-btn'
);
addChocolateChipBtn.addEventListener('click', () => addChocolateChip());

function addChocolateChip() {

  let selectedCookie: Cookie;
  selectedCookie = cookies[cookieSelect.selectedIndex];

  selectedCookie.chocolateChipNum++;

  updateDisplay();
}

function updateDisplay() {
  drawCookies();
}

init();
