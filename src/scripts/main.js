const close = document.querySelector('.close');
const main = document.querySelector('.main');
const navBar = document.querySelector('.nav-main');
close.addEventListener('click', function() {
    document.querySelector(".nav-bar").style.display = 'none';
    // Make the navbar span only one column
    navBar.classList.remove('col-2')
    navBar.classList.add('col-1');
    document.querySelector(".navbar").classList.remove("hidden")
    // Make main span 12 columns
    main.classList.remove('col-9');
    main.classList.add('col-11');
});