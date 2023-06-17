const API="https://fakestoreapi.com/products";
const savedData=JSON.parse(localStorage.getItem("cart"))
let cart=savedData?savedData:[];


async function fetchData(){
    try{
        const response=await fetch(API)
    const data=await response.json()
    console.log(data)
    
    displayData(data.slice(0-10))


    const btns=document.querySelectorAll(".cartbtn")

   
    btns.forEach((btn)=>{
        btn.addEventListener("click",(event)=>{
    const btnID=event.target.dataset.id;
    const product=data.find((product)=>btnID==product.id)

    cart.push(product)

    localStorage.setItem("cart",JSON.stringify(cart)),
    console.log(product)

        })
    })
    }catch(error){
        console.log("something went wrong",error)
    }
}



fetchData()
function displayData(products){
    const main=document.querySelector(".card")
     products.forEach((product)=>{
const createTemplate=`
<img src="${product.image}" alt="">
<h1>${product.title}</h1>
<h2>${product.price}</h2>
<a href="id=${product.id}">veiw product</a>
<button data-id=${product.id} class="cartbtn">ADD TO CART</button>
`;
main.insertAdjacentHTML("beforebegin",createTemplate)
     })
}