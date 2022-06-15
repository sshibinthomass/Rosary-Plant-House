
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
          <th class="p-0" scope="col">Price</th>
          <th class="p-0" scope="col">Photo</th>
        </tr>`;
      const myArray = val.split(",");
      var count=0;
      var plantId;
      var totalAmount=0;
      var totalPlants=0;
      myArray.forEach((prod)=>{
        count+=1;
        var plantId=prod.split("-")[0];
        var tempPlantQty=prod.split("-")[1];
        var plantQty=1;
        if(typeof tempPlantQty != 'undefined'){plantQty=tempPlantQty};
        val=products.find(o => o.id ===plantId);
        var localDict={
          sNo:count,
          qty:plantQty,
          id:plantId,
          title:val.title,
          image:val.image,
          price:val.price,
          risk:val.transit
        };
        totalAmount+=localDict.price*parseInt(localDict.qty);
        totalPlants+=parseInt(localDict.qty);
        //totalAmount+=localDict
        console.log(val);
        result+= `
        <tr>
          <th class="p-0" scope="row"><b>${localDict.sNo}</b></th>
          <td class="p-0">${localDict.id}</td>
          <td class="p-0">${localDict.title}-${localDict.risk[0]}</td>
          <td class="p-0">${localDict.qty}</td>
          <td class="p-0">₹${localDict.price}</td>
          <td class="p-0">
            <img
              src="${localDict.image}" 
              alt="mypic"
              width="50"
              height="50"
            />
          </td>
        </tr>`;
      });
      console.log(totalAmount);
      console.log(totalPlants);
      result+= `        <tr>
      <th class="p-0" scope="row"><b></b></th>
      <td class="p-0"></td>
      <td class="p-0">Total</td>
      <td class="p-0">${totalPlants}</td>
      <td class="p-0">₹${totalAmount}</td>
      <td class="p-0">
      +Delivery
      </td>
    </tr>
     </table>`;
      try {
        // console.log(result);
        productsDOM.innerHTML = result;
      } catch (e) {
        console.log("Error = " + e);
      }
    };
    plantFinder(products,val) {
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
      var count=0;
      var plantId;
      var totalAmount=0;
      var totalPlants=0;
      myArray.forEach((prod)=>{
        count+=1;
        var plantId=prod.split("-")[0];
        var tempPlantQty=prod.split("-")[1];
        var plantQty=1;
        if(typeof tempPlantQty != 'undefined'){plantQty=tempPlantQty};
        val=products.find(o => o.id ===plantId);
        var localDict={
          sNo:count,
          qty:plantQty,
          id:plantId,
          title:val.title,
          image:val.image,
          risk:val.transit
        };
        totalPlants+=parseInt(localDict.qty);
        //totalAmount+=localDict
        console.log(val);
        result+= `
        <tr>
          <th class="p-0" scope="row"><b>${localDict.sNo}</b></th>
          <td class="p-0">${localDict.id}</td>
          <td class="p-0">${localDict.title}-${localDict.risk[0]}</td>
          <td class="p-0">${localDict.qty}</td>
          <td class="p-0">
            <img
              src="${localDict.image}"
              alt="mypic"
              width="50"
              height="50"
            />
          </td>
        </tr>`;
      });
      console.log(totalAmount);
      console.log(totalPlants);
      result+= `        <tr>
      <th class="p-0" scope="row"><b></b></th>
      <td class="p-0"></td>
      <td class="p-0">Total</td>
      <td class="p-0">${totalPlants}</td>
      <td class="p-0">
      </td>
    </tr>
     </table>`;
      try {
        // console.log(result);
        productsDOM.innerHTML = result;
      } catch (e) {
        console.log("Error = " + e);
      }
    }
}
//console.log(products)




function billing(billing) {
    const products = new Products();
    const ui = new UI();
    products.getProducts().then((products) => {   ui.displayProducts(products,billing);});
    //var sum = parseInt(a, 10) + parseInt(b, 10);
    
    //alert(billing);
}

function finder(plantNumb) {
  const products = new Products();
  const ui = new UI();
  products.getProducts().then((products) => {   ui.plantFinder(products,plantNumb);});
  //var sum = parseInt(a, 10) + parseInt(b, 10);
  
  //alert(plantNumb);
}