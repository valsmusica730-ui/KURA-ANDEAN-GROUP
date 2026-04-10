function navigateTo(pageId) {
    const activePage = document.querySelector('.page-view.active');

    if (activePage) {
        activePage.style.opacity = '0';
        activePage.style.transform = 'translateY(10px)';
    }

    const navItems = document.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.id === 'nav-' + pageId) {
            item.classList.add('active');
        }
    });

    setTimeout(() => {
        const pages = document.querySelectorAll('.page-view');
        pages.forEach(page => page.classList.remove('active'));

        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
            targetPage.style.opacity = '1';
            targetPage.style.transform = 'translateY(0)';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (pageId === 'products-main') {
            backToCategories();
        }
    }, 400);
}

function showCategory(catId) {
    document.getElementById('category-selector').style.display = 'none';
    document.getElementById('sub-products-container').classList.remove('hidden');

    const views = document.querySelectorAll('.category-view');
    views.forEach(v => v.classList.remove('active'));

    const targetView = document.getElementById(catId);
    if (targetView) {
        targetView.classList.add('active');
    }

    window.scrollTo({ top: 150, behavior: 'smooth' });
}

function backToCategories() {
    const selector = document.getElementById('category-selector');
    const container = document.getElementById('sub-products-container');

    if (selector && container) {
        selector.style.display = 'block';
        container.classList.add('hidden');
    }
}

function selectItem(element) {
    element.classList.toggle('selected');

    const btn = element.querySelector('.btn-select');
    if (btn) {
        if (element.classList.contains('selected')) {
            btn.innerText = 'Seleccionado ✓';
        } else {
            btn.innerText = 'Añadir +';
        }
    }
}

window.addEventListener('load', () => {
    const home = document.getElementById('home');
    if (home) {
        home.style.opacity = '1';
        home.style.transform = 'translateY(0)';
    }
});
