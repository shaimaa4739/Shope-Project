// Slider Start
var imagesArray = ["1","2","3","4","5"];
var image = document.getElementById("imageID");
var counter =0;
image.setAttribute("src", "../Images/sliderImages/"+imagesArray[counter]+".jpg");
imageSlider=setInterval(() => {
        
    if(counter<imagesArray.length-1)
    {
        counter++;
        image.setAttribute("src", "../Images/sliderImages/"+imagesArray[counter]+".jpg");
    }
    else
    {
        counter=0;
        image.setAttribute("src", "../Images/sliderImages/1.jpg");
    }

}, 1000);
function nextImage()
{
    clearInterval(imageSlider)
    if(counter<imagesArray.length-1)
    {
        counter++;
        image.setAttribute("src", "../Images/sliderImages/"+imagesArray[counter]+".jpg");
    }
    else
    {
        counter=0;
        image.setAttribute("src", "../Images/sliderImages/1.jpg");
    }
}
function previousImage()
{
    clearInterval(imageSlider)
    if(counter>0)
    {
        counter --;
        image.setAttribute("src", "../Images/sliderImages/"+imagesArray[counter]+".jpg");
    }
    else
    {
        counter=4;
        image.setAttribute("src", "../Images/sliderImages/5.jpg");
    }
}

// Slider End



// displayProducts Start


function getProducts (categoryName,jsonURL){
    var productsContainer = document.getElementById("productsContainerID");

    return (
        fetch(jsonURL)
            .then(response => response.json())
            .then(products => {
                function filterProducts(){
                    let filteredProducts = products.filter(product => product.category_name == categoryName)
                    filteredProducts.forEach(product => {
                        var card = `
                            <div class="productCard" id="${product.id}">
                                <div class="productImg">
                                    <img class="imgClass" src="${product.image}"/>
                                </div>
                                <div class="productDetails">
                                    <h3>${product.product_name}</h3>
                                    <h4>$${product.product_price}</h4>
                                    <h5>rate:${product.product_rate}</h5>
                                </div>
                                <button class="addProduct" onclick="countProduct()">
                                    <i class="fas fa4-plus-circle"></i> Add Product
                                </button>
                            </div>
                        `
                        $(productsContainer).append(card)
                    })
                }
                if(productsContainer.hasChildNodes())
                {
                    productsContainer.style.display="grid";
                    $(productsContainer).empty()
                    filterProducts()
                }
            })
    )
}
function displayProducts(category){
    var jsonURL = "../Database/products.json"

    getProducts(category,jsonURL);
}

// displayProducts End




// Add Product Start

var numberOfProducts=0;
var productsNumber = document.getElementsByClassName("productsNumber");
function countProduct(){
    numberOfProducts++
    for(var i=0 ; i<2 ; i++)
    {
        productsNumber[i].innerText =numberOfProducts; 
    }
    
}

// Add Product End