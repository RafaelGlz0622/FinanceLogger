import { HasFormatter } from '../interfaces/hasFormatter.js';

export class Payment implements HasFormatter{
    constructor(
        readonly _recipient: string,
        private _details: string,
        public _amount: number
    ){}

    format(): string {
        return `${this._recipient} is owed $ ${this._amount} for ${this._details} `
    }
}
