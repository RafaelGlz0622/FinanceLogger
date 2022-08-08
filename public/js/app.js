import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// interface IsPerson {
//     name: string,
//     age: number,
//     speak(a: string): void,
//     spend(a: number): number    
// }
// const me: IsPerson = {
//     name: "rafael",
//     age: 36,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number {
//         return amount;
//     }
// }
// const greetPerson = (Person: IsPerson) => {
//     console.log('Hello ' , Person.name);
// }
// greetPerson(me);
// const _invOne = new Invoice('Mario', 'Work on the mario website', 250);
// const _invTwo = new Invoice('Luigi', 'Work on the luigi website', 300);
// let _invoices: Invoice[] = [];
//  _invoices.push(_invOne);
//  _invoices.push(_invTwo);
// _invoices.forEach(inv => {    
//     console.log(inv.format());
// });
// Inputs
const _form = document.querySelector(".new-item-form");
const _amountInput = document.querySelector("#amount");
const _tofromInput = document.querySelector("#tofrom");
const _detailsInput = document.querySelector("#details");
const _amountTypeInput = document.querySelector("#type");
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
_form.addEventListener('submit', (e) => {
    e.preventDefault();
    let _doc;
    if (_amountTypeInput.value === 'invoice') {
        _doc = new Invoice(_tofromInput.value, _detailsInput.value, _amountInput.valueAsNumber);
    }
    else {
        _doc = new Payment(_tofromInput.value, _detailsInput.value, _amountInput.valueAsNumber);
    }
    list.render(_doc, _amountTypeInput.value, 'end');
});
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 300);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 865 });
const docThree = {
    uid: 1251,
    resourceName: 'name',
    data: { name: 'hola' }
};
console.log(docOne);
