const dropdownIcon = document.querySelector('.dropdown-icon');
const menuHeader = document.querySelector('.menuheader');

dropdownIcon.addEventListener('click', function () {
  menuHeader.classList.toggle('show');
});

window.addEventListener('resize', function () {
  if (window.innerWidth >= 600) {
    menuHeader.classList.remove('show');
  }
});
