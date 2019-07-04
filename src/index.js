import { Header } from './app/header';
import './styles/sass/main.sass';
import webpackgif from './assets/images/webpack.gif';

let header = new Header();
let firstHeading = header.getFirstHeading();

console.log(firstHeading);

document.getElementById('webpack-gif').setAttribute('src', webpackgif);
