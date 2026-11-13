// Данные услуг сервисного центра
const CATEGORIES = {
  diagnostics: 'Диагностика',
  repair: 'Ремонт',
  cleaning: 'Чистка',
  upgrade: 'Модернизация'
};

const BADGES = {
  popular: { label: 'Популярное', mod: 'badge-tag--popular' },
  discount: { label: 'Скидка', mod: 'badge-tag--discount' },
  fast: { label: 'Быстрое обслуживание', mod: 'badge-tag--fast' }
};

const SERVICES = [
  {
    id: 1,
    category: 'diagnostics',
    icon: 'bi-search',
    name: 'Диагностика компьютера',
    price: 500,
    days: 'от 1 дня',
    badge: 'popular',
    short: 'Полная проверка железа и системы, выявление причины неисправности. Бесплатно при заказе ремонта.',
    long: 'Мастер проводит аппаратную и программную диагностику: проверка комплектующих, температур, состояния накопителей, автозагрузки и системы в целом. По результатам вы получаете отчёт с причиной неисправности и рекомендациями по ремонту. Стоимость диагностики вычитается из стоимости ремонта, если вы заказываете его у нас.',
    includes: ['Аппаратная проверка комплектующих', 'Тест накопителей и памяти', 'Проверка систем охлаждения', 'Отчёт с рекомендациями']
  },
  {
    id: 2,
    category: 'repair',
    icon: 'bi-motherboard',
    name: 'Замена материнской платы',
    price: 4500,
    days: '2-3 дня',
    badge: null,
    short: 'Подбор и установка новой материнской платы с переносом данных и настройкой системы.',
    long: 'Подбираем совместимую материнскую плату под ваш процессор и корпус, устанавливаем её, подключаем все комплектующие и проверяем стабильность работы под нагрузкой. При необходимости переносим систему на новый контроллер без потери данных.',
    includes: ['Подбор совместимой платы', 'Установка и подключение', 'Проверка под нагрузкой', 'Гарантия на работы 6 месяцев']
  },
  {
    id: 3,
    category: 'cleaning',
    icon: 'bi-fan',
    name: 'Чистка от пыли и замена термопасты',
    price: 1500,
    oldPrice: 1800,
    days: '1 день',
    badge: 'popular',
    short: 'Разборка, полная очистка от пыли, замена термопасты и проверка температур.',
    long: 'Ноутбук или ПК разбирается, система охлаждения очищается от пыли, процессор и видеокарта получают свежую термопасту. После сборки замеряем температуры под нагрузкой и при необходимости настраиваем кривую вентиляторов.',
    includes: ['Разборка и очистка', 'Замена термопасты', 'Замер температур', 'Настройка вентиляторов']
  },
  {
    id: 4,
    category: 'repair',
    icon: 'bi-shield-x',
    name: 'Удаление вирусов',
    price: 1200,
    days: 'от 1 дня',
    badge: 'fast',
    short: 'Поиск и удаление вредоносного ПО, восстановление работы системы и настройка защиты.',
    long: 'Проводим полное сканирование системы несколькими утилитами, удаляем вредоносное ПО и рекламные баннеры, восстанавливаем работу браузера и системных служб, устанавливаем антивирус и даём рекомендации по безопасной работе.',
    includes: ['Полное сканирование', 'Удаление вредоносного ПО', 'Восстановление браузера', 'Установка антивируса']
  },
  {
    id: 5,
    category: 'repair',
    icon: 'bi-plug',
    name: 'Ремонт разъёма питания',
    price: 2000,
    days: '1-2 дня',
    badge: null,
    short: 'Замена или пайка разъёма питания ноутбука, если устройство не заряжается.',
    long: 'Диагностируем цепи питания, при необходимости меняем штатный разъём на новый, проверяем зарядку аккумулятора и стабильность питания под нагрузкой. Чистим плату от следов перегрева и окисления.',
    includes: ['Диагностика цепей питания', 'Замена разъёма', 'Проверка зарядки', 'Гарантия на работы 3 месяца']
  },
  {
    id: 6,
    category: 'repair',
    icon: 'bi-display',
    name: 'Замена экрана ноутбука',
    price: 3500,
    days: '1-2 дня',
    badge: 'popular',
    short: 'Замена разбитой матрицы на новую с проверкой подсветки и сенсора.',
    long: 'Подбираем совместимую матрицу по модели ноутбука, меняем её, проверяем подсветку, тачскрин (если есть) и петли корпуса. Работаем только с проверенными запчастями.',
    includes: ['Подбор матрицы по модели', 'Замена экрана', 'Проверка подсветки и сенсора', 'Гарантия на экран 6 месяцев']
  },
  {
    id: 7,
    category: 'repair',
    icon: 'bi-hdd',
    name: 'Восстановление данных',
    price: 2500,
    days: '1-3 дня',
    badge: null,
    short: 'Восстановление файлов с жёстких дисков, SSD и флешек после сбоя или удаления.',
    long: 'Снимаем посекторную копию накопителя, восстанавливаем документы, фото и другие файлы с помощью профессиональных утилит. Согласовываем с вами список важных данных до начала работ. Оплата только при результате.',
    includes: ['Посекторная копия', 'Восстановление файлов', 'Согласованный список данных', 'Оплата при результате']
  },
  {
    id: 8,
    category: 'cleaning',
    icon: 'bi-speedometer2',
    name: 'Программная чистка и оптимизация',
    price: 1000,
    days: '1 день',
    badge: 'fast',
    short: 'Очистка системы от мусора, ускорение загрузки и настройка автозапуска.',
    long: 'Удаляем временные файлы и остатки программ, отключаем лишний автозапуск, обновляем драйверы и систему, проверяем диск на ошибки. После оптимизации компьютер загружается и работает заметно быстрее.',
    includes: ['Очистка временных файлов', 'Настройка автозапуска', 'Обновление драйверов', 'Рекомендации по ускорению']
  },
  {
    id: 9,
    category: 'upgrade',
    icon: 'bi-device-ssd',
    name: 'Установка SSD-накопителя',
    price: 1800,
    days: '1 день',
    badge: 'fast',
    short: 'Установка SSD и перенос системы без переустановки. Компьютер начинает работать в разы быстрее.',
    long: 'Подбираем совместимый SSD, устанавливаем его, переносим вашу систему и данные без переустановки Windows и программ. Старый диск оставляем как второй или подключаем внешне для сохранности данных.',
    includes: ['Подбор SSD', 'Установка накопителя', 'Перенос системы и данных', 'Проверка скорости']
  },
  {
    id: 10,
    category: 'upgrade',
    icon: 'bi-memory',
    name: 'Увеличение оперативной памяти',
    price: 1200,
    days: '1 день',
    badge: null,
    short: 'Подбор и установка модулей ОЗУ, проверка совместимости и стабильности.',
    long: 'Проверяем, какую память поддерживает ваша платформа, подбираем модули по частоте и объёму, устанавливаем и тестируем стабильность под нагрузкой. При необходимости выносим старые модули в зачёт.',
    includes: ['Проверка совместимости', 'Установка модулей', 'Тест памяти', 'Совет по дальнейшему апгрейду']
  },
  {
    id: 11,
    category: 'upgrade',
    icon: 'bi-pc-display',
    name: 'Сборка ПК под заказ',
    price: 2500,
    oldPrice: 3000,
    days: '2-4 дня',
    badge: 'discount',
    short: 'Подбор комплектующих под бюджет и задачи, сборка, настройка и стресс-тест.',
    long: 'Обсуждаем бюджет и задачи (игры, работа, монтаж), составляем конфигурацию, собираем компьютер с аккуратной укладкой кабелей, устанавливаем систему и драйверы, проводим стресс-тесты стабильности.',
    includes: ['Подбор конфигурации', 'Сборка и укладка кабелей', 'Установка системы', 'Стресс-тесты']
  },
  {
    id: 12,
    category: 'diagnostics',
    icon: 'bi-clipboard-check',
    name: 'Диагностика ноутбука',
    price: 600,
    days: 'от 1 дня',
    badge: null,
    short: 'Выявление неисправностей ноутбука: перегрев, шум, медленная работа, проблемы с зарядкой.',
    long: 'Проверяем матрицу, клавиатуру, аккумулятор, систему охлаждения и разъёмы ноутбука. Находим причину поломки и называем точную стоимость ремонта до начала работ. Диагностика бесплатна при заказе ремонта.',
    includes: ['Проверка аккумулятора', 'Тест клавиатуры и портов', 'Проверка охлаждения', 'Смета ремонта']
  }
];

const getCategoryName = (key) => CATEGORIES[key] || '';

const getService = (id) => SERVICES.find((service) => service.id === Number(id)) || SERVICES[0];

// Рендер карточек услуг
function renderBadge(service) {
  if (!service.badge) return '';
  const badge = BADGES[service.badge];
  return '<span class="badge-tag ' + badge.mod + '">' + badge.label + '</span>';
}

function renderCard(service) {
  const oldPrice = service.oldPrice
    ? '<span class="service-card__old-price">' + service.oldPrice + ' ₽</span>'
    : '';
  return (
    '<article class="service-card" ' +
    'data-category="' + service.category + '" data-price="' + service.price + '" data-service-id="' + service.id + '">' +
    '<div class="service-card__header">' +
    '<i class="bi ' + service.icon + ' service-card__icon" aria-hidden="true"></i>' +
    renderBadge(service) +
    '</div>' +
    '<h3 class="service-card__title">' +
    '<a class="service-card__link" href="service.html?id=' + service.id + '">' + service.name + '</a>' +
    '</h3>' +
    '<p class="service-card__description">' + service.short + '</p>' +
    '<div class="service-card__meta">' +
    '<span class="service-card__price">' + service.price + ' ₽' + oldPrice + '</span>' +
    '<span class="service-card__duration">Срок: ' + service.days + '</span>' +
    '</div>' +
    '<div class="service-card__actions">' +
    '<button class="btn btn-primary service-card__button" type="button" data-service="' + service.id + '">Подробнее</button>' +
    '</div>' +
    '</article>'
  );
}

function renderCards(grid, list) {
  if (!grid) return;
  grid.innerHTML = list.map(renderCard).join('');
}

const catalogGrid = document.getElementById('services-grid');
if (catalogGrid) renderCards(catalogGrid, SERVICES);

const popularGrid = document.getElementById('popular-grid');
if (popularGrid) renderCards(popularGrid, SERVICES.filter((service) => service.badge === 'popular').slice(0, 3));

// Фильтры каталога
const filtersForm = document.getElementById('filters-form');
const filtersResult = document.getElementById('filters-result');
const PRICE_FILTERS = {
  any: () => true,
  p1: (price) => price < 1000,
  p2: (price) => price >= 1000 && price <= 2000,
  p3: (price) => price > 2000
};

if (filtersForm && catalogGrid) {
  const applyFilters = () => {
    const categories = Array.from(filtersForm.querySelectorAll('input[name="category"]:checked'))
      .map((input) => input.value);
    const priceFilter = filtersForm.querySelector('input[name="price"]:checked');
    const priceFn = PRICE_FILTERS[priceFilter ? priceFilter.value : 'any'];
    let visibleCount = 0;

    Array.from(catalogGrid.children).forEach((card) => {
      const categoryOk = categories.length === 0 || categories.includes(card.dataset.category);
      const priceOk = priceFn(Number(card.dataset.price));
      const visible = categoryOk && priceOk;
      card.classList.toggle('service-card--hidden', !visible);
      if (visible) visibleCount += 1;
    });

    if (filtersResult) {
      filtersResult.textContent = 'Показано услуг: ' + visibleCount + ' из ' + SERVICES.length;
    }
  };

  filtersForm.addEventListener('change', applyFilters);
  const resetButton = filtersForm.querySelector('[type="reset"]');
  if (resetButton) {
    resetButton.addEventListener('click', () => {
      window.setTimeout(applyFilters, 0);
    });
  }
  applyFilters();
}

// Модальное окно услуги
const serviceModal = document.getElementById('service-modal');

function openServiceModal(id) {
  if (!serviceModal) return;
  const service = getService(id);
  document.getElementById('service-modal-title').textContent = service.name;
  document.getElementById('service-modal-category').textContent = getCategoryName(service.category);
  document.getElementById('service-modal-description').textContent = service.short;
  document.getElementById('service-modal-price').textContent = service.price + ' ₽' + (service.oldPrice ? ' (без скидки ' + service.oldPrice + ' ₽)' : '');
  document.getElementById('service-modal-days').textContent = service.days;
  document.getElementById('service-modal-link').setAttribute('href', 'service.html?id=' + service.id);
  const bootstrapModal = window.bootstrap.Modal.getOrCreateInstance(serviceModal);
  bootstrapModal.show();
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('[data-service]');
  if (button) openServiceModal(button.dataset.service);
});

// Страница услуги
const servicePage = document.getElementById('service-page');

function renderServicePage(service) {
  document.title = service.name + ' - КомпМастер';
  document.getElementById('service-title').textContent = service.name;
  document.getElementById('service-breadcrumb').textContent = service.name;
  document.getElementById('service-badge').innerHTML = '';
  document.getElementById('service-price').textContent = service.price + ' ₽';
  const oldPrice = document.getElementById('service-old-price');
  if (oldPrice) {
    oldPrice.textContent = service.oldPrice ? service.oldPrice + ' ₽' : '';
  }
  document.getElementById('service-days').textContent = service.days;
  document.getElementById('service-category').textContent = getCategoryName(service.category);
  document.getElementById('service-description').textContent = service.long;
  document.getElementById('service-includes').innerHTML = service.includes
    .map((item) => '<li class="service-page__list-item">' + item + '</li>')
    .join('');
  const select = document.getElementById('request-service');
  if (select) select.value = service.name;
}

if (servicePage) {
  const requestedId = new URLSearchParams(window.location.search).get('id');
  renderServicePage(getService(requestedId));

  // Смена услуги в форме обновляет информацию на странице
  const serviceSelect = document.getElementById('request-service');
  if (serviceSelect) {
    serviceSelect.addEventListener('change', () => {
      const selected = SERVICES.find((service) => service.name === serviceSelect.value);
      if (selected) {
        window.history.replaceState(null, '', 'service.html?id=' + selected.id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderServicePage(selected);
      }
    });
  }
}

// Выпадающий список услуг в форме
const requestServiceSelect = document.getElementById('request-service');
if (requestServiceSelect && !servicePage) {
  requestServiceSelect.innerHTML = SERVICES
    .map((service) => '<option value="' + service.name + '">' + service.name + '</option>')
    .join('');
}

// Проверка форм
document.querySelectorAll('form[data-validate]').forEach((form) => {
  const successMessage = form.querySelector('.form-message--success');
  const errorMessage = form.querySelector('.form-message--error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = Array.from(form.elements);

    elements.forEach((element) => {
      if (element.willValidate) element.removeAttribute('aria-invalid');
    });

    if (!form.checkValidity()) {
      elements.forEach((element) => {
        if (element.willValidate && !element.checkValidity()) {
          element.setAttribute('aria-invalid', 'true');
        }
      });
      form.reportValidity();
      if (errorMessage) errorMessage.hidden = false;
      if (successMessage) successMessage.hidden = true;
      return;
    }

    if (errorMessage) errorMessage.hidden = true;
    form.reset();
    if (successMessage) {
      successMessage.hidden = false;
      successMessage.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
});

// Кнопка «Наверх»
const scrollTopButton = document.getElementById('scroll-top');

if (scrollTopButton) {
  window.addEventListener('scroll', () => {
    scrollTopButton.classList.toggle('scroll-top--visible', window.scrollY > 500);
  });
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Год в подвале
const yearElement = document.getElementById('footer-year');
if (yearElement) yearElement.textContent = String(new Date().getFullYear());

// Liquid Glass: плавное появление секций при прокрутке
const revealSections = document.querySelectorAll('main section');
if (revealSections.length && 'IntersectionObserver' in window) {
  revealSections.forEach((section) => section.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  revealSections.forEach((section) => revealObserver.observe(section));
}

// Галерея на «О нас»: карусель по кругу (зациклена, авто-прокрутка)
const galleryTrack = document.getElementById('gallery-track');
if (galleryTrack) {
  const slides = Array.from(galleryTrack.children);
  const prevButton = document.getElementById('gallery-prev');
  const nextButton = document.getElementById('gallery-next');
  const dotsBox = document.getElementById('gallery-dots');
  let galleryIndex = 0;
  let galleryTimer = null;

  slides.forEach((slide, slideNumber) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'gallery-dots__item' + (slideNumber === 0 ? ' gallery-dots__item--active' : '');
    dot.setAttribute('aria-label', 'Фото ' + (slideNumber + 1));
    dot.addEventListener('click', () => {
      showGallerySlide(slideNumber);
      restartGallery();
    });
    dotsBox.appendChild(dot);
  });

  const dots = Array.from(dotsBox.children);

  function showGallerySlide(number) {
    galleryIndex = (number + slides.length) % slides.length;
    galleryTrack.style.transform = 'translateX(-' + galleryIndex * 100 + '%)';
    dots.forEach((dot, dotNumber) => {
      dot.classList.toggle('gallery-dots__item--active', dotNumber === galleryIndex);
    });
  }

  function restartGallery() {
    window.clearInterval(galleryTimer);
    galleryTimer = window.setInterval(() => showGallerySlide(galleryIndex + 1), 5000);
  }

  prevButton.addEventListener('click', () => {
    showGallerySlide(galleryIndex - 1);
    restartGallery();
  });
  nextButton.addEventListener('click', () => {
    showGallerySlide(galleryIndex + 1);
    restartGallery();
  });

  restartGallery();
}

// ЭКСПЕРИМЕНТ: полоса прогресса чтения
const readingProgress = document.getElementById('reading-progress');
if (readingProgress) {
  const updateReadingProgress = () => {
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = pageHeight > 0 ? Math.min(100, (window.scrollY / pageHeight) * 100) : 0;
    readingProgress.style.width = percent + '%';
  };
  window.addEventListener('scroll', updateReadingProgress, { passive: true });
  updateReadingProgress();
}

// ЭКСПЕРИМЕНТ: светлую и тёмную тему с запоминанием выбора
const themeToggleButton = document.getElementById('theme-toggle');
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'dark');

function updateThemeIcon() {
  if (!themeToggleButton) return;
  const icon = themeToggleButton.querySelector('i');
  if (icon) {
    icon.className = document.documentElement.getAttribute('data-theme') === 'light'
      ? 'bi bi-moon-fill'
      : 'bi bi-sun-fill';
  }
}
updateThemeIcon();

if (themeToggleButton) {
  themeToggleButton.addEventListener('click', () => {
    const nextTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
    updateThemeIcon();
  });
}

// ЭКСПЕРИМЕНТ: кастомный курсор (точка + кольцо)
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
  document.body.classList.add('custom-cursor');
  window.addEventListener('mousemove', (event) => {
    cursorDot.style.transform = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px)';
    cursorRing.style.transform = 'translate(' + (event.clientX - 18) + 'px, ' + (event.clientY - 18) + 'px)';
  });
  document.addEventListener('mouseover', (event) => {
    const interactive = event.target.closest('a, button, input, select, textarea, .service-card');
    cursorRing.classList.toggle('cursor-ring--active', Boolean(interactive));
  });
}

// ЭКСПЕРИМЕНТ: поиск по сайту (услуги + страницы)
const searchOverlay = document.getElementById('search-overlay');
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');
const SEARCH_PAGES = [
  { title: 'Главная', text: 'Баннер, преимущества, популярные услуги, этапы работы, статистика', url: 'index.html' },
  { title: 'Каталог услуг', text: 'Все услуги сервисного центра с фильтрами', url: 'catalog.html' },
  { title: 'Запись на ремонт', text: 'Форма заявки: имя, телефон, услуга, устройство', url: 'service.html' },
  { title: 'Отзывы', text: 'Отзывы клиентов и форма «Оставить отзыв»', url: 'reviews.html' },
  { title: 'О нас', text: 'О сервисном центре, принципы и галерея', url: 'about.html' },
  { title: 'Контакты', text: 'Адрес, карта, обратная связь, вопрос-ответ', url: 'contacts.html' }
];

function renderSearchResults(query) {
  if (!searchResults) return;
  const q = query.trim().toLowerCase();
  if (!q) {
    searchResults.innerHTML = '<p class="search-result__empty">Начните вводить: например, «диагностика», «ssd», «контакты»</p>';
    return;
  }
  const foundServices = SERVICES.filter((service) =>
    service.name.toLowerCase().includes(q) ||
    service.short.toLowerCase().includes(q) ||
    getCategoryName(service.category).toLowerCase().includes(q)
  ).map((service) => ({
    title: service.name,
    text: getCategoryName(service.category) + ' · ' + service.price + ' руб · ' + service.short,
    url: 'service.html?id=' + service.id
  }));
  const foundPages = SEARCH_PAGES.filter((page) =>
    page.title.toLowerCase().includes(q) || page.text.toLowerCase().includes(q)
  );
  const results = foundServices.concat(foundPages);
  if (results.length === 0) {
    searchResults.innerHTML = '<p class="search-result__empty">Ничего не найдено. Попробуйте другой запрос.</p>';
    return;
  }
  searchResults.innerHTML = results.map((result) =>
    '<a class="search-result" href="' + result.url + '">' +
    '<p class="search-result__title">' + result.title + '</p>' +
    '<p class="search-result__text">' + result.text + '</p>' +
    '</a>'
  ).join('');
}

function openSearchOverlay() {
  if (!searchOverlay) return;
  searchOverlay.classList.add('search-overlay--open');
  searchOverlay.setAttribute('aria-hidden', 'false');
  renderSearchResults(searchInput ? searchInput.value : '');
  if (searchInput) searchInput.focus();
}

function closeSearchOverlay() {
  if (!searchOverlay) return;
  searchOverlay.classList.remove('search-overlay--open');
  searchOverlay.setAttribute('aria-hidden', 'true');
}

const searchOpenButton = document.getElementById('search-open');
const searchCloseButton = document.getElementById('search-close');
const searchBackdrop = document.getElementById('search-backdrop');

if (searchOpenButton) searchOpenButton.addEventListener('click', openSearchOverlay);
if (searchCloseButton) searchCloseButton.addEventListener('click', closeSearchOverlay);
if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearchOverlay);
if (searchInput) searchInput.addEventListener('input', () => renderSearchResults(searchInput.value));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeSearchOverlay();
  if (event.ctrlKey && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearchOverlay();
  }
});

// ЭКСПЕРИМЕНТ: reveal-анимации карточек с каскадом
const revealCards = document.querySelectorAll('.service-card, .review-card, .advantage-card, .contact-list__item');
if (revealCards.length && 'IntersectionObserver' in window) {
  revealCards.forEach((card) => card.classList.add('reveal-card'));
  const cardObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = Array.prototype.indexOf.call(entry.target.parentNode.children, entry.target) % 4 * 70;
        entry.target.style.transitionDelay = delay + 'ms';
        entry.target.classList.add('reveal-card--visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  revealCards.forEach((card) => cardObserver.observe(card));
}

// ЭКСПЕРИМЕНТ: плавный переход между страницами
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  document.body.classList.add('page-enter');
}
document.addEventListener('click', (event) => {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('a[href]');
  if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin) return;
  if (url.pathname === window.location.pathname) return;
  if (prefersReducedMotion) return;
  event.preventDefault();
  document.body.classList.add('page-exit');
  window.setTimeout(() => { window.location.href = link.href; }, 180);
});

// ЭКСПЕРИМЕНТ: волна при клике (в стиле курсора, инверсия)
if (!prefersReducedMotion) {
  document.addEventListener('pointerdown', (event) => {
    const ripple = document.createElement('span');
    ripple.className = 'click-ripple';
    ripple.style.left = event.clientX + 'px';
    ripple.style.top = event.clientY + 'px';
    document.body.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
}
