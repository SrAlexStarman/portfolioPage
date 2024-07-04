function switchMain() {
    const main1 = document.getElementById('main1');
    const main2 = document.getElementById('main2');
    
    if (main1.classList.contains('active')) {
        main1.classList.remove('active');
        setTimeout(() => main2.classList.add('active'), 50);
    } else {
        main2.classList.remove('active');
        setTimeout(() => main1.classList.add('active'), 50);
    }
};
