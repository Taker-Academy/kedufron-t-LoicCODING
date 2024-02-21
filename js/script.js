document.addEventListener('DOMContentLoaded', function ()
{
    const config = {
        api: 'https://api.kedufront.juniortaker.com/',
        imgApi: 'https://api.kedufront.juniortaker.com/item/picture/',
        productMain: document.getElementById('create_product'),
        productCount: document.getElementById('productCount')
    };

    function createLink(productId, price)
    {
        const link = document.createElement('a');
        const btnDiv = document.createElement('div');
        const btnP = document.createElement('p');

        link.href = `../package?p=${productId}&s=scripts`;
        link.id = `link_${productId}`;
        link.classList.add('package-color-pay');
        btnDiv.className = 'packages-btn';
        btnP.textContent = `${price}`;
        btnDiv.appendChild(btnP);
        link.appendChild(btnDiv);
        return link;
    }

    function createImage(imageSrc, altText)
    {
        const img = document.createElement('img');

        img.classList.add('packages-img');
        img.src = config.imgApi + imageSrc;
        img.alt = altText;
        img.draggable = false;
        return img;
    }

    function createContentDiv(product)
    {
        const contentDiv = document.createElement('div');
        const titleDiv = document.createElement('div');
        const titleSpan = document.createElement('span');
        const descDiv = document.createElement('div');
        const descSpan = document.createElement('span');

        contentDiv.classList.add('package-content');
        titleDiv.classList.add('package-title');
        titleSpan.textContent = product.name;
        descDiv.classList.add('package-desc');
        descSpan.innerHTML = `${product.description}<br>${product.price}$`;
        titleDiv.appendChild(titleSpan);
        descDiv.appendChild(descSpan);
        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(descDiv);
        return contentDiv;
    }

    function createProductDiv(product)
    {
        const productId = `product_${product.id}`;
        const productDiv = document.createElement('div');
        const img = createImage(product.image, product.name);
        const contentDiv = createContentDiv(product);
        const link = createLink(product.id, product.price);

        productDiv.id = productId;
        productDiv.classList.add('packages');
        contentDiv.appendChild(link);
        productDiv.appendChild(img);
        productDiv.appendChild(contentDiv);
        return productDiv;
    }

    axios.get(config.api + 'item/')
        .then(function (response) {
            const products = response.data;
            config.productCount.textContent = products.length;
            products.forEach(product => {
                const productDiv = createProductDiv(product);
                config.productMain.appendChild(productDiv);
            });
        })
        .catch(error => {
            console.log(error);
        });
});
