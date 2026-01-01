
function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

const nav = document.querySelector(".nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});


const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = 90;

    const position = target.offsetTop - offset;

    window.scrollTo({
      top: position,
      behavior: "smooth"
    });

    document.getElementById("menu").classList.remove("show");
  });
});


const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section").forEach(section => {
  observer.observe(section);
});

function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = 90;
  const position = target.offsetTop - offset;

  window.scrollTo({
    top: position,
    behavior: "smooth"
  });

  document.getElementById("menu").classList.remove("show");
}


function submitForm(event) {
  event.preventDefault();
  
  
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  
  
  

  alert("Thank you! Your message has been sent. We'll contact you within 24 hours.");
  

  form.reset();
  
}
