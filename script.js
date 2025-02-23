function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  // Function to handle scroll and highlight active section
function highlightActiveSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links li a");

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Adjust based on how much of the section should be visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
}

// Call the function
highlightActiveSection();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
      }
  });

  navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
      }
  });
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const backToPortfolioButton = document.getElementById("backToPortfolio");

  // Ensure the button exists before adding the event listener
  if (backToPortfolioButton) {
      backToPortfolioButton.addEventListener("click", function() {
        window.location.href = "index.html";
      });
  } else {
      console.error("Back to Portfolio button not found.");
  }
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  const backToPortfolioButton = document.getElementById("backToPortfolio");

  // Ensure the button exists before adding the event listener
  if (backToPortfolioButton) {
      backToPortfolioButton.addEventListener("click", function() {
        window.location.href = "index.html";
      });
  } else {
      console.error("Back to Portfolio button not found.");
  }
});

function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  menu.classList.toggle('active'); // Add or remove class for showing/hiding the menu
}


