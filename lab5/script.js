document.addEventListener('DOMContentLoaded', () => {
    // Елементи DOM
    const mainContent = document.getElementById('main-content');
    const catalogLink = document.getElementById('nav-catalog');

    // Шлях до папки з даними
    const DATA_PATH = './dataJSON/';

    // Слухач події на кнопку "Catalog"
    catalogLink.addEventListener('click', (e) => {
        e.preventDefault(); 
        loadCatalog();
    });

    /**
     * Функція завантаження каталогу категорій
     */
    async function loadCatalog() {
        try {
            const response = await fetch(`${DATA_PATH}categories.json`);
            if (!response.ok) throw new Error('Помилка завантаження категорій');
            
            const categories = await response.json();
            renderCategories(categories);
        } catch (error) {
            mainContent.innerHTML = `<div class="alert alert-danger">Не вдалося завантажити каталог. Переконайтеся, що ви використовуєте локальний сервер. <br>Деталі: ${error.message}</div>`;
        }
    }

    /**
     * Рендеринг списку категорій на сторінці
     */
    function renderCategories(categories) {
        let html = '<h2 class="mb-4 text-center">Каталог товарів</h2>';
        html += '<div class="row g-4">';

        categories.forEach(cat => {
            html += `
                <div class="col-md-4">
                    <div class="card h-100 shadow-sm text-center p-3 cursor-pointer category-card" data-shortname="${cat.shortname}">
                        <div class="card-body">
                            <h3 class="card-title">${cat.name}</h3>
                            <p class="text-muted small">${cat.shortname}</p>
                            <p class="card-text">${cat.notes || 'Опис відсутній'}</p>
                            <button class="btn btn-outline-primary mt-2">Переглянути</button>
                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        
        // Кнопка Specials
        html += `
            <div class="text-center mt-5">
                <hr>
                <button id="btn-specials" class="btn btn-warning btn-lg px-5 fw-bold"> Specials (Випадкова категорія)</button>
            </div>
        `;

        mainContent.innerHTML = html;

        // Додаємо обробники подій для карток категорій
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', () => {
                const shortname = card.getAttribute('data-shortname');
                loadCategoryItems(shortname);
            });
        });

        // Обробник для кнопки Specials
        document.getElementById('btn-specials').addEventListener('click', () => {
            loadRandomCategory(categories);
        });
    }

    /**
     * Функція завантаження товарів конкретної категорії
     */
    async function loadCategoryItems(shortname) {
        try {
            // Завантаження файлу, наприклад data/laptops.json
            const response = await fetch(`${DATA_PATH}${shortname}.json`);
            if (!response.ok) throw new Error(`Не знайдено файл ${shortname}.json`);
            
            const data = await response.json();
            renderItems(data);
        } catch (error) {
            mainContent.innerHTML = `<div class="alert alert-danger">Помилка: ${error.message}</div>`;
        }
    }

    /**
     * Рендеринг товарів
     */
    function renderItems(data) {
        // Заголовок категорії з JSON
        let html = `
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h2 class="text-primary">${data.categoryName}</h2>
                <button class="btn btn-secondary btn-sm" onclick="document.getElementById('nav-catalog').click()">← Назад до каталогу</button>
            </div>
        `;
        
        html += '<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">';

        data.items.forEach(item => {
            // Генерація картинки-заглушки

            const imgSrc = `https://placehold.co/200x200?text=${encodeURIComponent(item.name)}`;

            html += `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="${imgSrc}" class="card-img-top img-placeholder" alt="${item.name}">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${item.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted small">${item.shortname}</h6>
                            <p class="card-text flex-grow-1">${item.description}</p>
                            <div class="mt-3">
                                <span class="badge bg-success fs-6">${item.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        html += '</div>';
        mainContent.innerHTML = html;
    }

    /**
     * Логіка Specials: Вибір випадкової категорії
     */
    function loadRandomCategory(categories) {
        if (!categories || categories.length === 0) return;

        const randomIndex = Math.floor(Math.random() * categories.length);
        const randomCategory = categories[randomIndex];

        // Завантажуємо вибрану категорію
        loadCategoryItems(randomCategory.shortname);
    }
});
