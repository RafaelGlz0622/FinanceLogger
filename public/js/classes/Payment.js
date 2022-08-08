export class Payment {
    constructor(_recipient, _details, _amount) {
        this._recipient = _recipient;
        this._details = _details;
        this._amount = _amount;
    }
    format() {
        return `${this._recipient} is owed $ ${this._amount} for ${this._details} `;
    }
}
