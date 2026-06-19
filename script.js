const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".quick-options button").forEach((button) => {
  button.addEventListener("click", () => {
    const message = encodeURIComponent(
      `Olá, Lara. Vim pelo site da Home Project e gostaria de conversar sobre: ${button.textContent.trim()}.`
    );
    const laraLink = document.querySelector("#lara-link");
    if (laraLink) {
      laraLink.href = `https://wa.me/5533999919651?text=${message}`;
    }
  });
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const floatingContact = document.querySelector(".floating-contact");
const footer = document.querySelector(".site-footer");

if (floatingContact && footer && "IntersectionObserver" in window) {
  const footerObserver = new IntersectionObserver(
    ([entry]) => {
      floatingContact.classList.toggle("is-hidden", entry.isIntersecting);
    },
    { threshold: 0.08 }
  );

  footerObserver.observe(footer);
}