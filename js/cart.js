


document.querySelector('.view-product-link').addEventListener('click', () => {
    const productString = document.querySelector('h1.display-2').textContent;
    const productImage = document.querySelector('.service-icon img').src;
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    if (cart[productString]) {
      cart[productString].quantity += 1;
    } else {
      cart[productString] = { image: productImage, quantity: 1 };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementsByClassName(".view-product-link")[0].innerHTML = "Item added to cart";
    renderCart();
    updateCartCounter();
});

document.querySelector('.view-product-link').addEventListener('click', () => {
  document.querySelector('.view-product-link').innerHTML = 'Item added to cart';
  document.querySelector('.view-product-link').classList.add = 'view-cart-link';
  document.querySelector('.view-product-link').classList.remove = 'view-product-link';
});

document.querySelector('.view-cart-link').addEventListener('click', () => {
  document.querySelector('.view-cart-link').href = '../../cart.html';
});

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let totalQuantity = 0; 
    for (const productString in cart) {
      totalQuantity += cart[productString].quantity;
    }
    document.querySelector('.cart-counter').textContent = totalQuantity;
}


  
function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    const cartList = document.querySelector('.list-container');
    cartList.innerHTML = '';
    for (const [product, details] of Object.entries(cart)) {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
      <div class="item-disc">
            <span class="material-symbols-outlined bin-ico remove-item">
                delete
            </span>    
            <div class="item-name"><h2>${product}</h2></div>
            <div class="item-image"><img src="${details.image}" alt="${product}"></div>
      </div>
      <div class="qty-ui">
            <input class="quantity" type="number" id="quantity" name="quantity" min="1" max="5" value="${cart[product].quantity}">
      </div>
      `;

      cartList.appendChild(cartItem);
      cartItem.querySelector('input').addEventListener('input', (event) => {
        const quantity = parseInt(event.target.value);
        if (quantity > 0) {
          cart[product].quantity = quantity;
        } else {
          delete cart[product];
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCounter();
      });
      cartItem.querySelector('.remove-item').addEventListener('click', () => {
        delete cart[product];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCounter();
      });
    }
    updateCartCounter();
}


function clearCart(){
  localStorage.clear();
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  renderCart();
  updateCartCounter();
}

  
var cartWidgetOnScrolldown = function() {

    var widgetTrigger = $('.cart-widget');

    $WIN.on('scroll', function() {

        if ($WIN.scrollTop() > 150) {
            widgetTrigger.addClass('opaque');
        }
        else {
            widgetTrigger.removeClass('opaque');
        }

    });
};

updateCartCounter();
cartWidgetOnScrolldown();


function sendCartData() {
  
  const cart = JSON.parse(localStorage.getItem('cart')) || {};
  const cartData = Object.entries(cart).map(([key, value]) => ({ product: key, quantity: value.quantity }));

  const formData = {};
  const formFields = ['contactName', 'contactSurname', 'contactEmail', 'contactNumber', 'contactCompany', 'contactVAT', 'contactLineOne', 'contactLineTwo', 'contactCity', 'contactProvince', 'contactPostal'];
  formFields.forEach(field => {
    formData[field] = document.getElementById(field).value;
  });

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '../inc/sendQuote.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ cart: cartData, formData }));
  
  console.log(cartData);
}


updateCartCounter();
cartWidgetOnScrolldown();


