const openMobileMenuBtn = document.querySelector('.burguer-menu');
const navbarEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenuBtn = document.querySelector('#close-button');

const shoppingCart = document.querySelector('.shopping-cart');
const openShoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const exitShoppingCartBtn = document.querySelector('.back-arrow');

const yardSaleLogo = document.querySelector('.logo');
const shoppingTitle = document.querySelector('#shopping-title');
const mobileMediaQuery = window.matchMedia('(max-width: 640px)');

const mainContainer = document.querySelector('.main-container');
const cardsContainer = document.querySelector('.cards-container');

const productDetail = document.querySelector('.product-detail');

const productDetailCloseBtn = document.querySelector('.product-detail-close');
const slider = document.querySelector('.slider');

navbarEmail.addEventListener('click', toggleDesktopMenu);

openMobileMenuBtn.addEventListener('click', toggleMobileMenu);
closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

openShoppingCartBtn.addEventListener('click', toggleShoppingCart);
exitShoppingCartBtn.addEventListener('click', toggleShoppingCart);
mobileMediaQuery.addEventListener('change', toggleShoppingCartTitle);

productDetailCloseBtn.addEventListener('click', exitProductDetail);

yardSaleLogo.addEventListener('click', redirectToHomePage);

window.addEventListener('resize', verticallyResizeMainContainer);
mobileMediaQuery.addEventListener('change', verticallyResizeMainContainer);

function toggleDesktopMenu() {
    toggleDisplayedViews(desktopMenu, [shoppingCart, productDetail]);
}

function toggleMobileMenu() {
    if (mobileMediaQuery.matches) {
        toggleDisplayedViews(mobileMenu);
    } else {
        toggleDisplayedViews(mobileMenu, [productDetail]);
    }
}

function toggleShoppingCart() {
    if (mobileMediaQuery.matches) {
        toggleDisplayedViews(shoppingCart);
        toggleShoppingCartTitle();
    } else {
        toggleDisplayedViews(shoppingCart, [desktopMenu, productDetail]);
    }
}

function toggleShoppingCartTitle() {
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if (!isShoppingCartClosed && mobileMediaQuery.matches) {
        yardSaleLogo.classList.add('inactive');
        shoppingTitle.classList.remove('inactive');
        document.body.classList.add('no-scroll');
    } else {
        // console.log('shopping cart closed');
        yardSaleLogo.classList.remove('inactive');
        shoppingTitle.classList.add('inactive');
        document.body.classList.remove('no-scroll');
    }
}

function toggleProductDetail(e) {
    const open = e.currentTarget.classList.contains('product-card');

    toggleDisplayedViews(productDetail, [shoppingCart, desktopMenu], open);
}

function toggleDisplayedViews(
    elementToDisplay,
    elementsToHide = [],
    justOpenIt = false
) {
    for (let element of elementsToHide) {
        const isElementDisplayed = !element.classList.contains('inactive');

        if (isElementDisplayed) {
            element.classList.add('inactive');
        }
    }

    if (justOpenIt) {
        elementToDisplay.classList.remove('inactive');
        return;
    }

    elementToDisplay.classList.toggle('inactive');
}

function exitProductDetail() {
    toggleDisplayedViews(productDetail, [desktopMenu]);
    verticallyResizeMainContainer();
    clearSlider();
}

function renderProducts(arr) {
    for (let product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('div');
        productImage.classList.add('product-image');
        productImage.style.backgroundImage = `url(${product.images[0]})`;
        // productImage.setAttribute('src', product.images[0]);
        // productImage.setAttribute('alt', product.name);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.append(productPrice, productName);

        const productInfoFigure = document.createElement('figure');

        const addToCartIcon = document.createElement('img');
        addToCartIcon.setAttribute('src', './assets/icons/bt_add_to_cart.svg');
        addToCartIcon.setAttribute('alt', `add ${product.name} to cart`);

        productInfoFigure.appendChild(addToCartIcon);

        productInfo.append(productInfoDiv, productInfoFigure);

        productCard.append(productImage, productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

// Renderizando los detalles del producto seleccionado

const productCards = [...document.querySelectorAll('.product-card')];

productCards.forEach((productCard) => {
    productCard.addEventListener('click', renderCurrentItemDetails);
});

function renderCurrentItemDetails(e) {
    toggleProductDetail(e);

    const currentCardIndex = productCards.indexOf(e.currentTarget);

    const currentItem = productList.find((product, productIndex) => {
        if (productIndex == currentCardIndex) {
            return product;
        }
    });

    const itemPrice = document.querySelector('#item-price');
    itemPrice.innerText = currentItem.price;

    const productName = document.querySelector('#item-name');
    productName.innerText = currentItem.name;

    const itemDescription = document.querySelector('#item-description');
    itemDescription.innerText = currentItem.description;

    clearSlider();
    renderSlider(currentItem);
    verticallyResizeMainContainer();
    smoothScrollToTop();
}

function renderSlider(currentItem) {
    slider.classList.add('--displayed');

    const slidesContainer = document.createElement('div');
    slidesContainer.setAttribute('class', 'slides-container');

    let slides = '';

    currentItem.images.forEach((image) => {
        slides += `
        <div class="slide">
            <img
                src="${image}"
                alt="${currentItem.name}"
            />
        </div>
        `;
    });

    slidesContainer.innerHTML += slides;

    slider.appendChild(slidesContainer);

    const slidesArray = document.querySelectorAll('.slide');

    const buttonsHTML = Array.from(slidesArray, () => {
        return `<span class="slide-btn"></span>`;
    });

    const slidesNav = document.createElement('div');
    slidesNav.setAttribute('class', 'slides-nav');

    slidesNav.innerHTML = buttonsHTML.join('');

    slider.appendChild(slidesNav);

    const buttonsArray = slider.querySelectorAll('.slide-btn');

    buttonsArray.forEach((button, i) => {
        button.addEventListener('click', () => {
            // un-select all items
            slidesArray.forEach((item) =>
                item.classList.remove('--slide-selected')
            );
            buttonsArray.forEach((button) =>
                button.classList.remove('--btn-selected')
            );

            // select item cliked
            slidesArray[i].classList.add('--slide-selected');
            button.classList.add('--btn-selected');
        });
    });

    // Select the first item on page load
    slidesArray[0].classList.add('--slide-selected');
    buttonsArray[0].classList.add('--btn-selected');
}

function clearSlider() {
    if (slider.classList.contains('--displayed')) {
        slider.classList.remove('--displayed');
        slider.innerHTML = '';
    }
}

function smoothScrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function productDetailHeight() {
    let height = productDetail.offsetHeight;

    return height;
}

function verticallyResizeMainContainer() {
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if (!isProductDetailClosed && mobileMediaQuery.matches) {
        mainContainer.style.top = `${productDetailHeight() + 60}px`;
    } else {
        mainContainer.style.top = `auto`;
    }
}

function redirectToHomePage() {
    return (location.href = 'index.html');
}

function dynamicActiveNavLink() {
    const navLinks = document.querySelectorAll('.navbar-link');

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            navLinks.forEach((link) => {
                link.classList.remove('--active-link');
            });

            e.currentTarget.classList.add('--active-link');
        });
    });

    navLinks[0].classList.add('--active-link');
}

dynamicActiveNavLink();
