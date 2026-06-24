// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Skills Chart
const ctx = document.getElementById('skillsChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'C++', 'DSA'],
    datasets: [{
      label: 'Skill Level (%)',
      data: [85, 80, 70, 75, 65],
      backgroundColor: [
        '#ff4c60',
        '#6a11cb',
        '#2575fc',
        '#ff9f1c',
        '#2ec4b6'
      ]
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
function toggleProjects() {
  document.getElementById("projectList").classList.toggle("hidden");
}
function toggleResume() {
  document.getElementById("resumeInfo").classList.toggle("hidden");
}