document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    axios.get(`https://api.kedufront.juniortaker.com/item/${productId}`)
        .then(function (response) {
            const product = response.data;
            displayProductDetails(product);
            const addToPanier = document.getElementById('payWithPaypal');
            if (addToPanier) {
                addToPanier.addEventListener('click', function () {
                    const panier = JSON.parse(localStorage.getItem('panier')) || [];
                    panier.push({
                        id: product.item.id,
                        name: product.item.name,
                        price: product.item.price,
                    });
                    localStorage.setItem('panier', JSON.stringify(panier));
                    alert('Produit ajouté au panier !');
                });
            }
        })
        .catch(function (error) {
            console.error('Error fetching product details:', error);
        });
});

function displayProductDetails(product) {
    const productDetailsDiv = document.getElementById('productDetails');
    const productHTML = `
        <div class="container">
            <div class="package_main">
                <div class="left">
                    <div class="package_img">
                        <img src="https://api.kedufront.juniortaker.com/item/picture/${product.item.image}" alt="${product.item.name}">
                    </div>
                    <div class="package_desc">
                        <p>
                            <span class="title-description">Description :</span>
                            <br>
                            <br>
                            <br>
                            <span class="description__title">
                              <i class="fas fa-file-code" aria-hidden="true"></i> Produit :
                            </span>
                            <br>
                            <br>
                            <p>${product.item.description}</p>
                            <br>
                            <br>
                            <span class="description__title"><i class="fas fa-tools" aria-hidden="true"></i> Prix du Produit :</span>
                            <p>
                                <br>
                                ・${product.item.price} <br>
                            </p>
                            <br>
                            <br>
                            <span class="description__title"><i class="fas fa-tools" aria-hidden="true"></i> Date De Création :</span>
                            <p>
                                <br>
                                ・${product.item.createdIn} <br>
                            </p>
                        </p>
                    </div>
                </div>
                <div class="right">
                    <div class="package-type">
                        <p>PRODUIT</p>
                    </div>
                    <div class="package-title">
                        <h3>${product.item.name}</h3>
                    </div>
                    <div class="package-price">
                        <p>
                            <span class="realPrice">${product.item.price}$</span>
                        </p>
                    </div>
                    <div class="package-buy">
                        <button class="package-btn-left" id="payWithPaypal"><i class="fab fa-paypal"></i> Ajouter Panier</button>
                        <button class="package-btn-right" id="paymentCB"><i class="fas fa-credit-card"></i> Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    productDetailsDiv.innerHTML = productHTML;
}


