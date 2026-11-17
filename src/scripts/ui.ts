// Small progressive enhancements. Everything works without them (native <details>, anchors, tel:).
const header = document.querySelector<HTMLElement>("[data-header]");
const hero = document.getElementById("hero");
const bar = document.querySelector<HTMLElement>("[data-action-bar]");

// Header: thin line after scrolling.
const onScroll = () => header?.classList.toggle("is-scrolled", window.scrollY > 8);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Mobile action bar: appears after the first screen.
if (hero && bar && "IntersectionObserver" in window) {
  bar.classList.add("is-armed");
  new IntersectionObserver(([e]) => {
    const shown = !e.isIntersecting;
    bar.classList.toggle("is-shown", shown);
    bar.toggleAttribute("inert", !shown);
  }, { threshold: 0 }).observe(hero);
}

// Disclosures («Написати», mobile menu): close on Escape and outside click; menu closes after choosing a section.
const disclosures = Array.from(document.querySelectorAll<HTMLDetailsElement>("details[data-reach], details[data-menu]"));
document.addEventListener("keydown", (ev) => {
  if (ev.key !== "Escape") return;
  for (const d of disclosures) {
    if (d.open) { d.open = false; d.querySelector("summary")?.focus(); }
  }
});
document.addEventListener("click", (ev) => {
  for (const d of disclosures) {
    if (d.open && !d.contains(ev.target as Node)) d.open = false;
  }
});
const menu = document.querySelector<HTMLDetailsElement>("details[data-menu]");
menu?.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => a.addEventListener("click", () => { menu.open = false; }));
menu?.addEventListener("toggle", () => document.documentElement.classList.toggle("menu-open", menu.open));
window.matchMedia("(min-width: 1100px)").addEventListener("change", (m) => { if (m.matches && menu) menu.open = false; });
