let products=[
    {
        title:"Polo T-shirt",
        price:"$15.99",
        image:"D:\ECOM with vanilla JS\IMAGES\ABRAMO____Streetwear_Polo_-_Khaki___2XL-removebg-preview.png"
    }
]

function renderProducts(){
    const productContainer = document.createElement('div');
    const productImg = document.createElement('img');
    productImg.src = products[0].image;
    const productTitle = document.createElement('h5');
    productTitle.innerText=products[0].title;
    const productPrice = document.createElement('p');
    productPrice.innerText=products[0].price;
    productImg.appendChild=productContainer;
    productPrice.appendChild=productContainer;
    productTitle.appendChild=productContainer;
    
} 

renderProducts();