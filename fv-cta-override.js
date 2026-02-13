(function () {
  function isVisible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function findFvApplyCta() {
    const nodes = Array.from(
      document.querySelectorAll('a, button, [role="button"]')
    );

    const candidates = nodes
      .filter((el) => !el.closest('#cta'))
      .filter((el) => /お申し込み/.test((el.textContent || '').trim()))
      .filter((el) => isVisible(el))
      .map((el) => ({ el, rect: el.getBoundingClientRect() }))
      .filter(({ rect }) => rect.top >= -20 && rect.top <= window.innerHeight * 1.35)
      .sort((a, b) => a.rect.top - b.rect.top);

    return candidates[0] ? candidates[0].el : null;
  }

  function decorateFvCta() {
    const cta = findFvApplyCta();
    if (!cta) return false;
    if (!cta.classList.contains('fv-cta-apply')) {
      cta.classList.add('fv-cta-apply');
    }

    if (!cta.querySelector('.fv-cta-kicker')) {
      const kicker = document.createElement('span');
      kicker.className = 'fv-cta-kicker';
      kicker.textContent = '技術を身につける';
      cta.appendChild(kicker);
    }

    return true;
  }

  let retryCount = 0;
  const timer = window.setInterval(function () {
    const done = decorateFvCta();
    retryCount += 1;
    if (done || retryCount >= 60) {
      window.clearInterval(timer);
    }
  }, 300);

  window.addEventListener('resize', decorateFvCta, { passive: true });
})();
