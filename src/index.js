import _ from 'lodash'
//import { NAME as NAME_OF_MY } from './utilities'
import Tiger from './utilities'

//console.log(NAME_OF_MY);

console.log(Tiger.say());

function component() {
  const element = document.createElement('div');
  const arry = ['Hello', 'webpack', '!!']
  element.innerHTML =  _.join(arry, ' ')
  return element;
}

document.body.appendChild(component());
