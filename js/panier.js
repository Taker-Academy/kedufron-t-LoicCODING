document.addEventListener("DOMContentLoaded", function () {
    const panierFromLocalStorage = JSON.parse(localStorage.getItem('panier')) || [];
    const noProdPanierElement = document.querySelector('.no_prod_panier');
    const productInPanier = document.querySelector('#productInPanier');
    console.log(panierFromLocalStorage.length)
    console.log(panierFromLocalStorage)
    if (panierFromLocalStorage.length > 0) {
        if (noProdPanierElement) {
            noProdPanierElement.style.display = 'none';
            productInPanier.style.display = 'block';
            displayPanierAll(panierFromLocalStorage);
        }
    } else if (noProdPanierElement) {
        noProdPanierElement.style.display = 'block';
        productInPanier.style.display = 'none';
    }
});function displayPanierAll(products) {
    const productPanierDiv = document.getElementById('productInPanier');
    productPanierDiv.innerHTML = ''; // Efface le contenu précédent

    const containerPanierDiv = document.createElement('div');
    containerPanierDiv.classList.add('container_panier');

    products.forEach(product => {
        const produitDiv = document.createElement('div');
        produitDiv.classList.add('produit');

        produitDiv.innerHTML = `
            <div class="prod_img">
                <img class="test" src="https://api.kedufront.juniortaker.com/item/picture/${product.image}" alt="${product.name}" />
            </div>
            <div class="prod_title">
                <p>${product.name}</p>
            </div>
            <div class="prod_title">
                <p class="prod_price">${product.price} $</p>
            </div>
            <div class="prod_quantity">
                <p class="title_quantity_prod">Quantité</p>
                <input type="number" value="${product.quantity}" min="1" max="5" class="form-control" placeholder="1" />
            </div>
            <div class="delete_prod">
                <button type="button" class="btn-danger"><i class="fa fa-trash fa-2x"></i></button>
            </div>
        `;

        containerPanierDiv.appendChild(produitDiv);
    });

    productPanierDiv.appendChild(containerPanierDiv);
}
