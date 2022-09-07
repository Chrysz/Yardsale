// Desktop menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu() {
    const isMenuCartIcon = menuCartIcon.classList.contains('inactive');

    if (!isMenuCartIcon)
        menuCartIcon.classList.toggle('inactive');

    closeProductDetailAside();
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

    closeProductDetailAside();
    mobileMenu.classList.toggle('inactive');
}

// Shopping cart menu
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const menuCartIcon = document.querySelector('#shoppingCardContainer');
shoppingCart.addEventListener('click', toggleShoppingCartMenu);
function toggleShoppingCartMenu() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClose)
        mobileMenu.classList.toggle('inactive');

    if (!isDesktopMenuClose)
        desktopMenu.classList.toggle('inactive');
    
    closeProductDetailAside();
    menuCartIcon.classList.toggle('inactive');
}

const cardsContainer = document.querySelector('.cards-container');

// Function product list
const productDetailContainer = document.querySelector('#productDetail');

// Product detail
const productDetailCloseIcon = document.querySelector('.product-detail-close');
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);
function openProductDetailAside(){
    const isDesktopMenuClose = desktopMenu.classList.contains('inactive');
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuCartIcon = menuCartIcon.classList.contains('inactive');

    if(!isDesktopMenuClose)
        desktopMenu.classList.add('inactive');
    if(!isMobileMenuClose)
        mobileMenu.classList.add('inactive');
    if(!isMenuCartIcon)
        menuCartIcon.classList.add('inactive');

    productDetailContainer.classList.remove('inactive');
}
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

// Product list
const productList = [
    { name: 'Bike', price: 120, image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg' },
    { name: 'Bike', price: 121, image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg' },
    { name: 'Bike', price: 122, image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg' },
    { name: 'Bike Novice', price: 123, image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg' },
    { name: 'Bike Medium', price: 124, image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg' },
    { name: 'Bike Pro', price: 125, image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?cs=srgb&dl=pexels-philipp-m-100582.jpg&fm=jpg' },
];
function renderProducts(arrObject){
    for (prod of arrObject) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImage = document.createElement('img');
        productImage.setAttribute('src', prod.image);
        productImage.addEventListener('click', openProductDetailAside);
        
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$'+prod.price;
        const productName = document.createElement('p');
        productName.innerText = prod.name;
        
        const productInfoFigure = document.createElement('figure');
        const productFigureImgCart = document.createElement('img');
        productFigureImgCart.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productFigureImgCart);
        productInfoDiv.append(productPrice, productName);
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImage, productInfo);
        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);