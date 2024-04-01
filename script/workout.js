function activeTab() {
  document.getElementById('header_home_menu').classList.remove("active");
  document.getElementById('header_shop_menu').classList.remove("active");
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

fetch("./header.html")
  .then(response => {
    return response.text()
  })
  .then((data) => {
    document.getElementById("header").innerHTML = data;
    activeTab();
    updateCartValue();
  });

fetch("./footer.html")
  .then(response => {
    return response.text()
  })
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });


document.addEventListener('DOMContentLoaded', function () {
  activeTab(); const buttons = document.querySelectorAll('.project');
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('.overlay__inner img');
  const descriptionElement = document.querySelector('.overlay__inner .description');
  function open(e) {
    overlay.classList.add('open');
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    const startIndex = src.indexOf('exercise') + 8;
    const substringAfterRecipe = src.substring(startIndex, startIndex + 1);
    let description = '';

    switch (substringAfterRecipe) {
      case '1':
        description = `
                      <h2>Bodyweight Exercises</h2>
                      <h3>Description</h3>
                      <ul>
                          <li>Use your own body weight for resistance, making them convenient for home workouts.</li>
                      </ul>
                      <h3>Examples:</h3>
                      <ul>
                          <li> Squats, lunges, push-ups, planks, burpees, mountain climbers, jumping jacks, and crunches.</li>
                      </ul>`;
        break;
      case '2':
        description = `
            <h2>Yoga</h2>
            <h3>Description</h3>
            <ul>
                <li>Focuses on flexibility, strength, and relaxation through a series of poses and breathing exercises.</li>
            </ul>
            <h3>Examples:</h3>
            <ul>
                <li>Downward-facing dog, warrior poses, tree pose, cobra pose, and child's pose.</li>
            </ul>`;
        break;

      case '3':
        description = `
            <h2>Pilates</h2>
            <h3>Description</h3>
            <ul>
                <li>Emphasizes core strength, flexibility, and overall body conditioning, often utilizing controlled movements.</li>
            </ul>
            <h3>Examples:</h3>
            <ul>
                <li>Hundred, roll-up, single-leg stretch, double-leg stretch, and side plank.</li>
            </ul>
                `;
        break;

      case '4':
        description = `
            <h2>Cardio Workouts</h2>
            <h3>Description</h3>
            <ul>
                <li>Elevates heart rate and improves cardiovascular health, with or without equipment.</li>
            </ul>
            <h3>Examples:</h3>
            <ul>
                <li>Jumping jacks, high knees, butt kicks, running in place, jump rope, and dancing.</li>
            </ul>
                `;
        break;
      case '5':
        description = `
            <h2>Strength Training</h2>
            <h3>Description</h3>
            <ul>
                <li>Builds muscle strength and endurance using resistance from weights or body weight.</li>
            </ul>
            <h3>Examples:</h3>
            <ul>
                <li>Squats, lunges, push-ups, pull-ups, dips, planks, and Russian twists.</li>
            </ul>
                `;
        break;
      case '6':
        description = `
            <h2>Outdoor Workouts</h2>
            <h3>Description</h3>
            <ul>
                <li>Take advantage of outdoor spaces for activities like walking, running, cycling, or hiking.
                </li>
            </ul>
            <h3>Examples:</h3>
            <ul>
                <li> Running/jogging, brisk walking, cycling, hiking, and outdoor bodyweight circuits.</li>
            </ul>
                `;
        break;

      default:
        break;
    }

    descriptionElement.innerHTML = description;
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