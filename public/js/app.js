import { Invoice } from './classes/invoice.js';
const _invOne = new Invoice('Mario', 'Work on the mario website', 250);
const _invTwo = new Invoice('Luigi', 'Work on the luigi website', 300);
let _invoices = [];
_invoices.push(_invOne);
_invoices.push(_invTwo);
_invoices.forEach(inv => {
    console.log(inv.format());
});
const _form = document.querySelector(".new-item-form");
const _amountInput = document.querySelector("#amount");
const _tofromInput = document.querySelector("#tofrom");
const _detailsInput = document.querySelector("#details");
const _amountTypeInput = document.querySelector("#type");
_form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(_amountTypeInput.value, _tofromInput.value, _detailsInput.value, _tofromInput.value);
});
