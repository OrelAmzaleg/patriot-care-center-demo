/* Patriot Care Center — front-end interactions (no backend).
   Progressive enhancement: the site is fully usable without JS. */
(function () {
  "use strict";

  /* ---------- Mobile navigation drawer ---------- */
  var menu = document.getElementById("mobile-menu");
  var openBtn = document.getElementById("nav-toggle");
  var closeBtn = document.getElementById("menu-close");
  var scrim = menu ? menu.querySelector(".mobile-menu__scrim") : null;
  var lastFocus = null;

  function openMenu() {
    if (!menu) return;
    lastFocus = document.activeElement;
    menu.setAttribute("data-open", "true");
    if (openBtn) openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
    if (closeBtn) closeBtn.focus();
  }
  function closeMenu() {
    if (!menu) return;
    menu.setAttribute("data-open", "false");
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  if (openBtn) openBtn.addEventListener("click", openMenu);
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  if (scrim) scrim.addEventListener("click", closeMenu);
  if (menu) {
    menu.querySelectorAll("a.m-link, .mobile-menu .btn").forEach(function (a) {
      a.addEventListener("click", closeMenu);
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu && menu.getAttribute("data-open") === "true") closeMenu();
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq__q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
    });
  });

  /* ---------- Scroll reveal ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var revealEls = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Contact form (front-end only demo) ---------- */
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var success = document.getElementById("form-success");
      if (success) {
        success.setAttribute("data-show", "true");
        success.setAttribute("role", "status");
        success.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "center" });
      }
      form.reset();
    });
  }

  /* ---------- Current year in footer ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
