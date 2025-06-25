
// Открытие формы
function openModal() {
  document.getElementById("modal").style.display = "flex";
}

// Закрытие формы
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Клик вне модального окна
document.getElementById("modal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeModal();
  }
});
// Показ уведомления
function showNotification(message) {
  const notif = document.createElement('div');
  notif.className = 'notification';
  notif.innerText = message;
  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

// Кнопка отправки — перехват клика
document.querySelector('.modal-content button').addEventListener('click', () => {
  closeModal();
  showNotification("Заявка успішно відправлена");
});
// Плавный скролл для навигационных ссылок
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (!target) return;
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  });
});
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Проверяем, есть ли сохранённая тема в localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeToggleBtn.textContent = '☀️';
} else {
  themeToggleBtn.textContent = '🌙';
}

// Обработчик клика по кнопке переключения темы
themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    themeToggleBtn.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleBtn.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  }
});
