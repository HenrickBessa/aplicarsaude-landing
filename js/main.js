// Revela blocos ao rolar. Sem JS (ou sem IntersectionObserver) tudo já aparece visível.
if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  document.documentElement.setAttribute('data-reveal-ready', '');
  const io = new IntersectionObserver((entradas) => {
    for (const e of entradas) {
      if (!e.isIntersecting) continue;
      e.target.setAttribute('data-revealed', '');
      // Depois de aparecer, devolve o hover/transição original do elemento.
      e.target.addEventListener('transitionend', () => e.target.removeAttribute('data-reveal'), { once: true });
      io.unobserve(e.target);
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
}
