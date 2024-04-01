function activeTab() {
  document.getElementById('header_home_menu').classList.remove("active");
  document.getElementById('header_shop_menu').classList.remove("active");
  document.getElementById('header_gallery_menu').classList.add("active");
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

    // Count occurrences of each item
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

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.project');
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('.overlay__inner img');
  const descriptionElement = document.querySelector('.overlay__inner .description'); // Get description element

  function open(e) {
    overlay.classList.add('open');
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;

    const startIndex = src.indexOf('gallery') + 7;
    const substringAfterGallery = src.substring(startIndex, startIndex + 1);
    let description = '';

    switch (substringAfterGallery) {
      case '1':
        description = "Taking control of your diet and fitness allows you to customize your routine to fit your own requirements and tastes. Whether it is strength training, cardio, or flexibility, DIY fitness entails designing your own workout plans and selecting exercises that will help you reach your objectives. Meal planning, cooking from scratch with fresh, whole ingredients, and keeping an eye on your nutrient intake are all part of a similar diet. Adopting a do-it-yourself strategy promotes a better understanding of your body's requirements and gives you the flexibility to modify your routine as you move closer to your objectives.";
        break;
      case '2':
        description = "A healthy lifestyle revolves around exercise, which has numerous advantages for both physical and mental health. Frequent exercise lowers the risk of chronic diseases like diabetes and obesity, strengthens muscles and bones, and improves cardiovascular health and mood. Exercise options abound, catering to all tastes and levels of fitness, from weightlifting and yoga to brisk walking and jogging. Including regular exercise in your routine helps you feel better physically, has more energy, encourages better sleep, and improves your quality of life overall.";
        break;
      case '3':
        description = "Goal 3 of the Sustainable Development Agenda seeks to guarantee and enhance wellbeing for people of all ages. It includes programs to lower the death rate from pregnancy and childbirth, fight infectious diseases like HIV/AIDS and malaria, and deal with non-communicable illnesses like diabetes and mental health issues. Achieving this goal will require addressing environmental factors that affect health, promoting healthy lifestyles, improving sanitation, and providing universal access to essential medications, vaccines, and quality healthcare services.";
        break;
      case '4':
        description = "Healthy recipes are essential for maintaining a balanced diet and promoting overall health. These recipes prioritize nutrient-dense ingredients such as fruits, vegetables, whole grains, lean proteins, and healthy fats while minimizing added sugars, salt, and unhealthy fats. From vibrant salads and hearty soups to flavorful stir-fries and nourishing smoothies, healthy recipes offer delicious and satisfying options for every meal. By incorporating more healthy recipes into your diet, you can fuel your body with the nutrients it needs to thrive while enjoying a variety of flavorful dishes.";
        break;
      case '5':
        description = "Meditation is a practice that promotes relaxation, mindfulness, and inner peace. It involves focusing the mind on a particular object, thought, or activity to achieve a state of mental clarity and emotional calmness. Regular meditation has been shown to reduce stress, anxiety, and depression, improve attention and concentration, and enhance overall psychological wellbeing. Whether through guided meditation, mindful breathing, or mantra repetition, incorporating meditation into your daily routine can help you cultivate a greater sense of self-awareness and resilience in the face of life's challenges";
        break;
      case '6':
        description = "To make delectable and nourishing meals, shopping for recipes and salads entails choosing fresh, premium components. To guarantee a well-rounded and balanced diet, it's critical to select seasonal vegetables, lean meats, whole grains, and healthy fats while grocery shopping for dishes. Choose lush greens, a range of vibrant veggies, nuts, seeds, and protein sources like tofu or grilled chicken for your salads. You may make delicious and gratifying dishes and salads that help you achieve your health and wellness objectives by organizing your shopping visits and using healthful components.";
        break;
      default:
        break;
    }

    descriptionElement.textContent = description; // Set description text
  }

  function close() {
    overlay.classList.remove('open');
  }

  buttons.forEach(button => button.addEventListener('click', open));
  overlay.addEventListener('click', close);
});

document.addEventListener('DOMContentLoaded', function () {
  activeTab();
  updateCartValue();
})
