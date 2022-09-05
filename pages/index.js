// Desktop menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    const isMenuCartIcon = menuCartIcon.classList.contains('inactive');

    if (!isMenuCartIcon)
        menuCartIcon.classList.toggle('inactive');

    desktopMenu.classList.toggle('inactive');
}

// Mobile menu
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu() {
    const isMenuCartIcon = menuCartIcon.classList.contains('inactive');

    if (!isMenuCartIcon)
        menuCartIcon.classList.toggle('inactive');

    mobileMenu.classList.toggle('inactive');
}

// Shopping cart menu
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const menuCartIcon = document.querySelector('.product-detail');
shoppingCart.addEventListener('click', toggleShoppingCartMenu);
function toggleShoppingCartMenu() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose)
        mobileMenu.classList.toggle('inactive');
    
    if(!isDesktopMenuClose)
        desktopMenu.classList.toggle('inactive');

    menuCartIcon.classList.toggle('inactive');
}