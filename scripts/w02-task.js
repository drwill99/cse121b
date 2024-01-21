/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = 'Dallin Williams';
const Year = new Date();
let currentYear = Year.getFullYear();
let profilePicture = 'images/mask.jpg';

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

imageElement.setAttribute('src', `${profilePicture}`);
nameElement.innerHTML = (`<strong>${fullName}</strong>`);
yearElement.innerHTML = (`${currentYear}`);
imageElement.setAttribute('alt', `${fullName}`);

/* Step 5 - Array */

const favoriteFood = ['Pizza', 'Tacos', 'Burgers'];

foodElement.innerHTML += `<br>${favoriteFood}`;

const moreFood = 'Steak';
favoriteFood.push(moreFood);

foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;

favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;