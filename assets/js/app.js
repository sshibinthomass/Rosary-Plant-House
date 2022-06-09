/**
 * !=====> : ABOUT AUTHOR : <=====!
 *
 * @author : Md. Samiur Rahman (Mukul)
 * @education : B.Sc. Hons In CSE (SIBACS)
 * @passion : PROGRAMMER & SOFTWARE DEVELOPER
 * @email : sr.mukul9090@gmail.com
 *
 *      </> Happy Coding ☺ </>
 */

// define variable & select elements
const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");
const productPrice=document.querySelector(".product-price");
// let's cart
let cart = [];
// buttons
let buttonsDOM = [];

// TODO: getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("assets/json/products.json");
      //let result = await fetch(
      //  "https://script.google.com/macros/s/AKfycbwhEHwcHRkWt8AqMDQCC0SQMHzMswaS9IIKYx8hd8P6UXp82FURUVr7DZ1AUlH-jj1r/exec"
      //);

      let data = await result.json();

      let products = data.items;

      products = products.map((item) => {
        const { title, price, ava,size,transit,water,sun,common,category } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;

        return { title, price, ava, id, image,size,transit,water,sun,common,category  };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// TODO: display products
class UI {
  displayProducts(products) {
    // console.log(products);

    let result = "";
    products.forEach((product) => {
      //console.log(product.ava);
      if (product.ava == 1 
        //&& product.category=="succulents"
        ) 
      {
        result += `
      <!-- single product start -->
        <article class="product">
          <div class="img-container">
            <img
              src=${product.image}
              alt="product"
              class="product-img"
            />
          </div>
          <div class="d-flex justify-content-center">
 <!-- Button trigger modal -->
          <button type="button"           id="${product.id}"
          value="${product.id}" class="btn btn-link" data-toggle="modal" data-target="#exampleModal${product.id}">
          ${product.id}. ${product.title}
          </button>
          </div>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header p-0 ml-3 pt-2">
          <h5 class="modal-title text-center" id="exampleModalLabel">
          <strong>${product.id}. ${product.title} </strong>
        </h5>
          <button type="button" class="close  mr-2" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

            <p class="card-text">
              <div class="text-center m-0 p-0" >
                <img
                class="img-fluid"
                style="border-radius: 5%;"
                alt="Responsive image"
                src=${product.image}
                width="200px"
              />
              </div>

            </p>
            <table class="table table-hover mt-3">
              <tbody>
              <tr >
                  <td class="py-1">Category</td>
                  <td class="py-1">: ${product.category }</td>
              </tr>
              <tr>
                  <td class="py-1">Transit risk</td>
                  <td class="py-1">: ${product.transit}</td>
              </tr>
              <tr>
                  <td class="py-1">Size</td>
                  <td class="py-1">: ${product.size} Inches </td>
              </tr>
              <tr>
                  <td class="py-1">Price</td>
                  <td class="py-1">:                       {% if product.orgprice != product.price %}
                    <strike>&#8377;{{product.orgprice}}</strike>
                    {% endif %}
                    <b> &#8377; ${product.price}</b>
                  </td>
              </tr>
              <tr>
                  <td class="py-1">Watering</td>
                  <td class="py-1">: ${product.water}</td>
              </tr>
              <tr>
                  <td class="py-1">Sunlight</td>
                  <td class="py-1">: ${product.sun}</td>
              </tr>
              <tr>
                <td class="py-1">Maintenance</td>
                <td class="py-1">: {{product.maintenance}}</td>
              </tr>

              </tbody>
            </table>  
            <tr>
            <td>
              <div class="d-flex justify-content-around pt-0" style="color: black;">
              <a href="https://wa.me/message/Z73MZA6IMYFWO1" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
              <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
              <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
              <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgba(0, 0, 0, 0.295);"></a>
           
            </div>
            </td>
          </tr>                    
            <div class="modal-footer py-1 ">
            <div  >
                <button type="button" class="btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
            </div>
            </div>
          </div>
        </div>
          </div>
          
          <h4 class="mt-0">Price: ₹ ${product.price}</h4>
          <div class="d-flex justify-content-center">
          <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
          </div>
        </article>
        <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  getBagButtons() {
    // bag buttons
    const buttons = [...document.querySelectorAll(".bag-btn1")];
    // console.log(buttons);

    buttonsDOM = buttons;

    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);

      if (inCart) {
        button.innerText = "In Cart";
        button.disabled = true;
      } else {
        button.addEventListener("click", (event) => {
          event.target.innerText = "In Cart";
          event.target.disabled = true;

          // *get product from products
          let cartItem = { ...Storage.getProduct(id), amount: 1 };
          // console.log(cartItem);

          // *add product to the cart
          cart = [...cart, cartItem];
          // console.log(cart);

          // *save cart in local storage
          Storage.saveCart(cart);
          //console.log(cart);

          // *set cart values
          this.setCartValues(cart);

          // *display cart item
          this.addCartItem(cartItem);

          // *show the cart
          this.showCart();
        });
      }
    });
  }
  setCartValues(cart) {
    let tempTotal = 0;
    let itemsTotal = 0;

    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
    //console.log(cartTotal, cartItems);
  }


  // add item to cart
  addCartItem(item) {
    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `<img src=${item.image} alt="product" />

            <div>
            <div class="mb-0">
              <h4>${item.title}</h4>
              </div>
              <h4>Price : ₹ ${item.price}</h4>
              <span class="remove-item" onClick="window.location.reload()" data-id=${item.id}>Remove item</span>
            </div>

            <div>
              <i class="fa fa-plus" aria-hidden="true" data-id=${item.id}></i>
              <p class="item-amount mb-0">${item.amount}</p>
              <i class="fa fa-minus" aria-hidden="true" data-id=${item.id}></i>
            </div>`;

    cartContent.appendChild(div);
    // console.log(cartContent);
  }
  // ? showCart() & hideCart() Method
  showCart() {
    cartOverlay.classList.add("transparentBcg");
    cartDOM.classList.add("showCart");
  }
  hideCart() {
    cartOverlay.classList.remove("transparentBcg");
    cartDOM.classList.remove("showCart");
  }

  // ? setup app
  setupAPP() {
    cart = Storage.getCart();
    this.setCartValues(cart);
    this.populateCart(cart);
    //console.log(cart)
    // cart show / hide button
    cartBtn.addEventListener("click", this.showCart);
    closeCartBtn.addEventListener("click", this.hideCart);
  }

  populateCart(cart) {
    cart.forEach((item) => this.addCartItem(item));
  }

  // TODO: cart logic functionality
  cartLogic() {
    // clear cart button
    clearCartBtn.addEventListener("click", () => {
      this.clearCart();
    });

    // cart functionality
    cartContent.addEventListener("click", (event) => {
      if (event.target.classList.contains("remove-item")) {
        let removeItem = event.target;
        let id = removeItem.dataset.id;
        cartContent.removeChild;
        removeItem.parentElement.parentElement;
        this.removeItem(id);
      } else if (event.target.classList.contains("fa-plus")) {
        let addAmount = event.target;
        let id = addAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount = tempItem.amount + 1;
        Storage.saveCart(cart);
        this.setCartValues(cart);
        addAmount.nextElementSibling.innerText = tempItem.amount;
      } else if (event.target.classList.contains("fa-minus")) {
        let lowerAmount = event.target;
        let id = lowerAmount.dataset.id;
        let tempItem = cart.find((item) => item.id === id);
        tempItem.amount = tempItem.amount - 1;

        if (tempItem.amount > 0) {
          Storage.saveCart(cart);
          this.setCartValues(cart);
          lowerAmount.previousElementSibling.innerText = tempItem.amount;
        } else {
          cartContent.removeChild;
          lowerAmount.parentElement.parentElement;
          this.removeItem(id);
          location.reload();
        }
      }
    });
  }
  clearCart() {
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));
    console.log(cartContent.children);

    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    this.hideCart();
  }
  removeItem(id) {
    cart = cart.filter((item) => item.id !== id);
    this.setCartValues(cart);
    Storage.saveCart(cart);

    let button = this.getSingleButton(id);
    button.disabled = false;
    button.innerHTML = `<i class="fas fa-shopping-cart"></i>add to cart`;
  }
  getSingleButton(id) {
    return buttonsDOM.find((button) => button.dataset.id === id);
  }
}

// TODO: local storage
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  // getProduct() method
  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }

  // ? save cart item local storage
  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // ? get cart item local storage
  static getCart() {
    return localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  }
}

// add event listener
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  // setup app
  ui.setupAPP();
  // get all products
  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
      ui.cartLogic();
    });
});

function getBilling(cart) {
  //var text="";
  let tempTotal = 0;
  let itemsTotal = 0;
  const val=[];

    cart.map((item) => {
      val.push(item.id+ ". "+ item.title+"- ₹",item.price+" * "+item.amount+" = ₹"+(item.price * item.amount) +" %0a ");
    });

  //console.log(tempTotal, itemsTotal);
  return val.join('');
}

function myFunction() {
  cart = Storage.getCart();


  let priceTotal = 0;
  let itemsTotal = 0;

  cart.map((item) => {
    priceTotal += item.price * item.amount;
    itemsTotal += item.amount;
  });

  var finalText="*Total Plants= "+itemsTotal+"*%0a*Total Price=₹"+priceTotal+"*%2Bdelivery%0a%0a";


  console.log(cart);
  const productText = getBilling(cart);
  //console.log(productText);
  var linkText = "https://api.whatsapp.com/send?phone=%2B917904050237&text=*Hello, i have chosen the following plants from your site* %0a";
  window.open(linkText.concat(productText,finalText), "_blank");
}
console.log("hello");
