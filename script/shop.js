function activeTab() {
  document.getElementById('header_home_menu').classList.remove("active");
  document.getElementById('header_shop_menu').classList.add("active");
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


const addToCart = (product, price) => {
  const products = localStorage.getItem("products");
  const amount = localStorage.getItem("amount");

  if (products && products.toString().length > 0 && amount > 0) {
    const newProducts = localStorage.getItem("products") + ", " + product;
    const newAmount = (parseInt(localStorage.getItem("amount")) + price);

    localStorage.setItem("products", newProducts);
    localStorage.setItem("amount", newAmount);
  } else {
    localStorage.setItem("products", product);
    localStorage.setItem("amount", price);
  }

  swal("Item Added Successfully");
  updateCartValue();
}

const onCheckout = () => {
  const productData = localStorage.getItem('products');

  if (productData && productData.length > 0) {
    window.location.href = './checkout.html';
  } else {
    swal('Nothing to checkout')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  activeTab();
  updateCartValue();
})