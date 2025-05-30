// Improved JS include for header and footer with callback and nav highlighting
function includeHTML(selector, url, callback) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback();
    });
}

function setActiveNav() {
  // Set active class on nav links based on current page
  const page = window.location.pathname.split('/').pop();
  const aboutBtns = document.querySelectorAll('#about-btn, #about-btn-mobile');
  const projectsBtns = document.querySelectorAll('#projects-btn, #projects-btn-mobile');
  const codeBtns = document.querySelectorAll('#code-btn, #code-btn-mobile');
  if (page === 'index.html' || page === '' || page === 'index') {
    aboutBtns.forEach(btn => btn.classList.add('active'));
    projectsBtns.forEach(btn => btn.classList.remove('active'));
    codeBtns.forEach(btn => btn.classList.remove('active'));
  } else if (page === 'projects.html') {
    aboutBtns.forEach(btn => btn.classList.remove('active'));
    projectsBtns.forEach(btn => btn.classList.add('active'));
    codeBtns.forEach(btn => btn.classList.remove('active'));
  } else if (page === 'code.html') {
    aboutBtns.forEach(btn => btn.classList.remove('active'));
    projectsBtns.forEach(btn => btn.classList.remove('active'));
    codeBtns.forEach(btn => btn.classList.add('active'));
  }
}

function setupMenu() {
  // Burger menu functionality
  window.toggleMenu = function() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('open');
  };

  // Close menu when clicking outside
  document.addEventListener('click', function (event) {
    const menuItems = document.querySelector('.menu-items');
    const burgerIcon = document.querySelector('.burger-icon');
    if (menuItems && menuItems.classList.contains('open') &&
        !menuItems.contains(event.target) &&
        !burgerIcon.contains(event.target)) {
      menuItems.classList.remove('open');
    }
  });

  // Handle window resize
  window.addEventListener('resize', function () {
    const menuItems = document.querySelector('.menu-items');
    if (menuItems && window.innerWidth > 768 && menuItems.classList.contains('open')) {
      menuItems.classList.remove('open');
    }
  });
}

// Inject header, then setup nav/menu, then inject footer
includeHTML('header', 'header.html', function() {
  setActiveNav();
  setupMenu();
});
includeHTML('footer', 'footer.html');
