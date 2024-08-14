const menuContainer = document.getElementById('menu-items');

const categories = [
  { year: 'B1 2022 2023', id: 'B1' },
  { year: 'B2 2023 2024', id: 'B2' },
  { year: 'STAGE', id: 'Stage' }
];

// Fonction pour générer un article HTML
function createArticle(article) {
    return `
    <article class="style${Math.floor(Math.random() * 6) + 1}">
        <span class="image">
        <img src="${article.image}" alt="" />
        </span>
        <a href="${article.link}">
        <h2>${article.title}</h2>
        <div class="content">
            <p>${article.description}</p>
        </div>
        </a>
    </article>
    `;
}

// Fonction pour trier les articles par catégorie (B1, B2, STAGE)
function displayArticles() {
    const b1Container = document.getElementById('b1-projects');
    const b2Container = document.getElementById('b2-projects');
    const stageContainer = document.getElementById('stage-projects');

    articles.forEach(article => {
        if (article.category === 'B2') {
            b2Container.innerHTML += createArticle(article);
        } else if (article.category === 'Stage') {
            stageContainer.innerHTML += createArticle(article);
        } else if (article.category === 'B1') {
            b1Container.innerHTML += createArticle(article);
        }
    });
}

function generateMenu() {
  categories.forEach(category => {
    // Crée un élément de menu pour la catégorie
    const categoryItem = document.createElement('li');
    categoryItem.className = 'years';
    categoryItem.textContent = category.year;
    menuContainer.appendChild(categoryItem);

    // Filtre les articles par catégorie et les ajoute sous la bonne section
    articles
      .filter(article => article.category === category.id)
      .forEach(article => {
        const menuItem = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.href = article.link;
        menuLink.textContent = article.title;

        menuItem.appendChild(menuLink);
        menuContainer.appendChild(menuItem);
      });
  });
}

// Appelle les fonctions pour générer le menu et afficher les articles
generateMenu();
displayArticles();
