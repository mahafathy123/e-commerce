let category_nav_list=document.querySelector('.category_nav_list');
let category_nav=document.querySelector(".category_nav");
category_nav.onclick=function(){
    category_nav_list.classList.toggle("active")
}
let nav_links=document.querySelector('.nav_links');
let close_menu=document.querySelector('.close_menu');
let open_menu=document.querySelector('.open_menu');
open_menu.onclick=function(){
    nav_links.classList.toggle('active');
}

close_menu.onclick=function(){
    nav_links.classList.toggle('active');
}




let icon=document.getElementById('cart_icon');
let cart=document.querySelector('.cart');
let close_cart=document.querySelector(".close_cart");
let shop_more=document.querySelector(".trans_bg");

icon.onclick=function(){
    cart.classList.toggle("active");

}

shop_more.onclick=function(){
    cart.classList.toggle("active");

}
close_cart.onclick=function(){
    cart.classList.toggle("active");
}



fetch('products.json')
  .then(response => response.json())
  .then(data => {
      const addToCartBtn = document.querySelectorAll(".btn_add_cart");
      
      addToCartBtn.forEach(button => {
          button.addEventListener("click", (event) => {          
              const productId = event.currentTarget.getAttribute('data-id');                     
              const selected_product = data.find(product => product.id == productId);
              
              addToCart(selected_product);
              const allMatchingProduct=document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
              allMatchingProduct.forEach(btn =>{
                btn.classList.add('active')
                btn.innerHTML=`<span >
                            <i class="fa-solid fa-cart-shopping"></i>item in cart</span>`
              })
          });
      });
  });
 

 
// function addToCart(product) {
//  let cart_info = JSON.parse(localStorage.getItem('cart_info')) || [];
//  cart_info.push({ ...product, quantity: 1 });
//  localStorage.setItem('cart_info', JSON.stringify(cart_info));

//  updateCart();
// }
 
// function updateCart(){
//     const cartItemsContainer=document.getElementById('cart_items')
     
//     const cart_info=JSON.parse(localStorage.getItem('cart_info')) || [];
//     cartItemsContainer.innerHTML= "" ;
//     cart_info.forEach((item,index) =>{
//         cartItemsContainer.innerHTML+=`
//         <div class="item_cart">
//             <img src="${item.img}" alt=""/>
//             <div class="content">
//                 <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
//                 <p class="price_cart">$80</p>
//                 <div class="quantity_control">
//                     <button class="decrease_quantity">-</button>
//                     <span class="quantity">3</span>
//                     <button class="increase_quantity">+</button>
//                 </div>
//             </div>

//             <button class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
//         </div>`
      
//     })
// }


// function updateCart() {
//     const cartItemsContainer = document.getElementById('cart_items');
//     const cart_info = JSON.parse(localStorage.getItem('cart_info')) || [];

//     // 1. تفريغ الحاوية الأول عشان المنتجات ما تتكررش
//     cartItemsContainer.innerHTML = "";

//     let total_price = 0;
//     let total_count = 0;

//     // 2. عمل Loop وعرض البيانات الحقيقية لكل منتج
//     cart_info.forEach((item, index) => {
//         // حساب إجمالي السعر والعدد الكلي
//         total_price += item.price * item.quantity;
//         total_count += item.quantity;

//         cartItemsContainer.innerHTML +=` 
//         <div class="item_cart">
//             <img src="${item.img}" alt=""/>
//             <div class="content">
//                 <h4>${item.name || item.title}</h4>
//                 <p class="price_cart">$${item.price}</p>
//                 <div class="quantity_control">
//                     <button class="decrease_quantity">-</button>
//                     <span class="quantity">${item.quantity}</span>
//                     <button class="increase_quantity">+</button>
//                 </div>
//             </div>
//             <button class="delete_item"><i class="fa-solid fa-trash-can"></i></button>
//         </div>`;
//     });

//     // 3. تحديث العداد الكلي والسعر الإجمالي في الواجهة (غيري الـ IDs حسب اللي عندك في HTML)
//     const countElement = document.querySelector('.cart_count'); // أو حسب اسم الكلاس/الـ ID عندك
//     const subtotalElement = document.querySelector('.subtotal_price');

//     if(countElement) countElement.innerText = total_count;
//     if(subtotalElement) subtotalElement.innerText =`$${total_price}`;
// } const price_cart_total =document.querySelector('.price_cart_total')
  
function addToCart(product) {
    let cart_info = JSON.parse(localStorage.getItem('cart_info')) || [];
    cart_info.push({...product ,quantity: 1})
    localStorage.setItem('cart_info',JSON.stringify(cart_info))
    updateCart()

  
   

    localStorage.setItem('cart_info', JSON.stringify(cart_info));
    updateCart();
}

function updateCart() {    
    
    const cartItemsContainer = document.getElementById('cart_items');
    const cart_info = JSON.parse(localStorage.getItem('cart_info')) || [];  

    var total_price=0
    var total_count=0
    cartItemsContainer.innerHTML= ""; 
    cart_info.forEach((item , index) => {  
        let total_price_item=item.price * item.quantity
        total_price+= total_price_item;
        total_count+=1        
        cartItemsContainer.innerHTML +=`
        <div class="item_cart">
            <img src="${item.img}" alt=""/>
            <div class="content">
                <h4>${item.name}</h4>
                <p class="price_cart">$${total_price_item}</p>
                <div class="quantity_control">
                    <button class="decrease_quantity" data-index=${index}>-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="increase_quantity" data-index=${index}>+</button>
                </div>
            </div>
            <button class="delete_item" data-index="${index}"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    });
 const count_item_cart=document.querySelector('.count_item_cart')
  const count_item_header=document.querySelector('.count_item_header')
  const price_cart_total=document.querySelector('.price_cart_total')
count_item_cart.innerHTML=`${total_count}`
count_item_header.innerHTML=`${total_count}`
 price_cart_total.innerHTML=`$${total_price}`


    const increaseaButtons=document.querySelectorAll('.increase_quantity')
    const decreaseaButtons=document.querySelectorAll('.decrease_quantity')
     
    increaseaButtons.forEach(button =>{
        button.addEventListener("click",(event)=>{
            const itemindex=event.currentTarget.getAttribute("data-index")
            increaseQuantity(itemindex)
        })
    })
    

        decreaseaButtons.forEach(button =>{
        button.addEventListener("click",(event)=>{
            const itemindex=event.currentTarget.getAttribute("data-index")
            decreaseQuantity(itemindex)
        })
    }) 
    
    function increaseQuantity(index){
        let cart_info=JSON.parse(localStorage.getItem('cart_info')) ||[];
        cart_info[index].quantity+=1
        localStorage.setItem('cart_info',JSON.stringify(cart_info))
        updateCart();
    }

    function decreaseQuantity(index){
        let cart_info=JSON.parse(localStorage.getItem('cart_info')) ||[];
        if(cart_info[index].quantity > 1){
        cart_info[index].quantity-=1}
        localStorage.setItem('cart_info',JSON.stringify(cart_info))
        updateCart();
    }

    // const countElement = document.querySelector('.cart_count');
    // const subtotalElement = document.querySelector('.subtotal_price');

    // if (countElement) countElement.innerText = total_count;
    // if (subtotalElement) subtotalElement.innerText = `$${total_price}`;
    const deletebuttons=document.querySelectorAll('.delete_item')
    deletebuttons.forEach(button => {
        button.addEventListener('click',(event)=>{
            const itemindex=event.target.closest('button').getAttribute('data-index')
            removeFromCart(itemindex)
        })
    })
}

function removeFromCart(index){
     let cart_info = JSON.parse(localStorage.getItem('cart_info')) || [];

     const removeProduct=cart_info.splice(index,1)[0]
     localStorage.setItem("cart_info",JSON.stringify(cart_info))
     updateCart();
     updateButtonsState(removeProduct.id);
    
}

function updateButtonsState(productId){
    const allMatchingButtons=document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
  allMatchingButtons.forEach(button =>{
    button.classList.remove('active');
    btn.innerHTML=`<span>add to cart<i class="fa-solid fa-cart-shopping"</i></span>`
  })
}

