fetch('products.json')
.then(response => response.json())
.then(data => {
   
    const swiper_items_sale=document.getElementById('swiper_items_sale');
    const swiper_electronics=document.getElementById("swiper_electronics");
    const swiper_appliances=document.getElementById("swiper_appliances");
    data.forEach(product => {
        if(product.old_price){
            const percent_disc=Math.floor((((product.old_price - product.price)/product.old_price)*100));
            swiper_items_sale.innerHTML+=`
            
            <div class="swiper-slide product">
                    <span class="sale_persent">%${percent_disc}</span>

                    <div class="img_product">
                        <a href="#"><img src="${product.img}" alt=""/></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name_product">
                        <a>${product.name}</a>
                    </p>

                    <div class="price">
                        <p><span>$${product.price}</span></p>
                        <p class="old_price">$${product.old_price}</p>
                    </div>

                    <div class="icons">
                        <span class="btn_add_cart" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add To Cart
                        </span>
                        
                        <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
          
            
            `
        }
        
    });

    data.forEach(product=>{
        if(product.catetory=="electronics"){              
             const old_disc_div=product.old_price? `<span class="sale_persent">%${Math.floor((((product.old_price - product.price)/product.old_price)*100))}</span>`:"" ;      
            const old_price_p=product.old_price? `<p class="old_price">$${product.old_price}</p>`:"" ;       
         swiper_electronics.innerHTML+=`            
            <div class="swiper-slide product">                 
                    ${old_disc_div}
                    <div class="img_product">
                        <a href="#"><img src="${product.img}" alt=""/></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name_product">
                        <a>${product.name}</a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                       ${old_price_p}
                    </div>
                    <div class="icons">
                        <span class="btn_add_cart" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add To Cart
                        </span>                        
                        <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
          
            
            `
 } })


    data.forEach(product=>{
        if(product.catetory=="appliances"){              
             const old_disc_div=product.old_price? `<span class="sale_persent">%${Math.floor((((product.old_price - product.price)/product.old_price)*100))}</span>`:"" ;      
            const old_price_p=product.old_price? `<p class="old_price">$${product.old_price}</p>`:"" ;       
         swiper_appliances.innerHTML+=`            
            <div class="swiper-slide product">                 
                    ${old_disc_div}
                    <div class="img_product">
                        <a href="#"><img src="${product.img}" alt=""/></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name_product">
                        <a>${product.name}</a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                       ${old_price_p}
                    </div>
                    <div class="icons">
                        <span class="btn_add_cart" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add To Cart
                        </span>                        
                        <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
          
            
            `
 } })


    data.forEach(product=>{
        if(product.catetory=="mobiles"){              
             const old_disc_div=product.old_price? `<span class="sale_persent">%${Math.floor((((product.old_price - product.price)/product.old_price)*100))}</span>`:"" ;      
            const old_price_p=product.old_price? `<p class="old_price">$${product.old_price}</p>`:"" ;       
         swiper_mobiles.innerHTML+=`            
            <div class="swiper-slide product">                 
                    ${old_disc_div}
                    <div class="img_product">
                        <a href="#"><img src="${product.img}" alt=""/></a>
                    </div>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p class="name_product">
                        <a>${product.name}</a>
                    </p>
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                       ${old_price_p}
                    </div>
                    <div class="icons">
                      <span class="btn_add_cart" data-id="${product.id}">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Add To Cart
                        </span>                        
                        <span class="icon_product"><i class="fa-regular fa-heart"></i></span>
                    </div>
                </div>
          
            
            `
 } })

    })
