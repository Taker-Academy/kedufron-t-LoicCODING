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
            displayPanierAll();
        }
    } else if (noProdPanierElement) {
        noProdPanierElement.style.display = 'block';
        productInPanier.style.display = 'none';
    }
});
function displayPanierAll() {
    const productPanierDiv = document.getElementById('productInPanier');

    const panierHTML = `
        <div class="container_panier">
            <div class="produit">
                <div class="prod_img">
                    <img class="test" src="../assets/img/voiture.png" />
                </div>
                <div class="prod_title"><p>KAngourouu</p></div>
                <div class="prod_title"><p>Prix: 198.0$</p></div>
                <div class="prod_quantity">
                    <p class="title_quantity_prod" >Quantité</p>
                    <input type="number" ng-model="cart.quantity" value="{{ cart.quantity}}" min=1 max=5 placeholder="1" class="form-control" />
                </div>
                <div class="delete_prod">
                <button type="button" class="btn-danger"><i class="fa fa-trash fa-2x"></i></button>
             </div>
             </div>
            <div class="produit">
             <div class="prod_img">
                 <img class="test" src="../assets/img/voiture.png" />
             </div>
             <div class="prod_title"><p>Titre</p></div>
             <div class="prod_title"><p>Prix: 198.0$</p></div>
             <div class="prod_quantity">
                <p class="title_quantity_prod" >Quantité</p>
                <input type="number" value="{{ cart.quantity}}" min=1 max=5 class="form-control" placeholder="1" />
             </div>
             <div class="delete_prod">
                <button type="button" class="btn-danger"><i class="fa fa-trash fa-2x"></i></button>
             </div>
          </div>
        </div>
    `
    productPanierDiv.innerHTML = panierHTML;
}