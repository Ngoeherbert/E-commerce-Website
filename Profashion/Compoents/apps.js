// getting classes
const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

//coding click evens for slider action on menuItems
menuItems.forEach((item,index) => {
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    });
});

// product array
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 199,
        colors: [
            {
                code: "black",
                img: "/Images/High-Top-black.png",
            },
            {
                code: "white",
                img: "/Images/High-Top-white.png",
            },
        ],
    },
    {
        id: 2,
        title: "Jordan",
        price: 199,
        colors: [
            {
                code: "red",
                img: "/Images/retro6-red.png",
            },
            {
                code: "black",
                img: "/Images/retro6-black.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 199,
        colors: [
            {
                code: "black",
                img: "/Images/blazer-black.png",
            },
            {
                code: "white",
                img: "/Images/blazer-white.png",
            },
        ],
    },
    {
        id: 4,
        title: "Nike",
        price: 199,
        colors: [
            {
                code: "green",
                img: "/Images/dunks-green.png",
            },
            {
                code: "red",
                img: "/Images/dunks-red.png",
            },
        ],
    },
    {
        id: 5,
        title: "Air Max",
        price: 199,
        colors: [
            {
                code: "orange",
                img: "/Images/Air_Max-orange.png",
            },
            {
                code: "white",
                img: "/Images/Air_Max-white.png",
            },
        ],
    },
    {
        id: 6,
        title: "Adidas",
        price: 199,
        colors: [
            {
                code: "blue",
                img: "/Images/Adidas_ultra-blue.png",
            },
            {
                code: "green",
                img: "/Images/Adidas_ultra-green.png",
            },
        ],
    },
    {
        id: 7,
        title: "All Star",
        price: 199,
        colors: [
            {
                code: "brown",
                img: "/Images/All-star-brown.png",
            },
            {
                code: "white",
                img: "/Images/All-star-white.png",
            },
        ],
    },
];


// creating dynamic choosen product color change
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        // change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product
        choosenProduct = products[index]

        // change text of current product
        currentProductTitle.textContent = choosenProduct.title;
        currentProductTitle.textContent = "$" + choosenProduct.price;
        currentProductImg.src= choosenProduct.colors[0].img;

        // changing styles for each color/assign new color
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

// changing shoes color

currentProductColors.forEach((color,index)=>{
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img
    })
})


// choosing seizes
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor="white"
            size.style.color="black"
        })
        size.style.backgroundColor="black"
        size.style.color="white"
        
     })
})


// import classes
const productBtn = document.querySelector(".productBtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

// close(X) button functionality
productBtn.addEventListener("click", ()=>{
    payment.style.display="flex"
})

close.addEventListener("click", ()=>{
    payment.style.display="none"
})
//  menubar
const menuBtn = document.querySelector(".menuBar");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
})