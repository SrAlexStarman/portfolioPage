function switchAboutToProjects() {
    const main1 = document.getElementById('main1');
    const main2 = document.getElementById('main2');
    
    if (main1.classList.contains('active')) {
        main1.classList.remove('active');
        main2.classList.add('active'); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

function switchProjectsToAbout() {
    const main1 = document.getElementById('main1');
    const main2 = document.getElementById('main2');
    
    if (main2.classList.contains('active')) {
        main2.classList.remove('active');
        main1.classList.add('active'); 
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

function toggleMenu() {
    const menuItems = document.querySelector('.menu-items');
    menuItems.classList.toggle('open');
};
