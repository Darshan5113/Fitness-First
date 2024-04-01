function activeTab() {
  document.getElementById('header_home_menu').classList.add("active");
  document.getElementById('header_shop_menu').classList.remove("active");
  document.getElementById('header_gallery_menu').classList.remove("active");
  document.getElementById('header_feedback_menu').classList.remove("active");
  document.getElementById('header_gallery_menu').classList.remove("active");
  document.getElementById('header_sitemap_menu').classList.remove("active");
  document.getElementById('header_team_menu').classList.remove("active");
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


document.addEventListener('DOMContentLoaded', function () {
  activeTab(); const buttons = document.querySelectorAll('.project');
  const overlay = document.querySelector('.overlay');
  const overlayImage = document.querySelector('.overlay__inner img');
  const descriptionElement = document.querySelector('.overlay__inner .description');

  function open(e) {
    overlay.classList.add('open');
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    const startIndex = src.indexOf('recipe') + 6;
    const substringAfterRecipe = src.substring(startIndex, startIndex + 1);
    let description = '';

    switch (substringAfterRecipe) {
      case '1':
        description = `
                      <h2>CHOCOLATE CHIA PUDDING WITH BERRY COMPOTE</h2>
                      <h3>Ingredients:</h3>
                      <ul>
                          <li>110ml almond milk, unsweetened</li>
                          <li>60g Greek yoghurt</li>
                          <li>3 tsp. cocoa powder</li>
                          <li>1 tsp. honey</li>
                          <li>35g chia seeds</li>
                          <li>20g raspberry, frozen (Berry Compote)</li>
                          <li>60g blackberry, frozen (Berry Compote)</li>
                          <li>20g blueberry, frozen (Berry Compote)</li>
                          <li>1/2 tsp. lime zest (optional) (Berry Compote)</li>
                          <li>0.25 tsp. vanilla essence (Berry Compote)</li>
                      </ul>
                      
                      <h3>Instructions:</h3>
                      <ol>
                          <li>Add the almond milk, chia seeds, honey, yoghurt, and cacao powder into a jar and combine well.</li>
                          <li>Once the chia pudding is well combined, refrigerate overnight for 1 - 2 hours to set.</li>
                          <li>In the morning, add the berry compote ingredients to a saucepan over low heat for 1 - 2 minutes.</li>
                          <li>Top the chia pudding with the berry compote and serve.</li>
                      </ol>
                      
                      <h3>Calories:</h3>
                      <p>1360 CAL</p>
                      <p>PROTEIN 11.8G</p>
                      <p>FAT, TOTAL 22.4G - SATURATED 2.2G</p>
                      <p>CARBOHYDRATE 19.9G - SUGARS 2.8G</p>
                      <p>SODIUM 335MG</p>
                  `;
        break;
      case '2':
        description = `
                    <h2>BOILED EGG AND PROTEIN SHAKE</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>1 x 45g free range eggs</li>
                        <li>30g F45 Fuel protein (flavour of your choice)</li>
                        <li>300ml filtered water</li>
                    </ul>
                    
                    <h3>Instructions:</h3>
                    <ol>
                        <li>To cook the eggs, boil water in a saucepan over medium temperature and cook the eggs for 7 minutes.</li>
                        <li>Drain the water from the saucepan. Rinse the eggs under cold water to cool.</li>
                        <li>Tap the shell with the back of the spoon to break the shell. Peel the shell off both eggs.</li>
                        <li>Cut the eggs in half and set aside.</li>
                        <li>Combine the water and protein powder in a protein shaker.</li>
                        <li>Serve the boiled eggs and protein shake.</li>
                    </ol>
                    
                    <h3>Calories:</h3>
                    <p>172 CAL</p>
                    <p>PROTEIN 31.8G</p>
                    <p>FAT, TOTAL 4.4G - SATURATED 1.6G</p>
                    <p>CARBOHYDRATE 0.7G - SUGARS 0.2G</p>
                    <p>SODIUM 98MG</p>
                `;
        break;

      case '3':
        description = `
                    <h2>PUMPKIN, BROCCOLI AND GOAT CHEESE BUDDHA BOWL
                    </h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>500g pumpkin, raw, chopped</li>
                        <li>400g broccoli, raw, chopped</li>
                        <li>100g cucumber, sliced into rounds</li>
                        <li>60g cherry tomatoes</li>
                        <li>60g goats cheese</li>
                        <li>14ml olive oil (7ml for cooking, 7ml for dressing)</li>
                        <li>1 garlic clove, minced</li>
                        <li>10ml balsamic vinegar (dressing)</li>
                        <li>5g wholegrain mustard (dressing)</li>
                        <li>5g dried rosemary</li>
                        <li>Himalayan salt</li>
                    </ul>
                    
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Preheat oven to 180 degrees and line a baking tray with baking paper.</li>
                        <li>Place the pumpkin on the tray.</li>
                        <li>Combine 7ml olive oil and minced garlic in a small bowl. Brush the pumpkin with half of this mixture. Season with Himalayan salt and dried rosemary.</li>
                        <li>Bake the pumpkin in the oven for 15 minutes.</li>
                        <li>Remove the pumpkin from the oven and add broccoli onto the tray. Brush the broccoli with the remaining olive oil and garlic mixture.</li>
                        <li>Place the broccoli and pumpkin back in the oven for a further 10-15 minutes.</li>
                        <li>Once cooked, remove from the oven and set aside.</li>
                        <li>In two separate bowls, add the cucumber, cherry tomatoes, pumpkin, broccoli, and goat cheese.</li>
                        <li>In a separate small bowl, combine 7ml olive oil, wholegrain mustard, and balsamic vinegar to make the dressing.</li>
                        <li>Drizzle the dressing over the two bowls.</li>
                        <li>Serve one bowl and refrigerate the second bowl for tomorrow's leftovers.</li>
                    </ol>
                    
                    <h3>Calories:</h3>
                    <p>CALORIES 342 CAL</p>
                    <p>PROTEIN 20.9G</p>
                    <p>FAT, TOTAL 15.5G - SATURATED 5.6G</p>
                    <p>CARBOHYDRATE 21.6G - SUGARS 17.0G</p>
                    <p>SODIUM 168MG</p>
                `;
        break;

      case '4':
        description = `
                    <h2>Quinoa and Roasted Vegetable Salad with Feta</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>1 cup quinoa</li>
                        <li>2 cups water or vegetable broth</li>
                        <li>1 small sweet potato, diced</li>
                        <li>1 red bell pepper, diced</li>
                        <li>1 zucchini, sliced</li>
                        <li>1 cup cherry tomatoes, halved</li>
                        <li>1/4 cup red onion, thinly sliced</li>
                        <li>100g feta cheese, crumbled</li>
                        <li>2 tablespoons olive oil</li>
                        <li>2 cloves garlic, minced</li>
                        <li>1 teaspoon dried thyme</li>
                        <li>Salt and pepper to taste</li>
                        <li>Juice of 1 lemon</li>
                    </ul>
                    
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Preheat your oven to 200°C (400°F).</li>
                        <li>Rinse the quinoa under cold water. In a saucepan, bring the water or vegetable broth to a boil. Add the quinoa, reduce the heat to low, cover, and simmer for about 15-20 minutes, or until all the water is absorbed and the quinoa is tender. Fluff with a fork and set aside to cool.</li>
                        <li>On a baking sheet, toss the diced sweet potato, red bell pepper, zucchini, and cherry tomatoes with olive oil, minced garlic, dried thyme, salt, and pepper until evenly coated. Spread the vegetables out in a single layer. Roast in the preheated oven for about 20-25 minutes, or until tender and slightly caramelized.</li>
                        <li>In a large mixing bowl, combine the cooked quinoa, roasted vegetables, sliced red onion, and crumbled feta cheese.</li>
                        <li>Squeeze the lemon juice over the salad and toss gently to combine.</li>
                        <li>Taste and adjust the seasoning if needed.</li>
                        <li>Serve the quinoa and roasted vegetable salad immediately, or refrigerate it for later. It can be served warm, at room temperature, or chilled.</li>
                    </ol>
                    
                    <h3>Nutritional Information (per serving):</h3>
                    <p>Calories: Approximately 320 kcal</p>
                    <p>Protein: Approximately 10g</p>
                    <p>Fat: Approximately 12g</p>
                    <p>Carbohydrates: Approximately 45g</p>
                    <p>Fiber: Approximately 7g</p>
                    <p>Sodium: Approximately 300mg</p>
                `;
        break;

      case '5':
        description = `
                    <h2>PM SNACK: NUTTY SNACK ATTACK</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>14g raw, unsalted almonds</li>
                        <li>14g raw, unsalted cashews</li>
                        <li>5g coconut flakes</li>
                        <li>15g pumpkin seeds</li>
                    </ul>
                    
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Combine the ingredients together in a bowl.</li>
                        <li>Divide the snack into two serves.</li>
                        <li>Serve one portion.</li>
                    </ol>
                    
                    <h3>Nutritional Information (per serving):</h3>
                    <p>Calories: 141 CAL</p>
                    <p>Protein: 4.6g</p>
                    <p>Fat, Total: 12.3g</p>
                    <p>- Saturated: 2.8g</p>
                    <p>Carbohydrate: 2.7g</p>
                    <p>- Sugars: 1.0g</p>
                    <p>Sodium: 3mg</p>
                `;
        break;

      case '6':
        description = `
                    <h2>DINNER: SUNFLOWER SEED AND QUINOA GREEK SALAD</h2>
                    <h3>Ingredients:</h3>
                    <ul>
                        <li>30g dry quinoa grains</li>
                        <li>90ml water</li>
                        <li>10g sunflower kernels</li>
                        <li>100g tomato, diced</li>
                        <li>50g red capsicum, sliced</li>
                        <li>40g red onion, sliced</li>
                        <li>60g cucumber, sliced</li>
                        <li>30g feta cheese</li>
                        <li>1 tsp. dried mint</li>
                        <li>Himalayan salt</li>
                    </ul>
                    
                    <h3>Instructions:</h3>
                    <ol>
                        <li>Cook the quinoa grains in water according to package instructions.</li>
                        <li>Once cooked, let the quinoa cool.</li>
                        <li>In a large bowl, combine the cooked quinoa, sunflower kernels, diced tomato, sliced red capsicum, sliced red onion, sliced cucumber, and crumbled feta cheese.</li>
                        <li>Season with dried mint and Himalayan salt to taste.</li>
                        <li>Toss all ingredients together until well combined.</li>
                        <li>Divide into servings and enjoy!</li>
                    </ol>
                    
                    <h3>Nutritional Information (per serving):</h3>
                    <p>Calories: 352 CAL</p>
                    <p>Protein: 19.5g</p>
                    <p>Fat, Total: 24.6g</p>
                    <p>- Saturated: 6.7g</p>
                    <p>Carbohydrate: 11.5g</p>
                    <p>- Sugars: 10.6g</p>
                    <p>Sodium: 582mg</p>
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