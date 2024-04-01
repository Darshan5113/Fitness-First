function activeTab() {
    document.getElementById('header_home_menu').classList.remove("active");
    document.getElementById('header_shop_menu').classList.remove("active");
    document.getElementById('header_gallery_menu').classList.remove("active");
    document.getElementById('header_feedback_menu').classList.remove("active");
    document.getElementById('header_team_menu').classList.remove("active");
    document.getElementById('header_sitemap_menu').classList.remove("active");
    document.getElementById('header_checkout_menu').classList.remove("active");
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

const toCart = () => {
    window.location.href = "./checkout.html";
}



function goToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goToTopBtn").style.display = "block";
    } else {
        document.getElementById("goToTopBtn").style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    activeTab();
    updateCartValue();
})