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
const productPrice = document.querySelector(".product-price");
const marquee = document.querySelector(".marquee");
const footIcons = document.querySelector(".foot-icons");
const marqueeProduct = document.querySelector(".marquee-product");
const navbarConst = document.querySelector(".navbar-const");
const productsDOM = document.querySelector(".products-center");
const productsDOM1 = document.querySelector(".products-center1");
const productsDOM2 = document.querySelector(".products-center2");
const productsDOM3 = document.querySelector(".products-center3");
const productsDOM4 = document.querySelector(".products-center4");
const productsDOM5 = document.querySelector(".products-center5");
const productsDOM6 = document.querySelector(".products-center6");
const productsDOM7 = document.querySelector(".products-center7");
const productsDOM8 = document.querySelector(".products-center8");
const productsDOM9 = document.querySelector(".products-center9");
const productsDOM10 = document.querySelector(".products-center10");
const productsDOM11 = document.querySelector(".products-center11");
const productsDOM12 = document.querySelector(".products-center12");
const productsDOM13 = document.querySelector(".products-center13");
const productsDOM14 = document.querySelector(".products-center14");
const productsDOM15 = document.querySelector(".products-center15");
const productsDOM16 = document.querySelector(".products-center16");
const productsDOM17 = document.querySelector(".products-center17");
const productsDOM18 = document.querySelector(".products-center18");
const productsDOM19 = document.querySelector(".products-center19");
const productsDOM20 = document.querySelector(".products-center20");
const productsDOM21 = document.querySelector(".products-center21");
const productsDOM22 = document.querySelector(".products-center22");
const productsDOM23 = document.querySelector(".products-center23");
const careDOM = document.querySelector(".products-care");
const testimonialDOM=document.querySelector(".testimonial-items");
const footerDOM=document.querySelector(".footer-all");


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
      // );

      let data = await result.json();

      let products = data.items;

      products = products.map((item) => {
        const {
          title,
          orgPrice,
          price,
          ava,
          size,
          transit,
          water,
          sun,
          common,
          category,
          mother,
          hanging,
          combo,
          indoor,
          restock,
        } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;

        return {
          title,
          orgPrice,
          price,
          ava,
          id,
          image,
          size,
          transit,
          water,
          sun,
          common,
          category,
          mother,
          hanging,
          combo,
          indoor,
          restock,
        };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}


class Communities {
  async getCommunities() {
    try {
      let result = await fetch("assets/json/community.json");

      let data = await result.json();

      let communities = data.items;

      communities = communities.map((item) => {
        const {
          embeded
        } = item.fields;
        const { cId } = item.sys;

        return {
         cId,
          embeded,
        };
      });
      return communities;
    } catch (error) {
      console.log(error);
    }
  }
}
// TODO: display products
class UI {
  //All Plants
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      if (
        product.ava == 1
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
            />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
              <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
              </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
              <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
              </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
              <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
              </div>`;
        }
        result += `             <div class="category_badge">
            <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
            </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
              <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
              </div>`;
        }

        result += `</div>
          <div class="d-flex justify-content-center">
          <!-- Button trigger modal -->
          <button type="button"           id="${product.id}"
          value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
          ${product.id}. ${product.title}
          </button>
          </div>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header p-0 ml-3 pt-2">
          <h4 class="modal-title text-center" id="exampleModalLabel">
          <strong>${product.id}. ${product.title} </strong>
        </h4>
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
                  <td class="py-1">: ${product.category}</td>
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
                  <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
              <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
              </tbody>
            </table>  
            <tr>
            <td>
              <div class="d-flex justify-content-around pt-0" style="color: black;">
              <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
              <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
              <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
              <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
           
            </div>
            </td>
          </tr>                    
            <div class="modal-footer py-1 ">
            <div  >
                <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
            </div>
            </div>
          </div>
        </div>

          </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
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
  //1_lowRisk
  lowRisk_1(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.transit == "Low") {
        result += `
      <!-- single product start -->
        <article class="product">
          <div class="img-container">
            <img
              src=${product.image}
              alt="product"
              class="product-img"
            />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
              <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
              </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
              <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
              </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
              <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
              </div>`;
        }
        result += `             <div class="category_badge">
            <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
            </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
              <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
              </div>`;
        }

        result += `</div>
          <div class="d-flex justify-content-center">
          <!-- Button trigger modal -->
          <button type="button"           id="${product.id}"
          value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
          ${product.id}. ${product.title}
          </button>
          </div>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header p-0 ml-3 pt-2">
          <h4 class="modal-title text-center" id="exampleModalLabel">
          <strong>${product.id}. ${product.title} </strong>
        </h4>
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
                  <td class="py-1">: ${product.category}</td>
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
                  <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
              <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
              </tbody>
            </table>  
            <tr>
            <td>
              <div class="d-flex justify-content-around pt-0" style="color: black;">
              <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
              <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
              <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
              <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
           
            </div>
            </td>
          </tr>                    
            <div class="modal-footer py-1 ">
            <div  >
                <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
            </div>
            </div>
          </div>
        </div>

          </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
          <div class="d-flex justify-content-center">
          <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
          </div>
        </article>
        <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM1.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //2_Moderate
  moderateRisk_2(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.transit == "Moderate") {
        result += `
      <!-- single product start -->
        <article class="product">
          <div class="img-container">
            <img
              src=${product.image}
              alt="product"
              class="product-img"
            />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
              <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
              </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
              <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
              </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
              <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
              </div>`;
        }
        result += `             <div class="category_badge">
            <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
            </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
              <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
              </div>`;
        }

        result += `</div>
          <div class="d-flex justify-content-center">
          <!-- Button trigger modal -->
          <button type="button"           id="${product.id}"
          value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
          ${product.id}. ${product.title}
          </button>
          </div>
          
          <!-- Modal -->
          <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
          <div class="modal-content">
          <div class="modal-header p-0 ml-3 pt-2">
          <h4 class="modal-title text-center" id="exampleModalLabel">
          <strong>${product.id}. ${product.title} </strong>
        </h4>
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
                  <td class="py-1">: ${product.category}</td>
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
                  <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
              <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
              </tbody>
            </table>  
            <tr>
            <td>
              <div class="d-flex justify-content-around pt-0" style="color: black;">
              <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
              <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
              <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
              <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
           
            </div>
            </td>
          </tr>                    
            <div class="modal-footer py-1 ">
            <div  >
                <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
            </div>
            </div>
          </div>
        </div>

          </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
          <div class="d-flex justify-content-center">
          <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
          </div>
        </article>
        <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM2.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //3_High
  highRisk_3(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.transit == "High") {
        result += `
        <!-- single product start -->
          <article class="product">
            <div class="img-container">
              <img
                src=${product.image}
                alt="product"
                class="product-img"
              />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                </div>`;
        }
        result += `             <div class="category_badge">
              <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
              </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                </div>`;
        }

        result += `</div>
            <div class="d-flex justify-content-center">
            <!-- Button trigger modal -->
            <button type="button"           id="${product.id}"
            value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
            ${product.id}. ${product.title}
            </button>
            </div>
            
            <!-- Modal -->
            <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header p-0 ml-3 pt-2">
            <h4 class="modal-title text-center" id="exampleModalLabel">
            <strong>${product.id}. ${product.title} </strong>
          </h4>
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
                    <td class="py-1">: ${product.category}</td>
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
                    <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                </tbody>
              </table>  
              <tr>
              <td>
                <div class="d-flex justify-content-around pt-0" style="color: black;">
                <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
             
              </div>
              </td>
            </tr>                    
              <div class="modal-footer py-1 ">
              <div  >
                  <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                  <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
              </div>
              </div>
            </div>
          </div>
  
            </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
            <div class="d-flex justify-content-center">
            <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
            </div>
          </article>
          <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM3.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //4_lowAndModerate
  lowAndModerate_4(products) {
    let result = "";
    products.forEach((product) => {
      if (
        product.ava == 1 &&
        (product.transit == "Low" || product.transit == "Moderate")
      ) {
        result += `
          <!-- single product start -->
            <article class="product">
              <div class="img-container">
                <img
                  src=${product.image}
                  alt="product"
                  class="product-img"
                />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                  <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                  </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                  <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                  </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                  <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                  </div>`;
        }
        result += `             <div class="category_badge">
                <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                  <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                  </div>`;
        }

        result += `</div>
              <div class="d-flex justify-content-center">
              <!-- Button trigger modal -->
              <button type="button"           id="${product.id}"
              value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
              ${product.id}. ${product.title}
              </button>
              </div>
              
              <!-- Modal -->
              <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
              <div class="modal-content">
              <div class="modal-header p-0 ml-3 pt-2">
              <h4 class="modal-title text-center" id="exampleModalLabel">
              <strong>${product.id}. ${product.title} </strong>
            </h4>
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
                      <td class="py-1">: ${product.category}</td>
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
                      <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                  <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                  </tbody>
                </table>  
                <tr>
                <td>
                  <div class="d-flex justify-content-around pt-0" style="color: black;">
                  <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                  <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                  <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                  <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
               
                </div>
                </td>
              </tr>                    
                <div class="modal-footer py-1 ">
                <div  >
                    <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                    <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                </div>
                </div>
              </div>
            </div>
    
              </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
              <div class="d-flex justify-content-center">
              <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
              </div>
            </article>
            <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM4.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //5_allPlants
  allPlants_5(products,category,transit,watering,sunlight,bigPlantBox,indoorBox,hangingBox) {
    let result = "";
    products.forEach((product) => 
    {
      if (product.ava == 1 && category.includes(product.category) 
       && transit.includes(product.transit)  && watering.includes(product.water) && sunlight.includes(product.sun)
       && bigPlantBox.includes(product.mother)
       && indoorBox.includes(product.indoor)
       && hangingBox.includes(product.hanging)
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
                  />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                    <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                    </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                    <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                    </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                    <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                    </div>`;
        }
        result += `             <div class="category_badge">
                  <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                  </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                    </div>`;
        }

        result += `</div>
                <div class="d-flex justify-content-center">
                <!-- Button trigger modal -->
                <button type="button"           id="${product.id}"
                value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                ${product.id}. ${product.title}
                </button>
                </div>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header p-0 ml-3 pt-2">
                <h4 class="modal-title text-center" id="exampleModalLabel">
                <strong>${product.id}. ${product.title} </strong>
              </h4>
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
                        <td class="py-1">: ${product.category}</td>
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
                        <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                    <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                    </tbody>
                  </table>  
                  <tr>
                  <td>
                    <div class="d-flex justify-content-around pt-0" style="color: black;">
                    <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                    <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                    <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                    <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                 
                  </div>
                  </td>
                </tr>                    
                  <div class="modal-footer py-1 ">
                  <div  >
                      <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                      <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                  </div>
                </div>
              </div>
      
                </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                <div class="d-flex justify-content-center">
                <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                </div>
              </article>
              <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM5.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //6_succulents
  succulent_6(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Succulent") {
        result += `
            <!-- single product start -->
              <article class="product">
                <div class="img-container">
                  <img
                    src=${product.image}
                    alt="product"
                    class="product-img"
                  />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                    <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                    </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                    <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                    </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                    <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                    </div>`;
        }
        result += `             <div class="category_badge">
                  <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                  </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                    </div>`;
        }

        result += `</div>
                <div class="d-flex justify-content-center">
                <!-- Button trigger modal -->
                <button type="button"           id="${product.id}"
                value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                ${product.id}. ${product.title}
                </button>
                </div>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header p-0 ml-3 pt-2">
                <h4 class="modal-title text-center" id="exampleModalLabel">
                <strong>${product.id}. ${product.title} </strong>
              </h4>
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
                        <td class="py-1">: ${product.category}</td>
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
                        <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                    <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                    </tbody>
                  </table>  
                  <tr>
                  <td>
                    <div class="d-flex justify-content-around pt-0" style="color: black;">
                    <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                    <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                    <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                    <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                 
                  </div>
                  </td>
                </tr>                    
                  <div class="modal-footer py-1 ">
                  <div  >
                      <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                      <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                  </div>
                </div>
              </div>
      
                </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                <div class="d-flex justify-content-center">
                <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                </div>
              </article>
              <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM6.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //7_cactus
  cactus_7(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Cactus") {
        result += `
              <!-- single product start -->
                <article class="product">
                  <div class="img-container">
                    <img
                      src=${product.image}
                      alt="product"
                      class="product-img"
                    />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                      <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                      </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                      <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                      </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                      <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                      </div>`;
        }
        result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                    </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                      <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                      </div>`;
        }

        result += `</div>
                  <div class="d-flex justify-content-center">
                  <!-- Button trigger modal -->
                  <button type="button"           id="${product.id}"
                  value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                  ${product.id}. ${product.title}
                  </button>
                  </div>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header p-0 ml-3 pt-2">
                  <h4 class="modal-title text-center" id="exampleModalLabel">
                  <strong>${product.id}. ${product.title} </strong>
                </h4>
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
                          <td class="py-1">: ${product.category}</td>
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
                          <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                      <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                      </tbody>
                    </table>  
                    <tr>
                    <td>
                      <div class="d-flex justify-content-around pt-0" style="color: black;">
                      <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                      <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                      <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                      <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                   
                    </div>
                    </td>
                  </tr>                    
                    <div class="modal-footer py-1 ">
                    <div  >
                        <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                        <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                    </div>
                  </div>
                </div>
        
                  </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                  <div class="d-flex justify-content-center">
                  <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                </article>
                <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM7.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //8_echeveria
  echeveria_8(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Echeveria") {
        result += `
            <!-- single product start -->
              <article class="product">
                <div class="img-container">
                  <img
                    src=${product.image}
                    alt="product"
                    class="product-img"
                  />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                    <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                    </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                    <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                    </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                    <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                    </div>`;
        }
        result += `             <div class="category_badge">
                  <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                  </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                    </div>`;
        }

        result += `</div>
                <div class="d-flex justify-content-center">
                <!-- Button trigger modal -->
                <button type="button"           id="${product.id}"
                value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                ${product.id}. ${product.title}
                </button>
                </div>
                
                <!-- Modal -->
                <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header p-0 ml-3 pt-2">
                <h4 class="modal-title text-center" id="exampleModalLabel">
                <strong>${product.id}. ${product.title} </strong>
              </h4>
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
                        <td class="py-1">: ${product.category}</td>
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
                        <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                    <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                    </tbody>
                  </table>  
                  <tr>
                  <td>
                    <div class="d-flex justify-content-around pt-0" style="color: black;">
                    <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                    <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                    <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                    <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                 
                  </div>
                  </td>
                </tr>                    
                  <div class="modal-footer py-1 ">
                  <div  >
                      <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                      <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                  </div>
                </div>
              </div>
      
                </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                <div class="d-flex justify-content-center">
                <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                </div>
              </article>
              <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM8.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //9_jade
  jade_9(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Jade") {
        result += `
              <!-- single product start -->
                <article class="product">
                  <div class="img-container">
                    <img
                      src=${product.image}
                      alt="product"
                      class="product-img"
                    />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                      <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                      </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                      <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                      </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                      <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                      </div>`;
        }
        result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                    </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                      <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                      </div>`;
        }

        result += `</div>
                  <div class="d-flex justify-content-center">
                  <!-- Button trigger modal -->
                  <button type="button"           id="${product.id}"
                  value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                  ${product.id}. ${product.title}
                  </button>
                  </div>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header p-0 ml-3 pt-2">
                  <h4 class="modal-title text-center" id="exampleModalLabel">
                  <strong>${product.id}. ${product.title} </strong>
                </h4>
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
                          <td class="py-1">: ${product.category}</td>
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
                          <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                      <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                      </tbody>
                    </table>  
                    <tr>
                    <td>
                      <div class="d-flex justify-content-around pt-0" style="color: black;">
                      <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                      <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                      <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                      <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                   
                    </div>
                    </td>
                  </tr>                    
                    <div class="modal-footer py-1 ">
                    <div  >
                        <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                        <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                    </div>
                  </div>
                </div>
        
                  </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                  <div class="d-flex justify-content-center">
                  <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                </article>
                <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM9.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //10_crassula
  crassule_10(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Crassula") {
        result += `
              <!-- single product start -->
                <article class="product">
                  <div class="img-container">
                    <img
                      src=${product.image}
                      alt="product"
                      class="product-img"
                    />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                      <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                      </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                      <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                      </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                      <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                      </div>`;
        }
        result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                    </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                      <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                      </div>`;
        }

        result += `</div>
                  <div class="d-flex justify-content-center">
                  <!-- Button trigger modal -->
                  <button type="button"           id="${product.id}"
                  value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                  ${product.id}. ${product.title}
                  </button>
                  </div>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header p-0 ml-3 pt-2">
                  <h4 class="modal-title text-center" id="exampleModalLabel">
                  <strong>${product.id}. ${product.title} </strong>
                </h4>
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
                          <td class="py-1">: ${product.category}</td>
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
                          <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                      <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                      </tbody>
                    </table>  
                    <tr>
                    <td>
                      <div class="d-flex justify-content-around pt-0" style="color: black;">
                      <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                      <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                      <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                      <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                   
                    </div>
                    </td>
                  </tr>                    
                    <div class="modal-footer py-1 ">
                    <div  >
                        <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                        <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                    </div>
                  </div>
                </div>
        
                  </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                  <div class="d-flex justify-content-center">
                  <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                </article>
                <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM10.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //11_pepromia
  pepromia_11(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Peperomia") {
        result += `
              <!-- single product start -->
                <article class="product">
                  <div class="img-container">
                    <img
                      src=${product.image}
                      alt="product"
                      class="product-img"
                    />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                      <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                      </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                      <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                      </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                      <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                      </div>`;
        }
        result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                    </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                      <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                      </div>`;
        }

        result += `</div>
                  <div class="d-flex justify-content-center">
                  <!-- Button trigger modal -->
                  <button type="button"           id="${product.id}"
                  value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                  ${product.id}. ${product.title}
                  </button>
                  </div>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header p-0 ml-3 pt-2">
                  <h4 class="modal-title text-center" id="exampleModalLabel">
                  <strong>${product.id}. ${product.title} </strong>
                </h4>
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
                          <td class="py-1">: ${product.category}</td>
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
                          <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                      <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                      </tbody>
                    </table>  
                    <tr>
                    <td>
                      <div class="d-flex justify-content-around pt-0" style="color: black;">
                      <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                      <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                      <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                      <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                   
                    </div>
                    </td>
                  </tr>                    
                    <div class="modal-footer py-1 ">
                    <div  >
                        <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                        <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                    </div>
                  </div>
                </div>
        
                  </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                  <div class="d-flex justify-content-center">
                  <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                </article>
                <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM11.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //12_aloe
  aloe_12(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Aloe") {
        result += `
              <!-- single product start -->
                <article class="product">
                  <div class="img-container">
                    <img
                      src=${product.image}
                      alt="product"
                      class="product-img"
                    />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                      <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                      </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                      <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                      </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                      <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                      </div>`;
        }
        result += `             <div class="category_badge">
                    <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                    </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                      <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                      </div>`;
        }

        result += `</div>
                  <div class="d-flex justify-content-center">
                  <!-- Button trigger modal -->
                  <button type="button"           id="${product.id}"
                  value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                  ${product.id}. ${product.title}
                  </button>
                  </div>
                  
                  <!-- Modal -->
                  <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                  <div class="modal-content">
                  <div class="modal-header p-0 ml-3 pt-2">
                  <h4 class="modal-title text-center" id="exampleModalLabel">
                  <strong>${product.id}. ${product.title} </strong>
                </h4>
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
                          <td class="py-1">: ${product.category}</td>
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
                          <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                      <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                      </tbody>
                    </table>  
                    <tr>
                    <td>
                      <div class="d-flex justify-content-around pt-0" style="color: black;">
                      <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                      <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                      <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                      <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                   
                    </div>
                    </td>
                  </tr>                    
                    <div class="modal-footer py-1 ">
                    <div  >
                        <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                        <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                    </div>
                  </div>
                </div>
        
                  </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                  <div class="d-flex justify-content-center">
                  <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                  </div>
                </article>
                <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM12.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //13_sedum
  sedum_13(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Sedum") {
        result += `
                <!-- single product start -->
                  <article class="product">
                    <div class="img-container">
                      <img
                        src=${product.image}
                        alt="product"
                        class="product-img"
                      />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                        <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                        </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                        <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                        </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                        <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                        </div>`;
        }
        result += `             <div class="category_badge">
                      <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                      </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                        </div>`;
        }

        result += `</div>
                    <div class="d-flex justify-content-center">
                    <!-- Button trigger modal -->
                    <button type="button"           id="${product.id}"
                    value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                    ${product.id}. ${product.title}
                    </button>
                    </div>
                    
                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header p-0 ml-3 pt-2">
                    <h4 class="modal-title text-center" id="exampleModalLabel">
                    <strong>${product.id}. ${product.title} </strong>
                  </h4>
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
                            <td class="py-1">: ${product.category}</td>
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
                            <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                        <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                        </tbody>
                      </table>  
                      <tr>
                      <td>
                        <div class="d-flex justify-content-around pt-0" style="color: black;">
                        <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                        <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                        <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                        <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                     
                      </div>
                      </td>
                    </tr>                    
                      <div class="modal-footer py-1 ">
                      <div  >
                          <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                          <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                      </div>
                    </div>
                  </div>
          
                    </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                    <div class="d-flex justify-content-center">
                    <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                    </div>
                  </article>
                  <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM13.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //14_haworthia
  haworthia_14(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Haworthia") {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM14.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //15_creeper
  creeper_15(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Creeper") {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM15.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //16_Sansevieria
  sansevieria_16(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Sansevieria") {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM16.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //17_otherPlants
  otherPlants_17(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.category == "Others") {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM17.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //18_indoorPlants
  indoorPlants_18(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.indoor == 1) {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM18.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //19_hanging
  hanging_19(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.hanging == 1) {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM19.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //20_offers
  offers_20(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.orgPrice > product.price) {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM20.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //21_bigPlants
  bigPlants_21(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.mother == 1) {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM21.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //22_combo
  combo_22(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.combo == 1) {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM22.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
  //23_restock
  restock_23(products) {
    let result = "";
    products.forEach((product) => {
      if (product.ava == 1 && product.restock == 1) {
        result += `
                  <!-- single product start -->
                    <article class="product">
                      <div class="img-container">
                        <img
                          src=${product.image}
                          alt="product"
                          class="product-img"
                        />`;
        if (product.orgPrice > product.price) {
          result += `             <div class="offer_badge">
                          <h3>  <span class="badge badge-pill badge-warning">On Offer</span> </h3>
                          </div>`;
        }
        if (product.mother == 1) {
          result += `             <div class="mother_badge">
                          <h3>  <span class="badge badge-pill badge-primary">Big Plant</span> </h3>
                          </div>`;
        }
        if (product.restock == 1) {
          result += `             <div class="restock_badge">
                          <h3>  <span class="badge badge-pill ">New/Restocked</span> </h3>
                          </div>`;
        }
        result += `             <div class="category_badge">
                        <h3>  <span class="badge badge-pill"  >${product.category}</span> </h3>
                        </div>`;
        if (product.combo == 1) {
          result += `             <div class="category_badge">
                          <h3>  <span class="badge badge-pill"  >Combo</span> </h3>
                          </div>`;
        }

        result += `</div>
                      <div class="d-flex justify-content-center">
                      <!-- Button trigger modal -->
                      <button type="button"           id="${product.id}"
                      value="${product.id}" class="btn btn-link p-0" data-toggle="modal" data-target="#exampleModal${product.id}">
                      ${product.id}. ${product.title}
                      </button>
                      </div>
                      
                      <!-- Modal -->
                      <div class="modal fade" id="exampleModal${product.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                      <div class="modal-content">
                      <div class="modal-header p-0 ml-3 pt-2">
                      <h4 class="modal-title text-center" id="exampleModalLabel">
                      <strong>${product.id}. ${product.title} </strong>
                    </h4>
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
                              <td class="py-1">: ${product.category}</td>
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
                              <td class="py-1">Price</td>`;
        if (product.orgPrice > product.price) {
          result += ` <td class="py-1">: <strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}`;
        } else {
          result += `<td class="py-1">:  ₹ ${product.price}`;
        }

        result += `       
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
                          <td class="py-1">Indoor</td>`;
        if (product.indoor == 0) {
          result += `<td class="py-1">: No</td>`;
        } else {
          result += `<td class="py-1">: Yes</td>`;
        }

        result += `</tr>
                          </tbody>
                        </table>  
                        <tr>
                        <td>
                          <div class="d-flex justify-content-around pt-0" style="color: black;">
                          <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1"></a>            
                          <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1"></a>
                          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1"></a>
                          <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1" style="color: rgb(97, 64, 64);"></a>
                       
                        </div>
                        </td>
                      </tr>                    
                        <div class="modal-footer py-1 ">
                        <div  >
                            <button type="button" class="btn close-btn btn-outline-danger btn-sm mr-2" data-dismiss="modal">Close</button>
                            <button type="button" data-dismiss="modal" class="bag-btn1 btn btn-outline-success btn-sm py-1 ml-2"  data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                        </div>
                        </div>
                      </div>
                    </div>
            
                      </div>`;
        if (product.orgPrice > product.price) {
          result += ` <h4 class="mt-0">Price:<strike> ₹ ${product.orgPrice}</strike> ₹ ${product.price}</h4>`;
        } else {
          result += ` <h4 class="mt-0">Price: ₹ ${product.price}</h4>`;
        }
        result += `<h5 class="mt-0">Transit Risk:  ${product.transit}</h5>
                      <div class="d-flex justify-content-center">
                      <button type="button" class="bag-btn1 btn btn-outline-success btn-sm" data-id=${product.id}><i class="fas fa-shopping-cart"></i>Add to cart</button>
                      </div>
                    </article>
                    <!-- single product end -->`;
      }
    });
    try {
      // console.log(result);
      productsDOM23.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }

  testimonial(communities){
    //console.log(communities);
    let result = "";
    communities.forEach((community) => {
      result+= `
      ${community.embeded}
      `;
    });
    try {
      // console.log(result);
      testimonialDOM.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }

  //care
  care(products,availability,transit,watering,sunlight) {
      
    let result = `  
    <div class="fixTableHead">
    <table class="table table-hover table-bordered text-center">
    <thead >  
    <tr>
        <th class="scrollth p-0" scope="col">S.No</th>
        <th class="scrollth p-0" scope="col">Plant Name</th>
        <th class="scrollth p-0" scope="col">Transit Risk</th>
        <th class="scrollth p-0" scope="col">Watering</th>
        <th class="scrollth p-0" scope="col">Sunlight</th>
        <th class="scrollth p-0" scope="col">Photo</th>
      </tr>
      </thead>
      `;
    products.forEach((product) => {
      if(availability.includes(product.ava) && transit.includes(product.transit) 
      && watering.includes(product.water) && sunlight.includes(product.sun)
      
      )
       {
      result+= `
      <tr>
        <th class="scroll p-0" scope="row"><b>${product.id}</b></th>
        <td class="scroll p-0">${product.title}</td>
        <td class="scroll p-0">${product.transit}</td>
        <td class="scroll p-0">${product.water}</td>
        <td class="scroll p-0">${product.sun}</td>
        <td class="scroll p-0">
          <img
            src="${product.image}"
            alt="mypic"
            width="50"
            height="50"
          />
        </td>
      </tr>`;};
    })
    result+=`</div>`;
    try {
      // console.log(result);
      careDOM.innerHTML = result;
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
          //this.showCart();
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

            <div >
            <div class="mb-0">
              <h4>${item.id}. ${item.title}</h4>
              </div>
              <h4>Price : ₹ ${item.price}</h4>
              <span class="remove-item" onClick="window.location.reload()" data-id=${item.id}>Remove item</span>
            </div>

            <div class="mr-3">
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
          location.reload();
          lowerAmount.parentElement.parentElement;
          this.removeItem(id);
        }
      }
    });
  }

  clearCart() {
    while (cartContent.children.length > 0) {
      cartContent.removeChild(cartContent.children[0]);
    }
    localStorage.removeItem("cart");
    cart = Storage.getCart();
    //setCartValues(cart);
    let cartItems = cart.map((item) => item.id);
    cartItems.forEach((id) => this.removeItem(id));
    //console.log(cartContent.children);
    //console.log("hi");

    this.hideCart();
    location.reload();
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
  const communities= new Communities();

  // setup app
  ui.setupAPP();
  //Community
  communities
    .getCommunities()
    .then((communities)=>{
      console.log(communities);
      ui.testimonial(communities);
    });

  // get all products
  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      ui.lowRisk_1(products);
      ui.moderateRisk_2(products);
      ui.highRisk_3(products);
      ui.lowAndModerate_4(products);
      ui.allPlants_5(products,"Succulent Cactus Echeveria Jade Crassula Peperomia Aloe Sedum Haworthia Creeper Sansevieria Others","Low Moderate High","Low Moderate High Not Specific","Low Moderate High Not Specific","01","01","01");
      ui.succulent_6(products);
      ui.cactus_7(products);
      ui.echeveria_8(products);
      ui.jade_9(products);
      ui.crassule_10(products);
      ui.pepromia_11(products);
      ui.aloe_12(products);
      ui.sedum_13(products);
      ui.haworthia_14(products);
      ui.creeper_15(products);
      ui.sansevieria_16(products);
      ui.otherPlants_17(products);
      ui.indoorPlants_18(products);
      ui.hanging_19(products);
      ui.offers_20(products);
      ui.bigPlants_21(products);
      ui.combo_22(products);
      ui.restock_23(products);
      ui.care(products,"1","Low Moderate High","Low Moderate High Not Specific","Low Moderate High Not Specific");
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
  const val = [];
  const price=[];
  //const products = new Products();
  //const val1 =  getProd();
  //let count=10;
  //let val2=products.getProducts().then((prod) => {
  // prod
  //});
  //console.log(val2);
  //console.log(val1.id);
  cart.map((item) => {
    val.push(
      item.id + ". " + item.title+"("+item.transit[0]+")" + "- ₹",
      item.price +
        " * " +
        item.amount +
        " = ₹" +
        item.price * item.amount +
        " %0a "
    );
  });

  //console.log(tempTotal, itemsTotal);
  return val.join("");
}

function myFunction() {
  cart = Storage.getCart();

  let priceTotal = 0;
  let itemsTotal = 0;
  let itemsCount="%0a";
  cart.map((item) => {
    priceTotal += item.price * item.amount;
    itemsTotal += item.amount;
    //console.log(item.id,"-",item.amount);
    itemsCount=itemsCount.concat(item.id,"-",item.amount,",");
  });

  var finalText =
    "*Total Plants= " +
    itemsTotal +
    "*%0a*Total Price=₹" +
    priceTotal +
    "*%2Bdelivery%0a%0a";

  //console.log(cart);
  const productText = getBilling(cart);
  //console.log(productText);
  var linkText =
    "https://api.whatsapp.com/send?phone=%2B917904050237&text=*Hello, i have chosen the following plants from your site* %0a";
  window.open(linkText.concat(productText, finalText, itemsCount), "_blank");
}

//marquee
{
  const div = document.createElement("div");
  div.classList.add("marquee");

  div.innerHTML = `

  <div class="mt-2">
  <marquee behavior="scroll" class="home-card" direction="left" style="background-color: rgba(91, 91, 59, 0.229);">Please click<strong> Place order</strong> after selecting the plants.</marquee>
  <section class="feature-list section">
    <div class="container px-0">            
      <div class="alert alert-danger home-card py-0 px-0" role="alert">
                        <!--Collapse Delivery Charges-->
      <span class="d-block p-0 m-0 text-white text-center inst-header  inst-header-top mb-1">
        <h5 class="btn btn-link collapsed text-bold text-red text-center
          mb-0" data-toggle="collapse" data-target="#collapseInstruction"
          aria-expanded="false" aria-controls="collapseThree">Instructions
          (click here)</h5>
      </span>
      <div id="collapseInstruction" class="collapse"
        aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body p-0">
          <ul class="mx-2 text-center mb-1" style="list-style-type:none;">
            <li>After selecting plants please click               
              <button type="button" class="btn btn-secondary btn-sm py-0 px-2 text-small" id="demo"
              onclick="myFunction()">
              Place Order
            </button> to send the required plants in Whatsapp.</li>
            <hr class="my-0 mx-5 pt-1">
            <li>Please click               
              <button class="clear-cart btn btn-danger btn-sm py-0 px-2 text-small">Clear Cart</button>
              to empty the Cart.</li>
            <hr class="m-0 mx-5 pt-1">
            <li>Please click <i class="fa fa-plus" aria-hidden="true"></i> to increase the Number of Plants.</li>
            <hr class="m-0 mx-5 pt-1">
            <li>Please click <i class="fa fa-minus" aria-hidden="true"></i> to decrease the Number of Plants.</li>
            <hr class="m-0 mx-5 pt-1">
            <li>Please click             <span class="close-cart">
              <i class="fa fa-window-close" aria-hidden="true"></i>
            </span> to close the Cart.</li>
            <hr class="m-0 mx-5 pt-1">
            <li>Please click <span class="remove-item" >Remove item</span> to delete item from cart..</li>
        </ul>
        </div>
      </div>
      <!--Collapse Delivery Charges-->
      <span class="d-block p-0 m-0 text-white text-center inst-header mb-3">
        <h5 class="btn btn-link collapsed text-bold text-red text-center
          mb-0" data-toggle="collapse" data-target="#collapseDeliveryCart"
          aria-expanded="false" aria-controls="collapseThree">Delivery
          Charges
          (click here)</h5>
      </span>
      <div id="collapseDeliveryCart" class="collapse"
        aria-labelledby="headingThree" data-parent="#accordion">
        <div class="card-body p-0">
  
          <table class="table table-hover table-striped table-sm
            text-center">
            <thead>
              <tr>
                <th scope="col">Location</th>
                <th scope="col">Cost</th>
                <th scope="col">Maximum Plants</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Tamil Nadu</th>
                <td>80</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">South India(except T.N)</th>
                <td>100</td>
                <td>12</td>
              </tr>
              <tr>
                <th scope="row">Other parts of India</th>
                <td>150</td>
                <td>6</td>
              </tr>
              <tr>
                <th scope="row">Other parts of India</th>
                <td>200</td>
                <td>12</td>
              </tr>
              <caption class="text-center mx-2 py-0">Additional delivery
                charges is applicable when quantity increases or more number
                of big plants are choosen.</caption>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

</div>
<div class="bink-div">
  <p class="blink-h2 m-0">Please click  <button type="button" class="btn btn-secondary btn-sm py-0 px-2 text-small">
    Place Order
  </button> to send order or send a screenshot of cart page in Whatsapp.</p>
</div>

  `;

  cartContent.appendChild(div);
  // console.log(cartContent);
}
//Foot icons
{
  const div = document.createElement("div");
  div.classList.add("foot-icons");

  div.innerHTML = `
  <a href="#" class="fas fa-arrow-alt-circle-up pt-1 nav-link" style="position: fixed; bottom:20px; right: 10px; "></a>
  <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1 nav-link" style="position: fixed; bottom: 50px; right: 10px; "></a>
  <a href="https://facebook.com/rosaryplanthouse" target="_blank" class="fab fa-facebook pt-1 nav-link" style="position: fixed; bottom: 80px; right: 10px; "></a>
  <a href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1 nav-link" style="position: fixed; bottom: 110px; right: 10px; "></a>
  <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1 nav-link" style="position: fixed; bottom: 140px; right: 10px; "></a>
  <a class="navbar-brand" href="categories.html"><img src="assets/img/icon_category.png" style="position: fixed; bottom: 180px; right: 5px;" alt="" width="20" height="20" /></a>
  `;

  footIcons.appendChild(div);
  // console.log(cartContent);
}
//Marquee Product
{
  const div = document.createElement("div");
  div.classList.add("marquee-product");

  div.innerHTML = `   

  <section class="feature-list section">
  <div class="container px-0">
    <marquee behavior="scroll" class="home-card" direction="left"
      style="background-color: rgba(91, 91, 59, 0.229);">Please click<strong>
        Add to Cart </strong> to select a plant and Click on the <strong>Plant
        Name</strong> to see more details of the plants.</marquee>

    <div class="alert alert-danger home-card py-0 px-0" role="alert">
      
    <!--Collapse Quick Link-->
    <span class="d-block p-0 m-0 text-white text-center inst-header inst-header-top">
      <h5 class="btn btn-link collapsed text-bold text-red text-center
        mb-0 py-1" data-toggle="collapse" data-target="#collapseHomeInst"
        aria-expanded="false" aria-controls="collapseThree">Instructions
        (click here)</h5>
    </span>

    <div id="collapseHomeInst" class="collapse show"
      aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body p-1">
      <ul class="mx-2 text-center mb-1" style="list-style-type:none;">
        <li>Please click on <strong>Add to Cart</strong> to Select Plants.</li>
        <hr class="my-0 mx-5 pt-1">
        <li><strong>Quantity</strong> of plants can be <strong>Increased or Decreased in Cart</strong> page.</li>
        <hr class="my-0 mx-5 pt-1">
        <li>After selecting plants please click <strong>Place Order</strong>
          on <strong>Cart</strong> page to send the
          required plants in Whatsapp.</li>
        <hr class="m-0 mx-5 pt-0">
        <li>If you have any doubts please contact <strong>7904050237</strong>.
          Or any of the bellow method.
          <ul class="nav justify-content-center border-bottom">
            <a href="https://api.whatsapp.com/send?phone=%2B917904050237"
              target="_blank" class="fab fa-whatsapp-square pt-1 nav-link
              px-2 mx-2 text-muted""></a>
            <a
              href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu"
              target="_blank" class="fab fa-instagram pt-1 nav-link px-2
              text-muted mx-2"></a>
            <a href="https://facebook.com/rosaryplanthouse"
              target="_blank"
              class="fab fa-facebook pt-1 px-2 nav-link text-muted mx-2"></a>
          </ul>
        </li>
        <hr class="m-0 mx-5 pt-1">
        <li>You can check the selected plants by clicking in the <strong>Cart
            button</strong> on the top of the screen.</li>
        <hr class="m-0 mx-5 pt-1">
        <li>Purchase for more than 1000/- and get a <strong>Complementary
            plant</strong>.</li>
        <hr class="m-0 mx-5 pt-1">
        <li>Please click on the <strong>Plant Name</strong> to know more
          details on plants.</strong></li>
    </ul>
      </div>
    </div>
    <hr class="m-0 pt-0">


    <!--Collapse Quick Link-->
    <span class="d-block p-0 m-0 text-white text-center inst-header">
      <h5 class="btn btn-link collapsed text-bold text-red text-center
        mb-0 py-1" data-toggle="collapse" data-target="#collapseLinks"
        aria-expanded="false" aria-controls="collapseThree">Quick Links
        (click here)</h5>
    </span>

    <div id="collapseLinks" class="collapse"
      aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body p-1">
        <ul class="mt-x mb-0 text-center" style="list-style-type:none;">
          <li><strong><a href="categories.html">Categories</a></strong></li>
          <hr class="my-0 mx-5 pt-1">
          <li><strong><a href="20_offers.html">Offers</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="23_restocked.html">New & Restocked</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="faq.html">Frequently asked Questions</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="about.html">Contact Us</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
        </ul>
        <ul class="nav justify-content-center border-bottom">
          <a href="https://api.whatsapp.com/send?phone=%2B917904050237"
            target="_blank" class="fab fa-whatsapp-square pt-1 nav-link
            px-2 mx-2 text-muted""></a>
          <a
            href="https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu"
            target="_blank" class="fab fa-instagram pt-1 nav-link px-2
            text-muted mx-2"></a>
          <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w"
            target="_blank" class="fab fa-youtube pt-1 nav-link px-2
            text-muted mx-2"></a>
          <a href="https://facebook.com/rosaryplanthouse" target="_blank"
            class="fab fa-facebook pt-1 px-2 nav-link text-muted mx-2"></a>
        </ul>
      </div>
    </div>

    <hr class="m-0 pt-0">
    <!--Collapse Category-->
    <span class="d-block p-0 m-0 text-white text-center inst-header">
      <h5 class="btn btn-link collapsed text-bold text-red text-center
        mb-0" data-toggle="collapse" data-target="#collapseCategory"
        aria-expanded="false" aria-controls="collapseThree">Categories
        (click here)</h5>
    </span>
    <div id="collapseCategory" class="collapse"
      aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body p-1">

        <ul class="mx-2 text-center" style="list-style-type:none;">
          <li><strong><a href="5_allPlants.html">All Plants</a></strong></li>
          <hr class="my-0 mx-5 pt-1">
          <li><strong><a href="20_offers.html">On Offer</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="23_restocked.html">New & Restocked</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="21_bigPlants.html">Big Plants</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="6_succulent.html">Succulents</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="7_cactus.html">Cactus</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="8_echeveria.html">Echeveria</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="9_jade.html">Jade</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="10_crassula.html">Crassula</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="11_pepromia.html">Peperomia</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="12_aloe.html">Aloe</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="13_sedum.html">Sedum</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="14_haworthia.html">Haworthia</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="15_creeper.html">Creeper</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="16_sansevieria.html">Sanservia</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="17_otherPlants.html">Other Plants</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="18_indoorPlants.html">Indoor Plants</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="19_hanging.html">Hanginig Plants</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <p class="text-red text-bold text-center mb-0"
          aria-expanded="false" aria-controls="collapseThree">Based on Transport Risk</p>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="1_lowRisk.html">Low Risk</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="2_moderateRisk.html">Moderate Risk</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="3_highRisk.html">High Risk</a></strong></li>
          <hr class="m-0 mx-5 pt-1">
          <li><strong><a href="4_lowAndModerate.html">Low & Moderate</a></strong></li>
        </ul>
      </div>
    </div>
    <hr class="m-0 pt-0">
    <!--Collapse Delivery Charges-->
    <span class="d-block p-0 m-0 text-white text-center inst-header mb-3">
      <h5 class="btn btn-link collapsed text-bold text-red text-center
        mb-0" data-toggle="collapse" data-target="#collapseDelivery"
        aria-expanded="false" aria-controls="collapseThree">Delivery
        Charges
        (click here)</h5>
    </span>
    <div id="collapseDelivery" class="collapse"
      aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body p-0">

        <table class="table table-hover table-striped table-sm
          text-center">
          <thead>
            <tr>
              <th scope="col">Location</th>
              <th scope="col">Cost</th>
              <th scope="col">Maximum Plants</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Tamil Nadu</th>
              <td>80</td>
              <td>12</td>
            </tr>
            <tr>
              <th scope="row">South India(except T.N)</th>
              <td>100</td>
              <td>12</td>
            </tr>
            <tr>
              <th scope="row">Other parts of India</th>
              <td>150</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">Other parts of India</th>
              <td>200</td>
              <td>12</td>
            </tr>
            <caption class="text-center mx-2 py-0">Additional delivery
              charges is applicable when quantity increases or more number
              of big plants are choosen.</caption>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>


  `;

  marqueeProduct.appendChild(div);
  // console.log(cartContent);
}

//Footer
{
  const div = document.createElement("div");
  div.classList.add("footer-all");

  div.innerHTML = `     
  <hr class="m-1">
  <div class="container">
    <footer class="py-3 my-2">
      <ul class="nav justify-content-center">
        <li class="nav-item"><a href="index.html" class="nav-link px-2
                    text-muted">Home</a></li>
        <li class="nav-item"><a href="5_allPlants.html" class="nav-link
                    px-2 text-muted">Catalogue</a></li>
        <li class="nav-item"><a href="testimonial.html" class="nav-link px-2
                    text-muted">Testimonial</a></li>
        <li class="nav-item"><a href="faq.html" class="nav-link px-2
                    text-muted">FAQs</a></li>
        <li class="nav-item"><a href="about.html" class="nav-link px-2
                    text-muted">Contact Us</a></li>
      </ul>

      <ul class="nav justify-content-center border-bottom">
        <a href="https://api.whatsapp.com/send?phone=%2B917904050237" target="_blank" class="fab fa-whatsapp-square pt-1 nav-link
                  px-2 text-muted""></a>
                <a
                  href=" https://instagram.com/rosary_plant_house?igshid=ksp4zz9pj5lu" target="_blank" class="fab fa-instagram pt-1 nav-link px-2
                  text-muted"></a>
        <a href="https://youtube.com/channel/UCUYHYgkyhoVXy5_h8a5ly6w" target="_blank" class="fab fa-youtube pt-1 nav-link px-2
                  text-muted"></a>
        <a href="https://facebook.com/rosaryplanthouse" target="_blank"
          class="fab fa-facebook pt-1 px-2 nav-link text-muted"></a>
      </ul>

      <p class="text-center text-muted">© 2022 Rosary Plant House</p>
    </footer>

  </div>  `;

  footerDOM.appendChild(div);
  // console.log(cartContent);
}

function filter()
{
  const products = new Products();
  const ui = new UI();
  var availability = document.getElementById("availability").value;
  var transit = document.getElementById("transit").value;
  var watering = document.getElementById("watering").value;
  var sunlight = document.getElementById("sunlight").value;
  products.getProducts().then((products) => {   ui.care(products,availability,transit,watering,sunlight);});
}

function filterPlants(){
  const products = new Products();
  const ui = new UI();
  var category = document.getElementById("category").value;
  var transit = document.getElementById("transit").value;
  var watering = document.getElementById("watering").value;
  var sunlight = document.getElementById("sunlight").value;
  var bigPlantBox=document.querySelector('.bigPlant-Box').checked;
  var indoorBox=document.querySelector('.indoor-Box').checked;
  var hangingBox=document.querySelector('.hanging-Box').checked;
  if(bigPlantBox==true){
    bigPlantBox="1"
  }else{
    bigPlantBox="01"
  };
  if(indoorBox==true){
    indoorBox="1"
  }else{
    indoorBox="01"
  };
  if(hangingBox==true){
    hangingBox="1"
  }else{
    hangingBox="01"
  };
  products.getProducts().then((products) => {   ui.allPlants_5(products,category,transit,watering,sunlight,bigPlantBox,indoorBox,hangingBox);});
  console.log(category);

}