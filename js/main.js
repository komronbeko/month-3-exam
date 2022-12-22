let __form = document.querySelector(".form")
let __results = document.querySelector(".results"); 

let __nameInput = document.querySelector(".name-input");
let __numberInput = document.querySelector(".number-input");
let __adressInput = document.querySelector(".adress-input");

let __select = document.querySelector("#select");

let __size = document.querySelector(".size");

let __checkboxInput = document.querySelector(".checbox-input");
let __addInput = document.querySelector(".add-input");

//////////////////
let __modal = document.querySelector(".modal");
let __openSubmit = document.querySelector(".submit");
let __closeBtn = document.querySelector(".close-btn");


__form.addEventListener("submit", () => {
    __modal.classList.add("modal-visible")
})
__closeBtn.addEventListener("click", () => {
    __modal.classList.remove("modal-visible")
})




///////////////////////////
/////////////////////////



let clients = [];

function handleSubmit(e) {
  e.preventDefault();
  
  
  
  
  
  
  
  let client = {
    orderNumber: `Order ${clients.length + 1}`,
    name: `Name:  ${__nameInput.value}`,
    number: `Phone: ${__numberInput.value}`,
    adress: `Adress: ${__adressInput.value}`,
    thickness: `Dough thickness: ${__select.value}`,
    size: `Size: ${__size.value}`,
    ingredients: `On Pizza: ${__checkboxInput.value}`,
    adds: `Add: ${__addInput.value}`,
    total: `total: `,
  };
  



  clients.push(client);

 __nameInput.value = "";
  __numberInput.value = "";
  __adressInput.value = "";
  __select.value = "";
  __size.value = "";
  __checkboxInput.value = "";
  __addInput.value = "";
  

  console.log(clients);

  renderClients();
}

__form.addEventListener("submit", handleSubmit);

function renderClients() {
  __results.innerHTML = null;
  for (let i = 0; i < clients.length; i++) {
    let list = document.createElement("ul");
    list.className = "list";
    let item = document.createElement("li");
    item.className = "item";

    let order = document.createElement("h2");
    order.classorder = "order";
    order.textContent = clients[i].orderNumber;
    item.append(order);

    let Name = document.createElement("p");
    Name.className = "Name";
    Name.textContent = clients[i].name;
    item.append(Name);

    let Number = document.createElement("p");
    Number.className = "Number";
    Number.textContent = clients[i].number;
    item.append(Number);

    let Adress = document.createElement("p");
    Adress.className = "Adress";
    Adress.textContent = clients[i].adress;
    item.append(Adress);
    
    let thickness = document.createElement("p");
    thickness.className = "thickness";
    thickness.textContent = clients[i].thickness;
    item.append(thickness);

    let size = document.createElement("p");
    size.className = "size";
    size.textContent = clients[i].size;
    item.append(size);

    let ingredients = document.createElement("p");
    ingredients.className = "ingredients";
    ingredients.textContent = clients[i].ingredients;
    item.append(ingredients);

    let adds = document.createElement("p");
    adds.className = "add";
    adds.textContent = clients[i].adds;
    item.append(adds);

    let total = document.createElement("h4");
    total.className = "total";
    total.textContent = clients[i].total;
    item.append(total);


    
    
    list.append(item)

    __results.append(list);
  }
}
