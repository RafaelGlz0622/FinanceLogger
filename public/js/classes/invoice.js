export class Invoice {
    constructor(_client, _details, _amount) {
        this._client = _client;
        this._details = _details;
        this._amount = _amount;
    }
    format() {
        return `${this._client} owes $ ${this._amount} for ${this._details} `;
    }
}
