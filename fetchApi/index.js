const ui = (data) => {
    console.log(data);
    
    data.map((ele) => {
        
        let brand = document.createElement("h2");
        brand.innerHTML = `Brand: ${ele.brand}`;

        let category = document.createElement("h3");
        category.innerHTML = `Category: ${ele.category}`;

        let description = document.createElement("p");
        description.innerHTML = `Description: ${ele.description}`;

        let discountPercentage = document.createElement("h3");
        discountPercentage.innerHTML = `Discount Percentage: ${ele.discountPercentage}%`;

        let id = document.createElement("h3");
        id.innerHTML = `ID: ${ele.id}`;

        let imagesContainer = document.createElement("div");
        imagesContainer.setAttribute("class", "images-container");
    
        ele.images.map((imgUrl) => {
            let images = document.createElement("img");
            images.src = imgUrl;
            images.setAttribute("class", "product-img");
            imagesContainer.append(images);
        });
      

        let price = document.createElement("h3");
        price.innerHTML = `Price: Rs. ${ele.price}`;

        let rating = document.createElement("h3");
        rating.innerHTML = `Rating: ${ele.rating}/5`;

        let stock = document.createElement("h3");
        stock.innerHTML = `Stocks: ${ele.stock}`;

        let thumbnail = document.createElement("img");
        thumbnail.src = ele.thumbnail;
        // thumbnail.classList.add("product-thumbnail");
        thumbnail.setAttribute("class", "product-thumbnail");

        let title = document.createElement("h2");
        title.innerHTML = `Title: ${ele.title}`;
        
        let div = document.createElement("div");
        // div.classList.add("product");
        div.setAttribute("class", "product");
       
        div.append(
            id, title, brand, category, description, discountPercentage,
            price, rating, stock,  imagesContainer
        );

    
        document.getElementById("box").append(div);
    });
   
}  
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => ui(data.products))




//-----------------------------------------------------------------
// const ui = (data) => {
//     const items = data.map((item) => `
//                  <div class="col-lg-4 col-md-6 col-sm-12">
//                      <div class="product">
//                         <h3>ID: ${item.id}</h3>
//                         <h2>Title: ${item.title}</h2>
//                         <h2>Brand: ${item.brand}</h2>
//                         <h3>Category: ${item.category}</h3>
//                         <p>Description: ${item.description}</p>
//                         <h3>Discount Percentage: ${item.discountPercentage}%</h3>
//                         <h3>Price: Rs. ${item.price}</h3>
//                         <h3>Rating: ${item.rating}/5</h3>
//                         <h3>Stocks: ${item.stock}</h3>
//                         <img src="${item.thumbnail}" alt="Thumbnail" class="product-thumbnail">
//                     </div>
//                 </div>
//     `).join(''); /*We use .map() to iterate over each item in the data array, and for each item, we generate the corresponding HTML string.
//     We use join('') to concatenate all the HTML strings into a single string, which will be assigned to the items variable.*/

//     document.getElementById("box").innerHTML = items;
// };

// fetch('https://dummyjson.com/products')
//     .then(response => response.json())
//     .then(data => ui(data.products));

 
