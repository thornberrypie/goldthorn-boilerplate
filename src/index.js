import { Header } from './app/header';
import './styles/scss/main.scss';
import webpackgif from './assets/images/webpack.gif';

let header = new Header();
let firstHeading = header.getFirstHeading();

console.log(firstHeading);

document.getElementById('webpack-gif').setAttribute('src', webpackgif);
