import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/hasFormatter.js';


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
const _form = document.querySelector(".new-item-form") as  HTMLInputElement;
const _amountInput = document.querySelector("#amount") as  HTMLInputElement;
const _tofromInput = document.querySelector("#tofrom") as HTMLInputElement;  
const _detailsInput = document.querySelector("#details") as HTMLInputElement;  
const _amountTypeInput = document.querySelector("#type") as HTMLSelectElement;  

// list template instance
const ul = document.querySelector('ul') as HTMLUListElement;
const list = new ListTemplate(ul);


_form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [_tofromInput.value,_detailsInput.value,_amountInput.valueAsNumber];

    let _doc: HasFormatter;
    if (_amountTypeInput.value === 'invoice'){
        _doc = new Invoice(...values);
    }else{            
        _doc = new Payment(...values);
    }

    list.render(_doc, _amountTypeInput.value, 'end');
   
});

// tuples

let arr = ['ryu', 25, true];
arr[0] = false;
arr[1]  = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 20;
let student: [string, number];
student = ['chunli', 2334];








// Generics
// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 300);
//     return {...obj, uid };
// }

// let docOne = addUID({name: 'yoshi', age: 865});

// interface Resource<T> {
//     uid: number,
//     resourceName: string,
//     data: T 
// }

// const docThree: Resource<object> = {
//     uid: 1251,
//     resourceName: 'name',
//     data: {name: 'hola'}
// }

// console.log(docOne);