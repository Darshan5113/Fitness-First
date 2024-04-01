function activeTab() {
  document.getElementById('header_home_menu').classList.remove("active");
  document.getElementById('header_shop_menu').classList.remove("active");
  document.getElementById('header_gallery_menu').classList.remove("active");
  document.getElementById('header_feedback_menu').classList.remove("active");
    document.getElementById('header_sitemap_menu').classList.remove("active");
    document.getElementById('header_team_menu').classList.add("active");
  document.getElementById('header_checkout_menu').classList.remove("active");
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



function toggleCardContent(event) {
  var button = event.target;
  var card = button.parentNode;
  var cardContent = card.querySelector('.card-content'); 
  if (cardContent.style.display === 'none' || cardContent.style.display === '') {
    cardContent.style.display = 'block';
    card.style.height = 'auto'; 

    event.target.innerText = "Show Less";
  } else {
    cardContent.style.display = 'none';
    card.style.height = 'fit-content'; 
    event.target.innerText = "Show More";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  activeTab();
  updateCartValue();
})
