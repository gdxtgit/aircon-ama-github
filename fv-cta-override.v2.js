(function () {
  function normalizeText(text) {
    return (text || "").replace(/\s+/g, "").trim();
  }

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
      .map((el) => ({ el, text: normalizeText(el.textContent) }))
      .filter(({ text }) => text.includes('お申し込み'))
      .map(({ el, text }) => ({ el, text, rect: el.getBoundingClientRect() }))
      .filter(({ el }) => isVisible(el))
      .filter(({ rect }) => rect.top >= -20 && rect.top <= window.innerHeight * 1.1)
      .sort((a, b) => {
        // Prefer the button whose text is exactly "お申し込み".
        const exactA = a.text === "お申し込み" ? 1 : 0;
        const exactB = b.text === "お申し込み" ? 1 : 0;
        if (exactA !== exactB) return exactB - exactA;
        // Then prefer shorter text nodes (avoid wrapping parent containers).
        if (a.text.length !== b.text.length) return a.text.length - b.text.length;
        return a.rect.top - b.rect.top;
      });

    return candidates[0] ? candidates[0].el : null;
  }

  function decorateFvCta() {
    const cta = findFvApplyCta();
    if (!cta) return false;
    if (!cta.classList.contains('fv-cta-apply')) {
      cta.classList.add('fv-cta-apply');
    }

    if (!cta.hasAttribute("data-fv-cta-normalized")) {
      cta.setAttribute("data-fv-cta-normalized", "true");
      cta.replaceChildren();
      const label = document.createElement("span");
      label.className = "fv-cta-label";
      label.textContent = "お申し込み";
      cta.appendChild(label);
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
