const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');

function renderIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function preferredTheme() {
  if (root.dataset.theme) return root.dataset.theme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateThemeButton(theme) {
  if (!themeToggle) return;
  themeToggle.innerHTML = `<i data-lucide="${theme === 'dark' ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
  themeToggle.setAttribute('aria-label', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
  themeToggle.setAttribute('title', theme === 'dark' ? '切换到浅色模式' : '切换到深色模式');
  renderIcons();
}

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
  updateThemeButton(theme);
}

function closeMenu() {
  if (!mobileNav || !menuToggle) return;
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', '打开导航');
  menuToggle.setAttribute('title', '打开导航');
  menuToggle.innerHTML = '<i data-lucide="menu" aria-hidden="true"></i>';
  document.body.classList.remove('menu-open');
  renderIcons();
}

themeToggle?.addEventListener('click', () => {
  setTheme(preferredTheme() === 'dark' ? 'light' : 'dark');
});

menuToggle?.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? '关闭导航' : '打开导航');
  menuToggle.setAttribute('title', isOpen ? '关闭导航' : '打开导航');
  menuToggle.innerHTML = `<i data-lucide="${isOpen ? 'x' : 'menu'}" aria-hidden="true"></i>`;
  document.body.classList.toggle('menu-open', isOpen);
  renderIcons();
});

mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMenu();
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12 },
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

window.addEventListener('load', () => {
  updateThemeButton(preferredTheme());
  renderIcons();
});
