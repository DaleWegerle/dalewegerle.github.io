/*const quoteItems = document.querySelector(".cart-item");

var addToCartButtons = document.getElementsByClassName('view-product-link')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', popProductsArr)
    }



 function popProductsArr(event){
        var products = JSON.parse(localStorage.getItem("CART")) || [];
        var button = ""
        var shopItem = ""
        var productName = ""
        var imageSrc = ""
        var button = event.target
        var shopItem = button.parentElement.parentElement
        var productName = shopItem.getElementsByClassName('display-2')[0].innerText
        var imageSrc = document.getElementsByClassName('service-icon')[0].firstElementChild.src

        
        var product = {
            id: productName,
            name: productName,
            image: imageSrc
        }

        products.push({...product})

        //console.log(product.id)
        localStorage.setItem("CART", JSON.stringify(products));

        renderCartItems()
 }


 var cart = JSON.parse(localStorage.getItem("CART")) || [];


 function renderCartItems() {
    quoteItems.innerHTML = ""; // clear cart element

    cart.forEach((item) => {
        quoteItems.innerHTML += `
        <div class="cart-item">
        <div class="item-disc">
            <span class="material-symbols-outlined bin-ico">
                delete
            </span>    
            <div class="item-name"><h2>DSE160</h2></div>
            <div class="item-image"><img src="products/dseats/images/160.jpg" alt=""></div>
        </div>
        <div class="qty-ui">
                <div class="units">
                    <div class="butn minus">-</div>
                    <div class="number">1</div>
                    <div class="butn plus">+</div>       
                </div>
        </div>
    </div>
        `;
    });
  }

 let cart = JSON.parse(localStorage.getItem("CART")) || [];

  
  // update cart
  function updateCart() {
   // renderCartItems();
    //renderSubtotal();
  
    // save cart to local storage
    localStorage.setItem("CART", JSON.stringify(cart));
  }*/

 //#########################################################



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
    renderCart();
    updateCartCounter();
  });

  function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    let totalQuantity = 0;
    for (const product in cart) {
      totalQuantity += cart[product].quantity;
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
      });
    }
  }

  function clearCart(){
    localStorage.clear();
    const cart = JSON.parse(localStorage.getItem('cart')) || {};
    renderCart();
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

cartWidgetOnScrolldown();




 /*
const cart = {
  items: [],
  addItem: function (product) {
    this.items.push(...product);
    localStorage.setItem('cart', JSON.stringify(this.items));
  },
  removeItem: function (index) {
    this.items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.items));
  },
  updateQuantity: function (index, quantity) {
    this.items[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(this.items));
  }
};

document.querySelector('.view-product-link').addEventListener('click', () => {
  const productTitle = document.querySelector('.display-2').textContent;
  const productImage = document.querySelector('.service-icon img').src;
  const product = { title: productTitle, image: productImage, quantity: 1 };
  cart.addItem(product);
});

function renderCart() {
  const cartTitle = document.querySelector('.cart-title');
  cartTitle.innerHTML = '';
  cart.items.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <h2>${item.title}</h2>
      <img src="${item.image}" alt="${item.title}">
      <input type="number" value="${item.quantity}" min="1">
      <button>Remove</button>
    `;
    cartTitle.appendChild(cartItem);
    const quantityInput = cartItem.querySelector('input[type="number"]');
    quantityInput.addEventListener('change', () => {
      cart.updateQuantity(index, parseInt(quantityInput.value));
    });
    const removeButton = cartItem.querySelector('button');
    removeButton.addEventListener('click', () => {
      cart.removeItem(index);
      renderCart();
    });
  });
}

renderCart();*/
