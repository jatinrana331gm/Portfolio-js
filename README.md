# 💻 Professional Portfolio - Jatin Rana

A high-performance **personal portfolio website** showcasing my expertise in **Software Quality Assurance (QA)** and **Web Development**. This project serves as a central hub for my technical projects, automation frameworks, and professional journey.

---

## 🌐 Live Demo
[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=github)](https://jatinrana331gm.github.io/Codsoft-Portfolio/)  
[![Vercel](https://img.shields.io/badge/Live%20Demo-Vercel-black?style=for-the-badge&logo=vercel)](https://jatin-portfolio-kappa.vercel.app/)

---

## ✨ Key Features

### **Description:** Developed a modern, single-page application to highlight my skills as a **QA Automation Engineer**. The site is designed with a focus on clean UI/UX and seamless performance.

### **Core Highlights:**
1. **Responsive Design:** Optimized for all devices (Mobile, Tablet, and Desktop) using CSS Media Queries.
2. **QA Skill Showcase:** Dedicated section for Manual Testing, Selenium, TestNG, and API Testing.
3. **Interactive Experience:** Smooth navigation and scroll-triggered animations implemented via Vanilla JavaScript.
4. **Project Gallery:** Detailed view of automation frameworks and web projects.

---

## 🛠 Tech Stack & Tools
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![TestNG](https://img.shields.io/badge/TestNG-FF9800?style=for-the-badge&logo=testng&logoColor=white)
![Jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 📷 Screenshots

<p align="center">
  <img src="https://raw.githubusercontent.com/jatinrana331gm/Portfolio-js/main/screenshots/1.jpg" width="400" alt="Home Section" />
  <img src="https://raw.githubusercontent.com/jatinrana331gm/Portfolio-js/main/screenshots/2.jpg" width="400" alt="Skills Section" />
</p>

---

## 💻 Smooth Scroll Implementation
```javascript
// Optimized Smooth Scroll for modern browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

👤 Author
Jatin Rana MCA Graduate | Software Test Engineer (QA)

📧 Email: jatinrana331@gmail.com

🔗 LinkedIn: In/Jatin-Rana

🔗 GitHub: @jatinrana331gm
