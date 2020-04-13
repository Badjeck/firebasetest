var cart = [];

export function addToCart(id) {
    cart.push(id)
}

export function viewCart() {
    console.log(cart)
}

export function delById(id) {
    cart.map((spell,iterate) => {
        if (spell.id === id) {
            cart.splice(iterate,1)
            console.log(iterate)
        }
        return console.log("je l'ai supprimer")
    })
}

export function removeCart() {
    cart = []
    console.log("je supprime tout")

}