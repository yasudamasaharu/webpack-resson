import _ from 'lodash'
import './style.css'
import logo from './logo.png'

function component() {
  const element = document.createElement('div');
  const arry = ['Hello', 'webpack', '!!']
  element.innerHTML =  _.join(arry, ' ')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei')

const img = new Image()
img.src = logo
document.body.appendChild(img);
