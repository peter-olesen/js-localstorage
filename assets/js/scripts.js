// Write cool JavaScript below

// localStorage setItem, getItem, removeItem
localStorage.setItem('name', 'Bob');
localStorage.getItem('name');
localStorage.removeItem('name');

// sessionStorage setItem, getItem, removeItem
sessionStorage.setItem('name', 'John');
sessionStorage.getItem('name');
sessionStorage.removeItem('name');

// document.cookie Cookies that never expire (max per Chrome is 400 days: https://developer.chrome.com/blog/cookie-max-age-expires)
// UTC is 1 hour behind Denmark so (2025, 0, 1) will become 2024, 12, 31, 23:00
document.cookie = 'name=Kyle; expires=' + new Date (9999, 0, 1).toUTCString();
document.cookie = 'lastName=Smith; expires=' + new Date (9999, 0, 1).toUTCString();
// console.log(document.cookie);

let myObject = {
    name: 'Peter',
    age: 33,
};

let myObject_serialized = JSON.stringify(myObject);
// console.log(myObject_serialized);

localStorage.setItem('myObject', myObject_serialized);
// console.log(localStorage);

let myObject_deserialized = JSON.parse(localStorage.getItem('myObject'));

console.log(myObject_deserialized);