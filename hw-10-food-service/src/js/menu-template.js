'use strict';

import menu from '../menu.json';
import menuTemplate from '../templates/menu-item.hbs';

const refs = {
  menuItem: document.querySelector('.js-menu'),
};

const markup = menuTemplate(menu);

refs.menuItem.insertAdjacentHTML('beforeend', markup);
