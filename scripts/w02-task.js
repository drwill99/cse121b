/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Dallin Williams"

let currentYear = Date

let profilePicture = images/mask.jpg

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

const imageElement = document.querySelector('#profile-image');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.innerHTML = `<strong>${currentYear}</strong>`;

imageElement.setAttribute('src', profilePicture);



/* Step 5 - Array */






