// === Темна/Світла тема ===

// Знаходимо кнопку та body
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Отримуємо збережену тему з localStorage
const savedTheme = localStorage.getItem('theme');

// Функція для застосування теми
function applyTheme(theme) {
  const isDark = theme === 'dark';
  body.classList.toggle('dark', isDark); // додає або прибирає клас dark
  themeToggleBtn.textContent = isDark ? '☀️' : '🌙'; // змінює іконку
}

// Застосовуємо тему при завантаженні сторінки
applyTheme(savedTheme || 'light');

// Обробка кліку на кнопку перемикання теми
themeToggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark');
  const newTheme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  applyTheme(newTheme);
});


// === Модальне вікно (форма заявки) ===

// Відкриття модального вікна
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

// Закриття модального вікна
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Клік за межами контенту модалки — закриває її
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) closeModal();
});


// === Повідомлення про відправку ===

// Показує коротке повідомлення внизу екрану
function showNotification(message) {
  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.innerText = message;
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove(); // автоматичне зникнення
  }, 3000);
}

// Клік на кнопку "Відправити" в модалці
document.querySelector('.modal-content button').addEventListener('click', () => {
  const name = document.querySelector('.modal-content input[type="text"]').value.trim();
  const phone = document.querySelector('.modal-content input[type="tel"]').value.trim();
  const message = document.querySelector('.modal-content textarea').value.trim();

  // Перевірка імені
  if (name.length < 2) {
    showNotification("Ім'я повинно містити мінімум 2 символи");
    return;
  }

  // Перевірка для українських номерів
  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    showNotification("Введіть номер телефону у форматі +380XXXXXXXXX");
    return;
  }

 
  closeModal();
  showNotification("Заявка успішно відправлена");
});




// === Плавна прокрутка по навігації ===

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); 
    const targetId = link.getAttribute('href').slice(1); 
    const target = document.getElementById(targetId); 
    if (!target) return;

    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    // Плавний скрол до блоку
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});