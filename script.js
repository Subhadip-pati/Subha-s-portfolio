// ---------- Update year in footer ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("open");
  });

  // Close menu when clicking a link (on mobile)
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      navToggle.classList.remove("open");
    });
  });
}

// ---------- Animate skill bars ----------
function animateSkillBars() {
  document.querySelectorAll(".skill-level-fill").forEach((el) => {
    const lvl = parseInt(el.getAttribute("data-level") || "0", 10);
    el.style.width = lvl + "%";
  });
}

// Fire once after load
window.addEventListener("load", () => {
  setTimeout(animateSkillBars, 400);
});

// ---------- Typing effect ----------
(function typingRoles() {
  const el = document.getElementById("typing-role");
  if (!el) return;

  const roles = [
    "Full Stack Developer • Learner",
    "Python • ML Enthusiast",
    "Git • Problem Solver",
    "C, C++ & Java Learner",
  ];

  let i = 0;
  let j = 0;
  let dir = 1; // 1 = typing, -1 = deleting

  function tick() {
    el.textContent = roles[i].slice(0, j);
    j += dir;

    if (j > roles[i].length) {
      dir = -1;
      setTimeout(tick, 900);
      return;
    }
    if (j < 0) {
      dir = 1;
      i = (i + 1) % roles.length;
      j = 0;
    }
    setTimeout(tick, 60);
  }

  tick();
})();

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

revealEls.forEach((el) => observer.observe(el));

// ---------- Demo contact form handler ----------
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! (Demo form – backend not connected yet)");
    form.reset();
  });
}

// ---------- Back to top button ----------
const backToTopBtn = document.getElementById("back-to-top");
if (backToTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ---------- Marks Predictor Demo ----------
const hoursInput = document.getElementById("hours-input");
const predictBtn = document.getElementById("predict-btn");
const predictOutput = document.getElementById("predict-output");

if (predictBtn && hoursInput && predictOutput) {
  predictBtn.addEventListener("click", () => {
    const hours = parseFloat(hoursInput.value);

    if (isNaN(hours)) {
      predictOutput.textContent = "Please enter a valid number of hours.";
      return;
    }

    // Simple "ML-style" formula (linear relationship)
    let predicted = 40 + 5 * hours;
    if (predicted > 100) predicted = 100;
    if (predicted < 0) predicted = 0;

    let comment = "";
    if (predicted < 50) {
      comment = "You might need more consistent study time.";
    } else if (predicted < 75) {
      comment = "Nice! You're on a decent track, keep going.";
    } else {
      comment = "Great! With this consistency you can aim even higher.";
    }

    predictOutput.textContent = `Predicted Marks ≈ ${predicted.toFixed(
      1
    )} / 100. ${comment}`;
  });
}

// ---------- Python Tips / Snippets ----------
const tipBtn = document.getElementById("tip-btn");
const tipCode = document.getElementById("python-tip");

const pythonTips = [
  `# List comprehension
squares = [x**2 for x in range(1, 11)]
print(squares)`,
  `# Read a file line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())`,
  `# Count frequency of items using Counter
from collections import Counter

nums = [1, 2, 2, 3, 3, 3]
freq = Counter(nums)
print(freq)`,
  `# Simple NumPy array example
import numpy as np

arr = np.array([1, 2, 3, 4])
print(arr.mean(), arr.std())`,
  `# Pandas DataFrame basics
import pandas as pd

data = {"hours": [2, 3, 4], "marks": [60, 70, 80]}
df = pd.DataFrame(data)
print(df.describe())`,
  `# Linear Regression with scikit-learn
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[2], [3], [4], [5]])  # hours
y = np.array([60, 65, 75, 85])      # marks

model = LinearRegression()
model.fit(X, y)
print("Predicted:", model.predict([[4.5]]))`,
  `# Dictionary iteration
student = {"name": "Subhadip", "branch": "CSE", "year": 1}
for key, value in student.items():
    print(key, ":", value)`,
];

if (tipBtn && tipCode) {
  tipBtn.addEventListener("click", () => {
    const random = pythonTips[Math.floor(Math.random() * pythonTips.length)];
    tipCode.textContent = random;
  });
}
