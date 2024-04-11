const ui = (data) => {
    const displayProduct = (products) => {
        const container = document.getElementById("box");
        container.innerHTML = ""; // Clear previous content
        products.forEach((ele) => {
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

            ele.images.forEach((imgUrl) => {
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
            thumbnail.setAttribute("class", "product-thumbnail");

            let title = document.createElement("h2");
            title.innerHTML = `Title: ${ele.title}`;

            let div = document.createElement("div");
            div.setAttribute("class", "product");

            div.append(
                id, title, brand, category, description, discountPercentage,
                price, rating, stock, imagesContainer
            );

            container.append(div);
        });
    };

    displayProduct(data);

    const search = (val, products) => {
        let filteredProducts = products.filter((product) => product.title.toLowerCase().includes(val.toLowerCase()));
        displayProduct(filteredProducts);
    };

    const handleSearch = (e, products) => {
        e.preventDefault();
        let val = document.getElementById("searchId").value;
        search(val, products);
    };

    const filterByCategory = (val, products) => {
        let filteredProducts = products.filter((product) => product.category === val);
        displayProduct(filteredProducts);
    };

    const handleFilter = (val, products) => {
        filterByCategory(val, products);
    };

    const sortByPrice = (val, products) => {
        let sortedProducts;
        if (val === "htl") {
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
        } else {
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
        }
        displayProduct(sortedProducts);
    };

    const handleSort = (val, products) => {
        sortByPrice(val, products);
    };

    const filterByBrand = (val, products) => {
        let filteredProducts = products.filter((product) => product.brand.toLowerCase() === val.toLowerCase());
        displayProduct(filteredProducts);
    };

    const handleBrandFilter = (e, products) => {
        let val = e.target.value;
        filterByBrand(val, products);
    };

    document.getElementById("searchForm").addEventListener("submit", (e) => handleSearch(e, data));
    document.getElementById("filterSelect").addEventListener("change", (e) => handleFilter(e.target.value, data));
    document.getElementById("sortSelect").addEventListener("change", (e) => handleSort(e.target.value, data));
    document.getElementById("brandFilterSelect").addEventListener("change", (e) => handleBrandFilter(e, data));
};

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => ui(data.products));


// ======================================
    // Sample data for categories and brands
// const categories = ["Electronics", "Clothing", "Books"];
// const brands = ["Apple", "Samsung", "Nike", "Adidas"];

// // Function to add options to the select element
// const addOptionsToSelect = (selectId, options) => {
//     const select = document.getElementById(selectId);
//     options.forEach(option => {
//         const optionElement = document.createElement("option");
//         optionElement.value = option;
//         optionElement.textContent = option;
//         select.appendChild(optionElement);
//     });
// };

// // Add options dynamically to filterSelect and brandFilterSelect
// addOptionsToSelect("filterSelect", categories);
// addOptionsToSelect("brandFilterSelect", brands);
