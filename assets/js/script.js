// Sidebar function

function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}

// Open and close window function for portfolio site

const details = document.querySelector('.details');
const blur = document.querySelector('.blur');
const openCali = document.querySelector('.california');
const openShop = document.querySelector('.design-shop');
const shopDetails = document.querySelector('.detailsShop');
const closeDetails = document.querySelector('.close-details');
const closeShop = document.querySelector('.close-shop');

openCali.addEventListener('click', function () {
  //   console.log('button test');
  details.classList.remove('hidden');
  blur.classList.remove('hidden');
});

openShop.addEventListener('click', function () {
  shopDetails.classList.remove('hidden');
  blur.classList.remove('hidden');
});

closeDetails.addEventListener('click', function () {
  // console.log('closing test');
  details.classList.add('hidden');
  blur.classList.add('hidden');
});

closeShop.addEventListener('click', function () {
  shopDetails.classList.add('hidden');
  blur.classList.add('hidden');
});
