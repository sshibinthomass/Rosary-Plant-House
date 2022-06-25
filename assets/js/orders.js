showProduct = document.querySelector(".show-product");
const productsDOM = document.querySelector(".products-center");
const allPlantsDOM = document.querySelector(".all-plants");
const allOrdersDOM = document.querySelector(".all-orders");
const navBarDOM = document.querySelector(".nav-bar-const");

//Products
class Products {
  async getProducts() {
    try {
      let result = await fetch("assets/json/products.json");
      //let result = await fetch(
      //"https://script.google.com/macros/s/AKfycbwEeonvBEHighvVY5zN3rdNmdRRC7jq3iJFavqegSJtLDZwXmXttSyWWf-JuE5p3nN1/exec"
      //);

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
          placeAva,
          qtyAva,
          demand,
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
          placeAva,
          qtyAva,
          demand,
        };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//Orders
class Orders {
  async getOrders() {
    try {
      //let result = await fetch("assets/json/orders.json");
      let result = await fetch(
"https://script.google.com/macros/s/AKfycbwgQ8TwKRHPl0AopnU9-c2SBFgjoygC3UHH1PPt4tY6bgZE7nKQqbe9SBnSEV1ossABoA/exec"
        );

      let data = await result.json();

      let orders = data.items;

      orders = orders.map((item) => {
        const { date, name, state,plantsTaken, dispatched, received, plantId,comments } =
          item.fields;
        const { id } = item.sys;

        return {
          id,
          date,
          name,
          state,
          plantsTaken,
          dispatched,
          received,
          plantId,
          comments
        };
      });
      return orders;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  //Billing
  billing(products, val) {
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
    var count = 0;
    var plantId;
    var totalAmount = 0;
    var totalPlants = 0;
    myArray.forEach((prod) => {
      count += 1;
      var plantId = prod.split("-")[0];
      var tempPlantQty = prod.split("-")[1];
      var plantQty = 1;
      if (typeof tempPlantQty != "undefined") {
        plantQty = tempPlantQty;
      }
      val = products.find((o) => o.id === plantId);
      var localDict = {
        sNo: count,
        qty: plantQty,
        id: plantId,
        title: val.title,
        image: val.image,
        price: val.price,
        risk: val.transit,
        ava:val.ava
      };
      totalAmount += localDict.price * parseInt(localDict.qty);
      totalPlants += parseInt(localDict.qty);
      //totalAmount+=localDict
      console.log(val);
      result += `
      <tr>
        <th class="p-0" scope="row"><b>${localDict.sNo}</b></th>
        <td class="p-0">${localDict.id}</td>
        <td class="p-0">${localDict.title}-${localDict.risk[0]}(${localDict.ava})</td>
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
    result += `        <tr>
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
  }
  //Plant finder
  plantFinder(products, val) {
    let result = `  
    <table class="table table-hover table-bordered text-center">
      <tr>
        <th class="p-0" scope="col">S.No</th>
        <th class="p-0" scope="col">Plant No</th>
        <th class="p-0" scope="col">Plant Name</th>
        <th class="p-0" scope="col">Quantity</th>
        <th class="p-0" scope="col">Photo</th>
        <th class="p-0" scope="col"></th>
      </tr>`;
    const myArray = val.split(",");
    var count = 0;
    var totalPlants = 0;
    myArray.forEach((prod) => {
      count += 1;
      var plantId = prod.split("-")[0];
      var tempPlantQty = prod.split("-")[1];
      var plantQty = 1;
      if (typeof tempPlantQty != "undefined") {
        plantQty = tempPlantQty;
      }
      val = products.find((o) => o.id === plantId);
      var localDict = {
        sNo: count,
        qty: plantQty,
        id: plantId,
        title: val.common,
        image: val.image,
        risk: val.transit,
      };
      totalPlants += parseInt(localDict.qty);
      result += `
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
        <td class="p-0">  <input type="checkbox">        </td>
      </tr>`;
    });
    result += `        <tr>
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
  filter(products, availability, placeAva, qtyAva, demand) {
    let result = `  
    <table class="table table-hover table-bordered text-center">
      <tr>
        <th class="p-0" scope="col">S.No</th>
        <th class="p-0" scope="col">Plant Name</th>
        <th class="p-0" scope="col">Demand</th>
        <th class="p-0" scope="col">Quantity</th>
        <th class="p-0" scope="col">Photo</th>
      </tr>`;
    products.forEach((product) => {
      if (
        availability.includes(product.ava) &&
        placeAva.includes(product.placeAva) &&
        qtyAva.includes(product.qtyAva) &&
        demand.includes(product.demand)
      ) {
        if (product.ava == 0) {
          result += '<tr class="bg-danger">';
        }
        if (product.ava == 1) {
          result += "<tr>";
        }
        if (product.placeAva == "Top") {
          result += `<th class="p-0" scope="row"><b>${product.id}<i class="fa fa-long-arrow-up" aria-hidden="true"></i> </b></th>`;
        }
        if (product.placeAva == "Down") {
          result += `<th class="p-0" scope="row"><b>${product.id}<i class="fa fa-long-arrow-down" aria-hidden="true"></i> </b></th>`;
        }
        if (product.placeAva == "Both") {
          result += `<th class="p-0" scope="row"><b>${product.id}<i class="fa fa-arrows-v" aria-hidden="true"></i> </b></th>`;
        }
        result += `
        <td class="p-0 ">${product.common}</td>`;
        if (product.demand == "V_Hgh") {
          result += `<td class="p-0 bg-info">Very High</td> `;
        } else if (product.demand == "V_Loow") {
          result += `<td class="p-0">Very Low</td> `;
        } else {
          result += `<td class="p-0">${product.demand}</td> `;
        }
        if (product.qtyAva == "Low") {
          result += `
        <td class="p-0 bg-warning">${product.qtyAva}</td>`;
        } else {
          result += `  
        <td class="p-0">${product.qtyAva}</td>`;
        }
        result += `  
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
    try {
      // console.log(result);
      allPlantsDOM.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }

  async allOrders(orders,plantsTaken,dispatched,received) {
    //console.log(products);
    const products1 = new Products();
    var counts = 0;
    const products = await products1.getProducts();
    let result = `  
    <table class="table table-hover table-bordered text-center">
      <tr>
      <th class="p-0" scope="col">Id</th>
        <th class="p-0" scope="col">S.No</th>
        <th class="p-0" scope="col">Date</th>
        <th class="p-0" scope="col">Name</th>
        <th class="p-0" scope="col">State</th>
        <th class="p-0" scope="col">Order</th>
      </tr>`;
    orders.forEach((order) => {
      
      //console.log(counts);
      if ( dispatched.includes(order.dispatched.toString())
      &&  plantsTaken.includes(order.plantsTaken.toString())
        &&  received.includes(order.received.toString())
       
        ) {
        const date = order.date.slice(0, 10);
        counts+=1;

        result += `
      <tr>
      <th class="p-0">${counts}</th>
        <th class="p-0" ><b>${order.id}</b></th>
        <td class="p-0">${date}</td>
        <td class="p-0">${order.name}</td>
        <td class="p-0">${order.state}</td>
        <td class="p-0">
          <div class="d-flex justify-content-center mt-2">
            <button type="button" id="${order.id}" value="${order.id}" class="btn btn-link" data-toggle="modal" data-target="#order${order.id}">
            ${order.id}
            </button>
          </div>
          <div class="modal fade" id="order${order.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header p-0 ml-3 pt-2">
                <h5 class="modal-title" id="exampleModalLabel">${order.id}-${order.name}</h5><br>
                <button type="button" class="close mr-2" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <p>${order.comments}</p>
              <div class="modal-body p-1">
              <table class="table table-hover table-bordered text-center">
                <tr>
                  <th class="p-0" scope="col">S.No</th>
                  <th class="p-0" scope="col">Plant No</th>
                  <th class="p-0" scope="col">Plant Name</th>
                  <th class="p-0" scope="col">Quantity</th>
                  <th class="p-0" scope="col">Photo</th>
                  <th class="p-0" scope="col"></th>
                </tr>`;
        if (order.plantId != "No Data Available") {
          const myArray = order.plantId.split(",");
          var count = 0;
          var totalPlants = 0;
          //console.log(myArray);

          myArray.forEach((prod) => {
            count += 1;
            var plantId = prod.split("-")[0];
            var tempPlantQty = prod.split("-")[1];
            var plantQty = 1;
            if (typeof tempPlantQty != "undefined") {
              plantQty = tempPlantQty;
            }
            const val = products.find((o) => o.id === plantId);
            const localDict = {
              sNo: count,
              qty: plantQty,
              id: plantId,
              title: val.common,
              image: val.image,
              risk: val.transit,
            };
            totalPlants += parseInt(localDict.qty);
            result += `
                <tr>
                  <th class="p-0" scope="row"><b>${localDict.sNo}</b></th>
                  <td class="p-0">${localDict.id}</td>
                  <td class="p-0">${localDict.title}</td>
                  <td class="p-0">${localDict.qty}</td>
                  <td class="p-0">
                    <img
                      src="${localDict.image}"
                      alt="mypic"
                      width="50"
                      height="50"
                    />
                  </td>
                  <td class="p-0">  <input type="checkbox">        </td>
                </tr>`;
          });
        }

        result += `        <tr>
              <th class="p-0" scope="row"><b></b></th>
              <td class="p-0"></td>
              <td class="p-0">Total</td>
              <td class="p-0">${totalPlants}</td>
              <td class="p-0">
              </td>
            </tr>
              </table>
              <div class="modal-footer p-2">
              <button type="button" class="btn btn-secondary mr-3" data-dismiss="modal">Close</button>
            </div>
              `;
      }
    });
    try {
      allOrdersDOM.innerHTML = result;
    } catch (e) {
      console.log("Error = " + e);
    }
  }
}
//console.log(products)

// add event listener

//Plant billing
function billing(billing) {
  const products = new Products();
  const ui = new UI();
  console.log(products);
  products.getProducts().then((products) => {
    ui.billing(products, billing);
  });
  //var sum = parseInt(a, 10) + parseInt(b, 10);

  //alert(billing);
}
//Plant Finder
function finder(plantNumb) {
  const products = new Products();
  const ui = new UI();
  products.getProducts().then((products) => {
    ui.plantFinder(products, plantNumb);
  });
  //var sum = parseInt(a, 10) + parseInt(b, 10);

  //alert(plantNumb);
}

function plantTypes(types) {
  const products = new Products();
  const ui = new UI();
  products.getProducts().then((products) => {
    ui.allPlants(products, types);
  });
  //var sum = parseInt(a, 10) + parseInt(b, 10);

  //alert(plantNumb);
}

//Filter
function filter() {
  const products = new Products();
  const ui = new UI();
  var availability = document.getElementById("availability").value;
  var placeAva = document.getElementById("placeAva").value;
  var qtyAva = document.getElementById("qtyAva").value;
  var demand = document.getElementById("demand").value;
  products.getProducts().then((products) => {
    ui.filter(products, availability, placeAva, qtyAva, demand);
  });
}

//Preload Filter
function filterPreload() {
  const products = new Products();
  const ui = new UI();
  products.getProducts().then((products) => {
    ui.filter(
      products,
      "0 1",
      "Top Down Both",
      "High Medium Low NA Waiting InProgress",
      "V_Hgh High Medium Low V_Loow NotStarted"
    );
  });
}
filterPreload();
//Nav-bar
{
  const div = document.createElement("div");
  div.classList.add("nav-bar-const");

  div.innerHTML = `     
  <nav class="navbar navbar-expand-lg navbar-light "
  style="background-image: linear-gradient(to right,#fceabb,#f8b500 );">
    <a class="navbar-brand" href="o_index.html">
      <img src="assets/img/logo(only).png" alt="" width="30" height="30" />
    </a>
    <button class="navbar-toggler navbar-light" style="background-image: linear-gradient(to right,#fceabb,#f8b500 );" type="button"
      data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-light pl-0 p-0 m-0" style="background-image: linear-gradient(to right,#fceabb,#f8b500 );"id="navbarNavAltMarkup">
      <div class="navbar-nav p-0 m-0">

        <a type="button" role="button" class="nav-link btn
          btn-outline-secondary nav-item btn-sm m-2 py-1"
          href="o_finder.html">
          Plant Finder
        </a>

        <a type="button" role="button" class="nav-link btn
          btn-outline-secondary nav-item btn-sm m-2 p-1" href="o_billing.html">
          Billing
        </a>
        <a type="button" role="button" class="nav-link btn
        btn-outline-secondary nav-item btn-sm m-2 py-1"
        href="o_filter.html">
        Filter
      </a>
      <a type="button" role="button" class="nav-link btn
      btn-outline-secondary nav-item btn-sm m-2 py-1"
      href="o_orders.html">
      Orders
    </a>
      </div>
    </div>
  </nav>

  `;

  navBarDOM.appendChild(div);
  // console.log(cartContent);
}
//All orders
function showAllOrders() {
  const orders = new Orders();
  const products = new Products();
  const ui = new UI();
  var ordersToShow = document.getElementById("order-filter").value;
  //const prod=orders.getOrders();
  var plantsTaken;
  var billSent;
  var reached;
  if(ordersToShow=="CONT"){
    plantsTaken="false";
    dispatched="false";
    received="false";
  }else if(ordersToShow=="COT"){
    plantsTaken="true";
    dispatched="false";
    received="false";
  }else if(ordersToShow=="CO"){
    plantsTaken="falsetrue";
    dispatched="false";
    received="false";
  }else if(ordersToShow=="DNR"){
    plantsTaken="falsetrue";
    dispatched="true";
    received="false";
  }else if(ordersToShow=="AO"){
    plantsTaken="falsetrue";
    dispatched="falsetrue";
    received="falsetrue";
  };
  //console.log(ordersToShow);
  //console.log(products.getProducts().then((products)));
  //const ords=orders.getOrders();
  //prod.forEach((pro) =>{console.log(pro)});
  orders.getOrders().then((orders) => {
    ui.allOrders(orders,plantsTaken,dispatched,received);
  });

  //products.getProducts().then((products)=>{ui.allOrders(products);});
}
showAllOrders();
