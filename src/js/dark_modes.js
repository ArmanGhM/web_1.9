const themeToggler = document.getElementById("theme-toggler");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  body.classList.add("dark-mode");
  themeIcon.src = "./src/img/Sun.svg";
}

themeToggler.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeIcon.src = "./src/img/Sun.svg";
  } else {
    localStorage.setItem("theme", "light");
    themeIcon.src = "./src/img/Moon.svg";
  }
});


let navScorll = document.querySelector('.nav-sol')
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navScorll.classList.add('nav-sol-scroll')
  }
  else {
    navScorll.classList.remove('nav-sol-scroll')
  }
})
document.addEventListener("DOMContentLoaded", function () {
  // نمایش صفحه بارگذاری برای نیم ثانیه
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 800); // 800 میلی‌ثانیه (زمان انیمیشن)
});

