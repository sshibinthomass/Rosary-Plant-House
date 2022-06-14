
showProduct = document.querySelector(".show-product");
const productsDOM = document.querySelector(".products-center");

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
  class UI {
    //All Plants
    displayProducts(products,val) {
      let result = `  
      <table class="table table-hover table-bordered text-center">
        <tr>
          <th class="p-0" scope="col">S.No</th>
          <th class="p-0" scope="col">Plant No</th>
          <th class="p-0" scope="col">Plant Name</th>
          <th class="p-0" scope="col">Quantity</th>
          <th class="p-0" scope="col">Photo</th>
        </tr>`;
      const myArray = val.split(",");
      console.log(myArray);
      var count=0;
      console.log(typeof(products));
      myArray.forEach((prod)=>{
        console.log(products.find(o => o.id ===prod));
        console.log(prod);
      });
      products.forEach((product) => {
        if (
           myArray.includes(product.id)
        ) {
          count+=1;
          result+= `
      
            <tr>
              <th class="p-0" scope="row"><b>${count}</b></th>
              <td class="p-0">${product.id}</td>
              <td class="p-0">${product.title}</td>
              <td class="p-0">${product.id}</td>
              <td class="p-0">
                <img
                  src="${product.image}"
                  alt="mypic"
                  width="50"
                  height="50"
                />
              </td>
            </tr>`;
        }
      });
      result+= ` </table>`;
      try {
        // console.log(result);
        productsDOM.innerHTML = result;
      } catch (e) {
        console.log("Error = " + e);
      }
    }
}
//console.log(products)




function add(a) {
    const products = new Products();
    const ui = new UI();
    products.getProducts().then((products) => {   ui.displayProducts(products,a);});
    //var sum = parseInt(a, 10) + parseInt(b, 10);
    
    alert(a);
}

{
  const div = document.createElement("div");
  div.classList.add("show-product");

  div.innerHTML = `<marquee behavior="scroll" direction="left" style="background-color: rgba(255, 255, 0, 0.589);">Please click<strong> Place order</strong> after selecting the plans.</marquee>`;

  showProduct.appendChild(div);
  // console.log(cartContent);
}
