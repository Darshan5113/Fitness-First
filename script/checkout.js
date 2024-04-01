function activeTab() {
    document.getElementById('header_home_menu').classList.remove("active");
    document.getElementById('header_shop_menu').classList.remove("active");
    document.getElementById('header_gallery_menu').classList.remove("active");
    document.getElementById('header_feedback_menu').classList.remove("active");
    document.getElementById('header_team_menu').classList.remove("active");
    document.getElementById('header_checkout_menu').classList.add("active");
    document.getElementById('header_sitemap_menu').classList.remove("active");
    document.getElementById('header_userProfile_menu').classList.remove("active");
}

const updateCartValue = () => {
    const productData = localStorage.getItem('products');
    if (productData && productData.length > 0) {
        const data = productData.split(', ');

        const itemCounts = {};
        let total = 0;
        data.forEach(item => {
            if (itemCounts[item]) {
                itemCounts[item]++;
            } else {
                itemCounts[item] = 1;
                total++;
            }
        });

        document.getElementById("item_count").innerHTML = total;
    } else {
        document.getElementById("item_count").innerHTML = 0;
    }
}

const addProduct = (productName, quantity) => {
    let price = 0;

    switch (productName) {
        case "Grilled halloumi salad": price = 30;
            break;
        case "Roast radish and peanut salad": price = 50
            break;
        case "Lime feta and coriander sweetcorn": price = 50;
            break;
        case "Halloumi and watermelon salad": price = 55;
            break;
        case "Zaatar cottage cheese salad": price = 65;
            break;
        case "Caprese salad": price = 60;
            break;
        case "Tex Mex-style sweetcorn salad": price = 40;
            break;
        case "Healthy bean salad": price = 45;
            break;
        case "Coronation chickpea and apple salad": price = 50;
            break;
    }

    const amount = price * quantity;
    document.getElementById("product_list").innerHTML = document.getElementById("product_list").innerHTML + '<p>' + productName + ' X ' + quantity + ' <span class="price">$' + amount + '</span></p>';
}

document.addEventListener('DOMContentLoaded', function () {
    const productData = localStorage.getItem('products');
    if (productData && productData.length > 0) {
        const data = productData.split(', ');

        const itemCounts = {};
        let total = 0;
        data.forEach(item => {
            if (itemCounts[item]) {
                itemCounts[item]++;
            } else {
                itemCounts[item] = 1;
                total++;
            }
        });

        document.getElementById("total_items").innerText = total;

        for (const item in itemCounts) {
            const quantity = itemCounts[item];
            addProduct(item, quantity);
        }

        document.getElementById("total_amount").innerText = '$' + parseInt(localStorage.getItem("amount"));
    } else {
        window.location.href = './home.html?data_no=true';
    }
});

const placeOrder = () => {
    localStorage.clear();
    window.location.href = './home.html?order_place=true';
}

document.addEventListener('DOMContentLoaded', function () {
    activeTab();
    updateCartValue();
})