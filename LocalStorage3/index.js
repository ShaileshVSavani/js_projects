

let products = JSON.parse((localStorage.getItem('data'))) || [];
const displayProduct = () => {
    document.getElementById("box").innerHTML = "";
    products.map((ele) => {
      console.log(ele);
    
      let img = document.createElement("img");
      img.src = ele.img;
      let title = document.createElement("h2");
      title.innerHTML = ele.title;
      title.setAttribute("id", "title1");
      let price = document.createElement("p");
      price.innerHTML = ele.price;
      price.setAttribute("id", "price1"); 
      let category = document.createElement("h3");
      category.innerHTML = ele.category;
      category.setAttribute("id", "category1");
      let btn = document.createElement("Button");
      btn.innerHTML = "Delete";
      btn.addEventListener("click", () => deleteItem(ele));
      let div = document.createElement("div");
      div.setAttribute("id", "parent_box"); 
      div.append(img, title, category, price, btn);
      document.getElementById("box").append(div);

      let deleteItem = () => {
        products.splice(ele, 1);
        displayProduct();
        localStorage.setItem('data', JSON.stringify(products));
      }
    });
  };
 
displayProduct(); //for page loading and page refresh
const submitHandler =  (e) => {
    e.preventDefault();
    let data = {
        title : document.getElementById('title').value,
        img : document.getElementById('img').value,
        price : document.getElementById('price').value,
        category : document.getElementById('category').value
    };
    
    products.push(data);
    localStorage.setItem('data', JSON.stringify(products));
    displayProduct();
}

document.querySelector("#form").addEventListener("submit", submitHandler)