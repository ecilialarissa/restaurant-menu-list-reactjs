const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cardCounter = document.getElementById("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")


let cart = [];

// abrir modal carrinho
cartBtn.addEventListener("click", function() {
    cartModal.style.display = "flex"
})

// fechar ao clicar fora do modal 

cartModal.addEventListener("click", function(event) {
    if(event.target === cartModal){
        cartModal.style.display = "none"
    }
}) 

closeModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none"
})

menu.addEventListener("click", function(event){

    let parentButton = event.target.closest(".add-to-cart-btn")
    if (parentButton){
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))

       // console.log(name)
        //console.log(price)

        addToCart(name, price)
    }
})

// função adicionar no carrinho 

function addToCart(name,price){
    const existingItem = cart.find(item => item.name === name)

    if(existingItem){
        existingItem.quantity += 1;
        
    }else{
        cart.push({
        name,
        price,
        quantity: 1,
    })

    
    }

    updateCartModal()


} 

function updateCartModal() {
    cartItemsContainer.innerHTML = "";
    let total = 0; 

    cart.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("justify-between", "mb-4", "flex-col")


        cartItemElement.innerHTML = `
        <div class = "flex items-center justify-between" >
            <div>
                <p class=" font-semibold " >${item.name}</p>
                <p> Qtd: ${item.quantity}</p>
                <p class="font-bold mt-2">R$ ${item.price.toFixed(2)}</p>
            </div>
                
                <button class="remove-from-cart-btn" data-name="${item.name}">
                Remover
                </button>
               

            </div>
        `

        total += item.price * item.quantity;

        cartItemsContainer.appendChild(cartItemElement)    
    })
        cartTotal.textContent = total.toLocaleString("pt-BR", {
            style: "currency",
            currency:"BRL"
        });
    
    cardCounter.innerHTML = cart.length; 

}

// função remover item do carrinho

cartItemsContainer.addEventListener("click", function (event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")
        
    
      removeItemCart(name);
    }

})

function removeItemCart(name){
    const index = cart.findIndex(item => item.name === name);
    if(index !==  -1){
        const item = cart[index];

        if (item.quantity > 1){
            item.quantity -= 1;
            updateCartModal();
            return;
        }

        //utilizando o método .splice para retirar items de contagens maiores que 1
        cart.splice(index, 1); 
        updateCartModal();


    }
}

// input endereço 
    checkoutBtn.addEventListener("input", function(event){
        let inputValue = event.target.value;

        // verificação do campo endereço 


    })


//finalizar pedido 

checkoutBtn.addEventListener("click", function(){
    if (cart.length === 0)
        return;
    if(addressInput.value === ""){
        addressWarn.classList.remove("hidden")
        addressInput.classList.add("border-red-500")
        
    }
    
})
    

