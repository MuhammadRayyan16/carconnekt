let box = document.querySelector('.section-1');
let menuBox = document.querySelector('.menu-box');
let value = true;

const toggle = () => {
   if (value === true) {
      box.style.marginTop = '270px';
      setTimeout(() => {
         menuBox.style.zIndex = '0';
      }, 500)
      value = false;
   } else {
      box.style.marginTop = '0px';
      menuBox.style.zIndex = '-1';
      value = true;
   }
}

let links = document.querySelectorAll('a');

const load = () => {
   if (window.location.href.endsWith('/') || window.location.href.endsWith('/index.html')) {
      links[0].style.color = '#569dd0';
      links[5].style.color = '#569dd0';
   }
   else if (window.location.href.endsWith('/about.html')) {
      links[1].style.color = '#569dd0';
      links[6].style.color = '#569dd0';
   }
   else if (window.location.href.endsWith('/vechile-models.html')) {
      links[2].style.color = '#569dd0';
      links[7].style.color = '#569dd0';
   }
   else if (window.location.href.endsWith('/testimonials.html')) {
      links[3].style.color = '#569dd0';
      links[8].style.color = '#569dd0';
   }
   else if (window.location.href.endsWith('/contact.html')) {
      links[4].style.color = '#569dd0';
      links[9].style.color = '#569dd0';
   }
}

load();

let car = document.querySelector('.image img');
let carPrice = document.querySelector('.info h4 span');
let carMake = document.querySelectorAll('.make p');
let carModel = document.querySelectorAll('.model p');
let carYear = document.querySelectorAll('.year p');
let carTransmission = document.querySelectorAll('.transmission p');
let carDoors = document.querySelectorAll('.doors p');

const changeCar = (carimg, price, make, model, year, transmission, doors) => {
   car.src = `./img/${carimg}.png`;
   carPrice.innerHTML = ` ${price}/day`;
   carMake[1].innerHTML = `${make}`;
   carModel[1].innerHTML = `${model}`;
   carYear[1].innerHTML = `${year}`;
   carTransmission[1].innerHTML = `${transmission}`;
   carDoors[1].innerHTML = `${doors}`;
}


let input = document.querySelector('.footer-input');
let btn = document.querySelector('.footer-button');
let sbsBox = document.querySelector('.sbs-box');
let p = document.querySelector('.sbs-box p');

const handleSubscription = () => {
   if (input.value.trim() !== '' && input.value.includes('@')) {
      p.innerHTML = `You have successfully subscribed: "${input.value}"`;
      sbsBox.style.top = '15px';
      setTimeout(() => {
         sbsBox.style.top = '';
      }, 2000);
      input.value = '';
   } else {
      p.innerHTML = `Invalid input. Please enter a valid email address.`;
      sbsBox.style.top = '15px';
      setTimeout(() => {
         sbsBox.style.top = '';
      }, 2000);
   }
};

btn.addEventListener('click', handleSubscription);