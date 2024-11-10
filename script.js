// Recipe data
const recipes = [
  {
    id: '1',
    title: 'Spicy Thai Basil Noodles',
    description: 'A vibrant and aromatic Thai dish featuring rice noodles tossed in a spicy basil sauce with fresh vegetables.',
    image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&q=80&w=1000',
    cuisine: 'Thai',
    cookingTime: 25,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '200g rice noodles',
      '2 cloves garlic, minced',
      '2 Thai chilies, sliced',
      '1 cup Thai basil leaves',
      '200g tofu, cubed',
      'Soy sauce',
      'Vegetable oil'
    ],
    instructions: [
      'Cook rice noodles according to package instructions',
      'Heat oil in a wok over medium-high heat',
      'Add garlic and chilies, stir-fry until fragrant',
      'Add tofu and cook until golden',
      'Toss in cooked noodles and sauce',
      'Finish with fresh Thai basil'
    ],
    tags: ['Spicy', 'Asian', 'Quick'],
    dietary: ['Vegetarian', 'Vegan']
  },
  {
    id: '2',
    title: 'Mediterranean Quinoa Bowl',
    description: 'A healthy and colorful bowl packed with Mediterranean flavors, fresh vegetables, and protein-rich quinoa.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000',
    cuisine: 'Mediterranean',
    cookingTime: 35,
    servings: 3,
    difficulty: 'Easy',
    ingredients: [
      '1 cup quinoa',
      'Cherry tomatoes',
      'Cucumber',
      'Kalamata olives',
      'Feta cheese',
      'Extra virgin olive oil',
      'Fresh herbs'
    ],
    instructions: [
      'Cook quinoa in vegetable broth',
      'Chop vegetables into bite-sized pieces',
      'Prepare lemon-herb dressing',
      'Combine all ingredients in a bowl',
      'Top with crumbled feta and herbs'
    ],
    tags: ['Healthy', 'Fresh', 'Bowl'],
    dietary: ['Gluten-Free']
  },
  {
    id: '3',
    title: 'French Creamy Pasta',
    description: 'A rich and indulgent French-style pasta dish made with a creamy sauce, mushrooms, and parmesan.',
    image: 'https://images.unsplash.com/photo-1485962398705-ef6a13c41e8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cuisine: 'French',
    cookingTime: 30,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '250g fettuccine or tagliatelle pasta',
      '200g mushrooms, sliced',
      '1 small onion, finely chopped',
      '2 cloves garlic, minced',
      '1 cup heavy cream',
      '1/2 cup parmesan cheese, grated',
      '1 tablespoon butter',
      'Olive oil',
      'Salt and pepper, to taste',
      'Fresh parsley, chopped'
    ],
    instructions: [
      'Cook pasta in salted boiling water until al dente.',
      'In a large pan, heat olive oil and sauté onions and garlic until fragrant.',
      'Add mushrooms and cook until soft and browned.',
      'Pour in the cream and bring to a simmer.',
      'Stir in parmesan cheese and butter, then season with salt and pepper.',
      'Toss the cooked pasta in the creamy sauce.',
      'Garnish with chopped parsley and serve hot.'
    ],
    tags: ['Creamy', 'French', 'Pasta'],
    dietary: ['Vegetarian']
  },
  {
    id: '4',
    title: 'Paneer Tikka',
    description: 'A popular Indian appetizer, paneer marinated in yogurt and spices, then grilled to perfection.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cuisine: 'Indian',
    cookingTime: 25,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '250g paneer, cut into cubes',
      '1/2 cup yogurt',
      '1 tablespoon ginger-garlic paste',
      '1 teaspoon red chili powder',
      '1 teaspoon garam masala',
      '1 tablespoon lemon juice',
      '1 tablespoon oil',
      'Salt, to taste'
    ],
    instructions: [
      'Mix yogurt, ginger-garlic paste, red chili powder, garam masala, lemon juice, oil, and salt.',
      'Marinate the paneer cubes in the mixture for at least 30 minutes.',
      'Preheat the grill or oven to 180°C (350°F).',
      'Grill the marinated paneer for 10-15 minutes until golden and slightly charred.',
      'Serve hot with mint chutney and salad.'
    ],
    tags: ['Grilled', 'Indian', 'Appetizer'],
    dietary: ['Vegetarian']
  },
  {
    id: '5',
    title: 'Vegetable Biryani',
    description: 'A fragrant and flavorful rice dish made with mixed vegetables, spices, and basmati rice.',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cuisine: 'Indian',
    cookingTime: 60,
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 cup basmati rice',
      '1 cup mixed vegetables (carrots, peas, potatoes)',
      '1 onion, thinly sliced',
      '2 tomatoes, chopped',
      '2 tablespoons biryani masala',
      '1 teaspoon cumin seeds',
      '1/2 teaspoon turmeric powder',
      'Whole spices (bay leaf, cinnamon, cloves)',
      'Fresh coriander leaves',
      'Salt, to taste',
      'Ghee or oil'
    ],
    instructions: [
      'Soak the basmati rice for 30 minutes.',
      'Heat ghee or oil in a pan, sauté onions until golden brown.',
      'Add chopped tomatoes and cook until soft.',
      'Add mixed vegetables, biryani masala, turmeric powder, and whole spices. Cook for 5 minutes.',
      'Add water and salt, bring to a boil, then add soaked rice and cook until rice is done.',
      'Garnish with fresh coriander leaves and serve.'
    ],
    tags: ['Rice', 'Indian', 'Vegetarian'],
    dietary: ['Vegetarian']
  },
  {
    id: '6',
    title: 'Veg Pulao',
    description: 'A fragrant rice dish cooked with mixed vegetables and spices, perfect for lunchboxes or tiffins.',
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cuisine: 'Indian',
    cookingTime: 30,
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 cup basmati rice',
      '1 cup mixed vegetables (carrots, peas, beans)',
      '1 onion, finely chopped',
      '1 tomato, chopped',
      '2 teaspoons garam masala',
      '1/2 teaspoon cumin seeds',
      '1 bay leaf',
      '1 cinnamon stick',
      'Salt, to taste',
      'Ghee or vegetable oil'
    ],
    instructions: [
      'Heat ghee or oil in a pot, add cumin seeds, bay leaf, and cinnamon stick.',
      'Add onions and sauté until golden brown.',
      'Add chopped tomatoes and garam masala. Cook for 2-3 minutes.',
      'Add mixed vegetables and sauté for 5 minutes.',
      'Add water, rice, and salt. Cook until rice is tender and water is absorbed.',
      'Serve hot with yogurt or raita.'
    ],
    tags: ['Rice', 'Vegetarian', 'Tiffin'],
    dietary: ['Vegetarian']
  }
];
// Search Filters Component
class SearchFilters {
  constructor(container, initialFilters, onFilterChange) {
    this.filters = initialFilters;
    this.onFilterChange = onFilterChange;
    this.showFilters = false;

    this.cuisines = ['Italian', 'Japanese', 'Mexican', 'Indian', 'French', 'Thai'];
    this.dietaryOptions = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Dairy-Free'];
    this.times = ['< 30 mins', '30-60 mins', '> 60 mins'];

    this.element = this.createFilters();
    container.appendChild(this.element);
  }

  createFilters() {
    const div = document.createElement('div');
    div.className = 'search-filters';
    div.innerHTML = `
      <div class="search-container">
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          placeholder="Search recipes..."
          class="search-input"
          value="${this.filters.search}"
        />
        <svg class="filter-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="4" y1="21" x2="4" y2="14"></line>
          <line x1="4" y1="10" x2="4" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12" y2="3"></line>
          <line x1="20" y1="21" x2="20" y2="16"></line>
          <line x1="20" y1="12" x2="20" y2="3"></line>
          <line x1="1" y1="14" x2="7" y2="14"></line>
          <line x1="9" y1="8" x2="15" y2="8"></line>
          <line x1="17" y1="16" x2="23" y2="16"></line>
        </svg>
      </div>

      <div class="filter-panel ${this.showFilters ? 'active' : ''}">
        <div class="filter-grid">
          <div class="filter-section">
            <h3>Cuisine</h3>
            ${this.cuisines.map(cuisine => `
              <label class="filter-option">
                <input
                  type="checkbox"
                  value="${cuisine}"
                  ${this.filters.cuisines.includes(cuisine) ? 'checked' : ''}
                />
                <span>${cuisine}</span>
              </label>
            `).join('')}
          </div>

          <div class="filter-section">
            <h3>Dietary Restrictions</h3>
            ${this.dietaryOptions.map(diet => `
              <label class="filter-option">
                <input
                  type="checkbox"
                  value="${diet}"
                  ${this.filters.dietary.includes(diet) ? 'checked' : ''}
                />
                <span>${diet}</span>
              </label>
            `).join('')}
          </div>

          <div class="filter-section">
            <h3>Cooking Time</h3>
            ${this.times.map(time => `
              <label class="filter-option">
                <input
                  type="radio"
                  name="time"
                  value="${time}"
                  ${this.filters.time === time ? 'checked' : ''}
                />
                <span>${time}</span>
              </label>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    this.setupEventListeners(div);
    return div;
  }

  setupEventListeners(element) {
    const searchInput = element.querySelector('.search-input');
    const filterIcon = element.querySelector('.filter-icon');
    const filterPanel = element.querySelector('.filter-panel');
    const cuisineCheckboxes = element.querySelectorAll('.filter-section:nth-child(1) input');
    const dietaryCheckboxes = element.querySelectorAll('.filter-section:nth-child(2) input');
    const timeRadios = element.querySelectorAll('.filter-section:nth-child(3) input');

    searchInput.addEventListener('input', (e) => {
      this.filters.search = e.target.value;
      this.onFilterChange(this.filters);
    });

    filterIcon.addEventListener('click', () => {
      this.showFilters = !this.showFilters;
      filterPanel.classList.toggle('active');
    });

    cuisineCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          this.filters.cuisines.push(checkbox.value);
        } else {
          this.filters.cuisines = this.filters.cuisines.filter(c => c !== checkbox.value);
        }
        this.onFilterChange(this.filters);
      });
    });

    dietaryCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
          this.filters.dietary.push(checkbox.value);
        } else {
          this.filters.dietary = this.filters.dietary.filter(d => d !== checkbox.value);
        }
        this.onFilterChange(this.filters);
      });
    });

    timeRadios.forEach(radio => {
      radio.addEventListener('change', () => {
        this.filters.time = radio.value;
        this.onFilterChange(this.filters);
      });
    });
  }
}

// Recipe Card Component
class RecipeCard {
  constructor(recipe, onClick) {
    this.recipe = recipe;
    this.onClick = onClick;
    this.element = this.createCard();
  }

  createCard() {
    const div = document.createElement('div');
    div.className = 'recipe-card';
    div.innerHTML = `
      <div class="recipe-image">
        <img src="${this.recipe.image}" alt="${this.recipe.title}" />
        <div class="recipe-cuisine">${this.recipe.cuisine}</div>
      </div>
      <div class="recipe-content">
        <h3 class="recipe-title">${this.recipe.title}</h3>
        <p class="recipe-description">${this.recipe.description}</p>
        <div class="recipe-meta">
          <div class="recipe-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            ${this.recipe.cookingTime} min
          </div>
          <div class="recipe-servings">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            ${this.recipe.servings} servings
          </div>
          <div class="recipe-difficulty">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
              <line x1="6" y1="17" x2="18" y2="17"></line>
            </svg>
            ${this.recipe.difficulty}
          </div>
        </div>
        <div class="recipe-tags">
          ${this.recipe.tags.map(tag => `
            <span class="recipe-tag">${tag}</span>
          `).join('')}
        </div>
      </div>
    `;

    div.addEventListener('click', () => this.onClick());
    return div;
  }
}

// Recipe Detail Component
class RecipeDetail {
  constructor(recipe, onClose) {
    this.recipe = recipe;
    this.onClose = onClose;
    this.element = this.createModal();
  }

  createModal() {
    const div = document.createElement('div');
    div.className = 'modal-content';
    div.innerHTML = `
      <div class="modal-image">
        <img src="${this.recipe.image}" alt="${this.recipe.title}" />
        <button class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <div class="modal-body">
        <div class="recipe-badges">
          <span class="recipe-badge badge-cuisine">${this.recipe.cuisine}</span>
          ${this.recipe.dietary.map(diet => `
            <span class="recipe-badge badge-dietary">${diet}</span>
          `).join('')}
        </div>

        <h2 class="recipe-title">${this.recipe.title}</h2>
        <p class="recipe-description">${this.recipe.description}</p>

        <div class="recipe-stats">
          <div class="stat-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div>
              <p class="stat-label">Cooking Time</p>
              <p class="stat-value">${this.recipe.cookingTime} min</p>
            </div>
          </div>
          <div class="stat-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            <div>
              <p class="stat-label">Servings</p>
              <p class="stat-value">${this.recipe.servings}</p>
            </div>
          </div>
          <div class="stat-card">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
              <line x1="6" y1="17" x2="18" y2="17"></line>
            </svg>
            <div>
              <p class="stat-label">Difficulty</p>
              <p class="stat-value">${this.recipe.difficulty}</p>
            </div>
          </div>
        </div>

        <div class="ingredients-section">
          <h3>Ingredients</h3>
          <div class="ingredients-list">
            ${this.recipe.ingredients.map(ingredient => `
              <div class="ingredient-item">
                <span class="ingredient-dot"></span>
                ${ingredient}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="instructions-section">
          <h3>Instructions</h3>
          <ol class="instructions-list">
            ${this.recipe.instructions.map((step, index) => `
              <li class="instruction-item">
                <span class="instruction-number">${index + 1}</span>
                <p>${step}</p>
              </li>
            `).join('')}
          </ol>
        </div>
      </div>
    `;

    const closeButton = div.querySelector('.close-button');
    closeButton.addEventListener('click', () => this.onClose());

    return div;
  }
}

// Main App
class App {
  constructor() {
    this.state = {
      filters: {
        search: '',
        cuisines: [],
        dietary: [],
        time: ''
      },
      selectedRecipe: null
    };

    this.init();
  }

  init() {
    this.searchFilters = new SearchFilters(
      document.getElementById('search-filters'),
      this.state.filters,
      this.handleFilterChange.bind(this)
    );

    this.recipesGrid = document.getElementById('recipes-grid');
    this.modal = document.getElementById('recipe-modal');

    this.render();
  }

  handleFilterChange(filters) {
    this.state.filters = filters;
    this.render();
  }

  handleRecipeClick(recipe) {
    this.state.selectedRecipe = recipe;
    this.renderModal();
  }

  handleCloseModal() {
    this.state.selectedRecipe = null;
    this.modal.classList.add('hidden');
  }

  getFilteredRecipes() {
    return recipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(this.state.filters.search.toLowerCase()) ||
        recipe.description.toLowerCase().includes(this.state.filters.search.toLowerCase());

      const matchesCuisine = this.state.filters.cuisines.length === 0 ||
        this.state.filters.cuisines.includes(recipe.cuisine);

      const matchesDietary = this.state.filters.dietary.length === 0 ||
        this.state.filters.dietary.every(diet => recipe.dietary.includes(diet));

      const matchesTime = !this.state.filters.time ||
        (this.state.filters.time === '< 30 mins' && recipe.cookingTime < 30) ||
        (this.state.filters.time === '30-60 mins' && recipe.cookingTime >= 30 && recipe.cookingTime <= 60) ||
        (this.state.filters.time === '> 60 mins' && recipe.cookingTime > 60);

      return matchesSearch && matchesCuisine && matchesDietary && matchesTime;
    });
  }

  render() {
    const filteredRecipes = this.getFilteredRecipes();
    
    this.recipesGrid.innerHTML = '';

    if (filteredRecipes.length === 0) {
      this.recipesGrid.innerHTML = `
        <div class="text-center py-12">
          <p class="text-gray-500 text-lg">No recipes found matching your criteria.</p>
        </div>
      `;
      return;
    }

    filteredRecipes.forEach(recipe => {
      const recipeCard = new RecipeCard(recipe, () => this.handleRecipeClick(recipe));
      this.recipesGrid.appendChild(recipeCard.element);
    });
  }

  renderModal() {
    if (!this.state.selectedRecipe) {
      this.modal.classList.add('hidden');
      return;
    }

    const recipeDetail = new RecipeDetail(
      this.state.selectedRecipe,
      () => this.handleCloseModal()
    );

    this.modal.innerHTML = '';
    this.modal.appendChild(recipeDetail.element);
    this.modal.classList.remove('hidden');
  }
}

// Initialize the app
new App();