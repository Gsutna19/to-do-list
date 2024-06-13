import _ from 'lodash';
import './style/style.css';
import Icon from './images/icon.jpg';
import printMe from './print';
// TODO: create modules for each HTML element and implementation.
// (Maybe don't use HtmlWebpackPlugin?) This way normal Html works.

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    //Lodash, now imported for this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console.';
    btn.onclick = printMe;

    // Add image to our existing div
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(btn);
    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());