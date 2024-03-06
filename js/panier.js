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
                    <img src="../assets/img/voiture.png" />
                </div>
                <div class="prod_title"><p>Titre</p></div>
             </div>
        </div>
    `
    productPanierDiv.innerHTML = panierHTML;
}