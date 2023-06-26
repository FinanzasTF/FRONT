export class Anualidad {
    constructor(
        public monto:number,
        public fechasEmision: string[],
        public fechasVencimiento: string[],
        public interes: string,
        public tasaCalculo: string
    ) { }
}