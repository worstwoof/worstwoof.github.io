const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');

function renderIcons() {
  if (window.lucide) window.lucide.createIcons();
}

function currentTheme() {
  return root.dataset.theme === 'dark' ? 'dark' : 'light';
}

function updateThemeButton(theme) {
  if (!themeToggle) return;
  const isDark = theme === 'dark';
  themeToggle.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}" aria-hidden="true"></i>`;
  themeToggle.setAttribute('aria-label', isDark ? '切换到浅色模式' : '切换到深色模式');
  themeToggle.setAttribute('title', isDark ? '切换到浅色模式' : '切换到深色模式');
  renderIcons();
}

themeToggle?.addEventListener('click', () => {
  const nextTheme = currentTheme() === 'dark' ? 'light' : 'dark';
  root.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
  updateThemeButton(nextTheme);
});

document.querySelector('[data-year]').textContent = new Date().getFullYear();

root.classList.add('reveal-ready');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.08 },
);

document.querySelectorAll('.section').forEach((section) => revealObserver.observe(section));

const navLinks = Array.from(document.querySelectorAll('.section-links a'));
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  },
  { rootMargin: '-18% 0px -68% 0px', threshold: 0 },
);

observedSections.forEach((section) => navObserver.observe(section));

window.addEventListener('load', () => {
  updateThemeButton(currentTheme());
  renderIcons();
});
