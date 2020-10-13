import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function getPhoneNumbers(callback){

const numbers = ['111111111111111111', '34235235235', '242333535', '0'];

const numberJSONArray = [
          {phone: '324332325'}, {phone:'34235235235'}, {phone: '242333535'}];

const numberJSONArray = {
  1: {phone: '324332325'}, 2: {phone:'34235235235'}, 3: {phone: '242333535'}
};

let i = 0;
numbers.forEach(number => {
  console.log(`${number}`);
});

useCallback(null, true);


const numbers = ['324332325', '34235235235', '242333535'];


}
getPhoneNumbers(function(error, resut){
  console.log(result);
});

getPhoneNumbers((error, resut) => {
  console.log(result);
});

const fiteredNumbers = numbers.filter(number => number!='0');

numbers.map(number => console.log(number));

getPhoneNumbers(resut => {  console.log(result);});

const employee = {
  id: 1,
  name: 'A',
  age: 5
};

const employer = {
  id: 1,
  name: 'A',
  age: 5
};


var id = employee ? employee.id : -1;
var name = employee ? employee.name : '';
var age = employee ? employee.age : 0;

//const { id, name, age } = employee;   //=> null exception
//const { id, name, age } = employee ? employee : {};


const { id: employee_id = -1, name: employee_name = '', age: employee_age = 0 } = employee || {};

console.log(employee_id);
console.log(employee_name);
console.log(employee_age);

const { id: employer_id = -1, name: employer_name = '', age: employer_age = 0 } = employer || {};

console.log(employer_id);
console.log(employer_name);
console.log(employer_age);

const batch_2019 = ['A', 'B', 'C'];
const batch_2020 = ['D', 'E', 'F'];

//const combined = batch_2019.concat(batch_2020);

const combined = [...batch_2019, ...batch_2020, 'G', 'H', 'I'];

console.log(combined);

















