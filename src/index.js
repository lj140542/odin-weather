import './style.css';
import { Controller } from './controller';

const form = document.querySelector('form');

form.addEventListener('submit', Controller.recoverWeatherInfo);
Controller.recoverWeatherInfo(null);