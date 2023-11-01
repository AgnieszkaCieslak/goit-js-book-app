const themeButton = document.getElementById('colorSwitch');
const body = document.querySelector('body');
//const logoImage = document.getElementById('logoImage');

let theme = localStorage.getItem('theme') || 'light-theme';

function setThemeButtonIconPosition() {
  if (theme === 'dark-theme') {
    themeButton.style.transform = 'translateX(21px)';
    //logoImage.src = './images/header/logo-bright.png';
  } else {
    themeButton.style.transform = 'translateX(0)';
    //logoImage.src = './images/header/logo-dark.png';
  }
}

setThemeButtonIconPosition();

themeButton.checked = theme === 'dark-theme';

themeButton.addEventListener('change', () => {
  if (theme === 'dark-theme') {
    body.classList.remove('dark-theme');
    theme = 'light-theme';
  } else {
    body.classList.add('dark-theme');
    theme = 'dark-theme';
  }
  setThemeButtonIconPosition();


  localStorage.setItem('theme', theme);
});


theme = localStorage.getItem('theme') || 'light-theme';
setThemeButtonIconPosition();
body.classList.add(theme);

