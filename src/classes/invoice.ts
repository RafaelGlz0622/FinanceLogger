export class Invoice{
    constructor(
        readonly _client: string,
        private _details: string,
        public _amount: number
    ){}

    format(): string {
        return `${this._client} owes $ ${this._amount} for ${this._details} `
    }
}
