'use strict';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  switch: document.querySelector('.js-switch-input'),
};

refs.switch.addEventListener('change', handleTheme);
document.addEventListener('DOMContentLoaded', loadedTheme);

function loadedTheme() {
  const themeMode = localStorage.getItem('theme');
  if (themeMode === 'dark-theme') {
    refs.body.classList.add(Theme.DARK);
    refs.switch.checked = true;
  } else {
    refs.body.classList.add(Theme.LIGHT);
  }
}

function handleTheme() {
  if (refs.switch.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', 'dark-theme');
  } else {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', 'light-theme');
  }
}
