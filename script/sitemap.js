function activeTab() {
    document.getElementById('header_home_menu').classList.remove("active");
    document.getElementById('header_shop_menu').classList.remove("active");
    document.getElementById('header_gallery_menu').classList.remove("active");
    document.getElementById('header_feedback_menu').classList.remove("active");
    document.getElementById('header_team_menu').classList.remove("active");
    document.getElementById('header_checkout_menu').classList.remove("active");
    document.getElementById('header_sitemap_menu').classList.add("active");
    document.getElementById('header_userProfile_menu').classList.remove("active");
}

const getDietPlan = () => {
    window.location.href = "./healthy_recipe.html";
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



function getPathFromUrl(url) {
    return url.split(/[?#]/)[0];
}

document.addEventListener('DOMContentLoaded', function () {
    activeTab(); const urlParams = new URLSearchParams(window.location.search);
    const NothingToCheckout = urlParams.get('data_no');
    const OrderPlaced = urlParams.get('order_place');

    if (NothingToCheckout) {
        swal("Nothing To checkout");
    } else if (OrderPlaced) {
        swal("Order Placed");
    }
});
document.addEventListener('DOMContentLoaded', function () {
    activeTab();
    updateCartValue();
})