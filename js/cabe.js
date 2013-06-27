var openLink = document.getElementById('work-link'),
    portfolio = document.getElementById('portfolio'),
    splash = document.getElementById('splash'),

gogogo = function() {
  portfolio.className = 'in-focus';
  splash.className = 'in-background';
};

openLink.onclick = gogogo;