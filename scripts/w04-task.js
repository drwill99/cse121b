/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Dallin Williams",
    photo: "images/mask.jpg",
    favoriteFoods: [
        "Steak",
        "Chicken",
        "BBQ",
        "Pasta"
    ],
    hobbies: [
        "Snowboarding",
        "Hiking",
        "Camping",
        "Shooting"
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
     place: "Rexburg, ID",
     length: "3 years"
    },
    {
     place: "Williston, ND",
     length: "1 year"
    }
);

/* DOM Manipulation - Output */
/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(function(food) {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favoriteFoods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(function(hobby) {
    let ul = document.createElement('ul');
    ul.textContent = hobby;
    document.querySelector('#hobbies').appendChild(ul);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(function(place) {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#placesLived').appendChild(dt);
    document.querySelector('#placesLived').appendChild(dd);
});
