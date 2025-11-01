document.getElementById('yr').textContent = new Date().getFullYear();

// Simple tokenomics pie using Chart.js
const ctx = document.getElementById('pie');
if (ctx) {
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Team 20%','Investors 10%','Public & Liquidity 70%'],
      datasets: [{
        data: [20, 10, 70],
        backgroundColor: ['#d2a43b','#e7b63f','#1f2d3a'],
        borderWidth: 0
      }]
    },
    options: {
      plugins: {
        legend: { labels: { color: '#e6edf3' } }
      }
    }
  });
}

// Fake form submit
const form = document.getElementById('subscribe');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thanks! We will contact you from info@retiredtoken.com');
    form.reset();
  });
}
