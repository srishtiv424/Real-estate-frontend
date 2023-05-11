

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navlist = document.querySelector('.nav-list')

burger.addEventListener('click', () => {
    navbar.classList.toggle('hide');
    rightNav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
   
})


