// grab the dropdown <li> and its arrow toggle
const dropdown = document.querySelector('.dropdown');
const arrow = dropdown.querySelector('.arrow');
const menu  = dropdown.querySelector('.dropdown-menu');

// only intercept clicks on the arrow
arrow.addEventListener('click', function(e) {
  e.stopPropagation();           // don’t let this bubble up to the <a>
  e.preventDefault();            // avoid any default anchor behavior

  // toggle open state
  dropdown.classList.toggle('open');
  menu.style.display = dropdown.classList.contains('open')
    ? 'block'
    : 'none';
});

// close menu if you click anywhere else on the page
document.addEventListener('click', function(e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
    menu.style.display = 'none';
  }
});

// keep your "clicked" highlight on submenu items
dropdown.querySelectorAll('.dropdown-menu li a').forEach(item => {
  item.addEventListener('click', function() {
    dropdown.querySelectorAll('.dropdown-menu li a').forEach(link => {
      link.classList.remove('clicked');
    });
    this.classList.add('clicked');
  });
});
