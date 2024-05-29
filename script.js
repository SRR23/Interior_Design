
//  Basic Amount
const minusButton1 = document.querySelector(".basic-amount-decrease");
const plusButton1 = document.querySelector(".basic-amount-increase");
const basicAmount = document.querySelector(".basic-amount");
const basicRoom = document.querySelector(".basic-room-number");

let basicValue = 199; // Initial value
let room = 1;

minusButton1.addEventListener("click", function() {
  if (basicValue <= 199) {
    console.error("Cannot go below the minimum value (199)");
  } else {
    basicValue -= 99;
    room -= 1;
    basicAmount.textContent = `$ ${basicValue}`;
    basicRoom.textContent = `${room} room`;
  }
});

plusButton1.addEventListener("click", function() {
  basicValue += 99;
  room += 1;
  basicAmount.textContent = `$ ${basicValue}`;
  basicRoom.textContent = `${room} room`;
});

// Basic Sign Up
const basic_button = document.querySelector(".basic-signup-button");
const basic_msg = document.querySelector(".basic-message");

basic_button.addEventListener("click", function() {
    basic_msg.textContent = `Thank you for choosing ${room} room`;
});


//  Pro Amount
const minusButton2 = document.querySelector(".pro-amount-decrease");
const plusButton2 = document.querySelector(".pro-amount-increase");
const proAmount = document.querySelector(".pro-amount");
const proRoom = document.querySelector(".pro-room-number");

let proValue = 249; // Initial value
let room2 = 1;

minusButton2.addEventListener("click", function() {
  if (proValue <= 249) {
    console.error("Cannot go below the minimum value (249)");
  } else {
    proValue -= 99;
    room2 -= 1;
    proAmount.textContent = `$ ${proValue}`;
    proRoom.textContent = `${room2} room`;
  }
});

plusButton2.addEventListener("click", function() {
  proValue += 99;
  room2 += 1;
  proAmount.textContent = `$ ${proValue}`;
  proRoom.textContent = `${room2} room`;
});


// Pro Sign Up
const pro_button = document.querySelector(".pro-signup-button");
const pro_msg = document.querySelector(".pro-message");

pro_button.addEventListener("click", function() {
    pro_msg.textContent = `Thank you for choosing ${room2} room`;
});