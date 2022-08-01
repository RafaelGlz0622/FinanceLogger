import { Invoice } from './classes/invoice.js';

const _invOne = new Invoice('Mario', 'Work on the mario website', 250);
const _invTwo = new Invoice('Luigi', 'Work on the luigi website', 300);

let _invoices: Invoice[] = [];
 _invoices.push(_invOne);
 _invoices.push(_invTwo);

_invoices.forEach(inv => {    
    console.log(inv.format());
});



const _form = document.querySelector(".new-item-form") as  HTMLInputElement;
const _amountInput = document.querySelector("#amount") as  HTMLInputElement;
const _tofromInput = document.querySelector("#tofrom") as HTMLInputElement;  
const _detailsInput = document.querySelector("#details") as HTMLInputElement;  
const _amountTypeInput = document.querySelector("#type") as HTMLSelectElement;  


_form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        _amountTypeInput.value,
        _tofromInput.value,
        _detailsInput.value,
        _tofromInput.value
    );
});