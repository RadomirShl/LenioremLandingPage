import {animItems} from './module/appearance-blocks.js';
import {OpenMein} from './module/popup-mein.js';
animItems('.join, .courses, .peculiarity, .peculiarity__background, .confidence');
OpenMein('.mein__login', '.modal', 'modal--not_activated', '.modal__container');
OpenMein('.mein__button', '.nav--phone', 'nav--phone--on', '.nav__list');

