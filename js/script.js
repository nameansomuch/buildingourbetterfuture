(function(){
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Theme toggle (system-aware)
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) root.classList.toggle('dark', stored === 'dark');
  btn && btn.addEventListener('click', () => {
    const dark = root.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });

  // Contact form progressive enhancement
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = 'Sending…';
      const data = new FormData(form);
      try {
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
        if (res.ok) {
          status.textContent = 'Thanks! I\'ll get back to you soon.';
          form.reset();
        } else {
          status.textContent = 'Hmm, something went wrong. You can email me directly.';
        }
      } catch (err) {
        status.textContent = 'Network error. Please try again later.';
      }
    });
  }
})();
